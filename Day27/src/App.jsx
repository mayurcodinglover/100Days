import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const slides = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=500&fit=crop"
  ];
  
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };

  const nextSlide = () => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };
  console.log(current);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Carousel Container */}
        <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden group">
          {/* Image Container */}
          <div className="relative h-96 md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === current
                    ? 'opacity-100 translate-x-0'
                    : index < current
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Counter */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            {current + 1} / {slides.length}
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? 'w-8 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-6 grid grid-cols-5 gap-3">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === current
                  ? 'ring-4 ring-blue-500 scale-105'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={slide}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;