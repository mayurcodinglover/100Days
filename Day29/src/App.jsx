import { useState } from "react";
import { Heart, X, ShoppingBag } from "lucide-react";

function App() {
  const products = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format",
      name: "Wireless Headphones",
      rating: "4.5",
      price: "1999",
      category: "Electronics",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format",
      name: "Smart Watch",
      rating: "4.2",
      price: "2999",
      category: "Wearables",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&auto=format",
      name: "Bluetooth Speaker",
      rating: "4.6",
      price: "1499",
      category: "Electronics",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&auto=format",
      name: "Gaming Mouse",
      rating: "4.4",
      price: "899",
      category: "Accessories",
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format",
      name: "Mechanical Keyboard",
      rating: "4.7",
      price: "3499",
      category: "Accessories",
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?w=400&auto=format",
      name: "USB-C Power Bank",
      rating: "4.3",
      price: "1299",
      category: "Electronics",
    },
  ];

  const [wishlist, setWishlist] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleWishlist = (id) => {
    const exist = wishlist.some((item) => item.id === id);
    if (exist) {
      setWishlist((wl) => wl.filter((item) => item.id !== id));
    } else {
      const product = products.find((p) => p.id === id);
      if (product) {
        setWishlist((wl) => [...wl, product]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Product Store</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition"
          >
            <Heart className="w-6 h-6 text-red-500" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => handleWishlist(p.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.some((item) => item.id === p.id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {p.name}
                </h3>

                <p className="text-sm text-gray-500 mb-3">{p.category}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-500 font-medium">
                    ⭐ {p.rating}
                  </span>
                  <span className="text-xl font-bold text-green-600">
                    ₹{p.price}
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Wishlist Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">
              My Wishlist ({wishlist.length})
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-grow overflow-y-auto p-6">
            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Heart className="w-16 h-16 mb-4" />
                <p className="text-lg">Your wishlist is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((wl) => (
                  <div
                    key={wl.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <img
                      src={wl.image}
                      alt={wl.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {wl.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {wl.category}
                      </p>
                      <p className="text-lg font-bold text-green-600">
                        ₹{wl.price}
                      </p>
                    </div>
                    <button
                      onClick={() => handleWishlist(wl.id)}
                      className="self-start p-2 hover:bg-red-50 rounded-full transition"
                    >
                      <X className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;