import React, { useState, useEffect, useCallback } from 'react';
import { RentalItem } from '../types';
import { ChevronLeftIcon, ChevronRightIcon } from './IconComponents';

interface CarouselProps {
  items: RentalItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] group bg-slate-900">
      {/* Slides container */}
      <div className="w-full h-full rounded-b-3xl overflow-hidden relative">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-black mb-3 tracking-tighter drop-shadow-lg animate-fade-in-down">
          {items[currentIndex].name}
        </h2>
        <p className="text-lg md:text-xl text-slate-200 drop-shadow-md animate-fade-in-up">
          From our {items[currentIndex].categoryName} Rentals.
        </p>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-5 z-30 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-5 z-30 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out 0.2s both; }
        .animate-fade-in-up { animation: fade-in-up 0.8s 0.4s ease-out both; }
      `}</style>
    </div>
  );
};

export default Carousel;
