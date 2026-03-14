import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import { createClient } from "redis";

dotenv.config();

const app = express();
const PORT = 3000;
const DEFAULT_TIME = 3600;

// 🔌 Step 1: Create & connect Redis client
const redisClient = createClient();
redisClient.on("error", (err) => console.log("Redis Error:", err));
await redisClient.connect();

// ♻️ Step 2: Reusable cache helper
// key   → the unique name to store/find data in Redis (e.g. "photos:3")
// cb    → a "fetcher" function — called ONLY when data is NOT in cache
async function getOrSetCache(key, cb) {
  // 🔍 First, check if data already exists in Redis
  const cachedData = await redisClient.get(key);

  if (cachedData) {
    console.log("✅ Cache HIT:", key);
    return JSON.parse(cachedData); // return stored data directly, no API call
  }

  // ❌ Not in cache → call the fetcher function to get fresh data
  console.log("❌ Cache MISS:", key);
  const freshData = await cb();

  // 💾 Save fresh data to Redis for next time (expires after DEFAULT_TIME seconds)
  await redisClient.set(key, JSON.stringify(freshData), { EX: DEFAULT_TIME });

  return freshData;
}

// 📸 Step 3: Route using getOrSetCache
app.get("/photos", async (req, res) => {
  try {
    const albumId = req.query.albumId;

    // Build a unique cache key based on whether albumId was provided
    // e.g. "photos:3" for albumId=3, or just "photos" for all photos
    const cacheKey = albumId ? `photos:${albumId}` : "photos";

    // 🚀 Use getOrSetCache instead of manually checking Redis
    // The arrow function () => ... is our "fetcher" — runs only on cache miss
    const data = await getOrSetCache(cacheKey, async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        { params: { albumId } }
      );
      return data; // this gets saved to Redis automatically
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));