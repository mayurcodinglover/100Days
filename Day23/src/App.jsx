import { useState } from "react";
import "./App.css";

function App() {
  const category = ["electronics", "fashion", "grocery"];

  const products = [
    // ---------- ELECTRONICS ----------
    {
      image: "https://picsum.photos/300/200?random=1",
      name: "Wireless Bluetooth Headphones",
      price: "1499",
      description: "Over-ear wireless headphones with deep bass and noise isolation.",
      rating: "4.6",
      category: "electronics",
      time: "2 days ago",
    },
    {
      image: "https://picsum.photos/300/200?random=2",
      name: "Smart Fitness Band",
      price: "999",
      description: "Heart-rate monitoring fitness band with step tracking.",
      rating: "4.3",
      category: "electronics",
      time: "5 days ago",
    },
    {
      image: "https://picsum.photos/300/200?random=3",
      name: "Portable Bluetooth Speaker",
      price: "1299",
      description: "Compact speaker with HD sound and long battery life.",
      rating: "4.5",
      category: "electronics",
      time: "1 day ago",
    },

    // ---------- FASHION ----------
    {
      image: "https://picsum.photos/300/200?random=6",
      name: "Casual Cotton T-Shirt",
      price: "399",
      description: "Soft breathable cotton T-shirt for daily wear.",
      rating: "4.1",
      category: "fashion",
      time: "4 days ago",
    },
    {
      image: "https://picsum.photos/300/200?random=7",
      name: "Men’s Slim Fit Jeans",
      price: "1199",
      description: "Stretchable slim-fit jeans with premium fabric.",
      rating: "4.3",
      category: "fashion",
      time: "2 days ago",
    },

    // ---------- GROCERY ----------
    {
      image: "https://picsum.photos/300/200?random=11",
      name: "Organic Brown Rice (1kg)",
      price: "120",
      description: "High-quality organic brown rice rich in nutrients.",
      rating: "4.6",
      category: "grocery",
      time: "2 days ago",
    },
    {
      image: "https://picsum.photos/300/200?random=12",
      name: "Fresh Apples (1kg)",
      price: "160",
      description: "Crisp red apples directly sourced from farms.",
      rating: "4.7",
      category: "grocery",
      time: "1 day ago",
    }
  ];

  // ---------- STATE FOR SELECTED CATEGORY ----------
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ---------- FILTER PRODUCTS ----------
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center items-center gap-4 mb-10">
        
        {/* ALL BUTTON */}
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-6 py-2 rounded-lg shadow capitalize ${
            selectedCategory === "all"
              ? "bg-orange-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          ALL
        </button>

        {/* OTHER CATEGORY BUTTONS */}
        {category.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg shadow capitalize ${
              selectedCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={product.image}
              alt="Product"
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold text-lg">{product.name}</h1>
                <p className="text-green-600 font-semibold">${product.price}</p>
              </div>

              <p className="text-sm text-gray-600 mb-3">{product.description}</p>

              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <p>⭐⭐⭐⭐ {product.rating}</p>
                <p>{product.time}</p>
              </div>

              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
