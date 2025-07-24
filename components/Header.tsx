import React, { useState, useEffect } from 'react';
import { StoreIcon } from './IconComponents';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-lg backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onHomeClick}
          title="Back to Home"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
            <StoreIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Chennai Rentals
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;