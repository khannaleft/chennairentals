import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onSelect: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(category)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-2xl hover:ring-4 hover:ring-purple-500/50"
    >
      <div className="relative h-60">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <h3 className="absolute bottom-5 left-5 text-3xl font-extrabold text-white tracking-wider">
          {category.name}
        </h3>
      </div>
      <div className="p-5 bg-white">
        <p className="text-slate-600">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;