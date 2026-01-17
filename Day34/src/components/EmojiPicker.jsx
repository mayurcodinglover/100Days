import { useState } from "react";
import { emojis } from "../data/emoji";

const categories = ["all", "smileys", "gestures", "emotions", "cool", "love"];

export default function EmojiPicker() {
  const [active, setActive] = useState("all");

  // filter emojis
  const filtered =
    active === "all"
      ? emojis
      : emojis.filter((e) => e.category === active);

  // copy emoji
  const copyEmoji = (emoji) => {
    navigator.clipboard.writeText(emoji);
    alert(`${emoji} copied!`);
  };

  return (
    <div className="w-[380px] bg-white rounded-xl shadow-lg p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 rounded-lg font-semibold">
        ✨ Emoji Picker ✨
        <p className="text-xs">Click emoji to copy</p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 rounded-full text-sm capitalize
              ${
                active === cat
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Emojis */}
      <div className="grid grid-cols-6 gap-3 mt-4 text-2xl">
        {filtered.length === 0 ? (
          <p className="col-span-6 text-center text-gray-400">
            No emojis found 😕
          </p>
        ) : (
          filtered.map((e, i) => (
            <button
              key={i}
              onClick={() => copyEmoji(e.symbol)}
              className="hover:bg-gray-100 rounded p-2"
            >
              {e.symbol}
            </button>
          ))
        )}
      </div>

      <p className="text-xs text-center text-gray-400 mt-3">
        Showing {filtered.length} emojis
      </p>
    </div>
  );
}
