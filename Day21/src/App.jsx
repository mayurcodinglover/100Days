import { useState } from 'react'
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    let product = [
    {
      image: "https://picsum.photos/300/200?random=1",
      name: "Wireless Bluetooth Headphones",
      description: "Over-ear headphones with noise cancellation and deep bass.",
      rating: "4.6",
      price: "1499"
    },
    {
      image: "https://picsum.photos/300/200?random=2",
      name: "Smart Fitness Band",
      description: "Fitness tracker with heart rate and sleep monitoring.",
      rating: "4.3",
      price: "999"
    },
    {
      image: "https://picsum.photos/300/200?random=3",
      name: "Power Bank 20000mAh",
      description: "Fast charging dual-port power bank.",
      rating: "4.5",
      price: "1299"
    },
    {
      image: "https://picsum.photos/300/200?random=4",
      name: "USB-C Fast Charger 20W",
      description: "Fast charging adapter with Type-C cable.",
      rating: "4.2",
      price: "499"
    },
    {
      image: "https://picsum.photos/300/200?random=5",
      name: "Wireless Mouse",
      description: "Silent click ergonomic wireless mouse.",
      rating: "4.4",
      price: "350"
    },
    {
      image: "https://picsum.photos/300/200?random=6",
      name: "Gaming Keyboard RGB",
      description: "RGB mechanical keyboard with blue switches.",
      rating: "4.7",
      price: "1999"
    },
    {
      image: "https://picsum.photos/300/200?random=7",
      name: "Smart LED Bulb",
      description: "Wi-Fi enabled color changing LED bulb.",
      rating: "4.1",
      price: "299"
    },
    {
      image: "https://picsum.photos/300/200?random=8",
      name: "Laptop Stand",
      description: "Adjustable aluminium laptop stand 15-inch.",
      rating: "4.6",
      price: "799"
    },
    {
      image: "https://picsum.photos/300/200?random=9",
      name: "Tripod Stand",
      description: "Flexible tripod stand for mobile and DSLR.",
      rating: "4.3",
      price: "450"
    },
    {
      image: "https://picsum.photos/300/200?random=10",
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and waterproof design.",
      rating: "4.8",
      price: "1599"
    }
  ];
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage=3;
  const startIndex=(currentPage-1)*itemsPerPage;
  const currentItems=product.slice(startIndex,startIndex+itemsPerPage);
  const totalPages=Math.ceil(product.length/itemsPerPage);


  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center">Featured Product</h1>
        <p className="text-center text-gray-600 mb-6">Discover amazing products at great prices</p>

        <div className="grid grid-cols-3 gap-6">
          {currentItems.map((product,index)=>{
            return <>
                   <div className="shadow-md rounded-lg max-w-xs flex flex-col p-4">
            <img src={product.image} alt="" className="h-40 w-full rounded-md" />
           <button
  className="absolute ml-[13rem] text-xl bg-transparent p-0"
>
  <i className="far fa-heart"></i>
</button>

            <h1 className="font-bold text-left mt-2 w-full">{product.name}</h1>

            <p className="text-sm text-left w-full mt-1">{product.description}</p>

            <div className="flex justify-start items-start w-full mt-2">
              <div className="star-rating text-yellow-500">
                <span className="filled-star">&#9733;</span>
                <span className="filled-star">&#9733;</span>
                <span className="filled-star">&#9733;</span>
                <span className="empty-star">&#9734;</span>
                <span className="empty-star">&#9734;</span>
              </div>
            </div>

            <p className="text-left w-full text-lg font-semibold mt-2">${product.price}</p>
          </div>
          
            </>
            
          })}
         
        </div>
       <div className="flex items-center justify-center gap-4 mt-6">
  <button
    onClick={() => setcurrentPage((p) => Math.max(1, p - 1))}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-full text-white font-semibold transition 
      ${currentPage === 1 
        ? "bg-gray-300 cursor-not-allowed" 
        : "bg-blue-600 hover:bg-blue-700 shadow-md"}
    `}
  >
    ← Prev
  </button>

  <p className="text-lg font-bold">
    {currentPage} <span className="text-gray-500">/</span> {totalPages}
  </p>

  <button
    onClick={() => setcurrentPage((p) => Math.min(totalPages, p + 1))}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded-full text-white font-semibold transition 
      ${currentPage === totalPages
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 shadow-md"}
    `}
  >
    Next →
  </button>
</div>

      </div>
    </>
  );
}

export default App;
