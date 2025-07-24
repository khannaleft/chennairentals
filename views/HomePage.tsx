import React from 'react';
import { Category, RentalItem } from '../types';
import CategoryCard from '../components/CategoryCard';
import Carousel from '../components/Carousel';
import { RENTAL_CATEGORIES } from '../constants';

interface HomePageProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

// Hand-pick some visually appealing items for the carousel
const featuredItems: RentalItem[] = [
  RENTAL_CATEGORIES[3].items[6], // PlayStation 5
  RENTAL_CATEGORIES[2].items[4], // Luxury Sedan
  RENTAL_CATEGORIES[1].items[0], // Sony A7S III
  RENTAL_CATEGORIES[0].items[4], // LED Dance Floor
  RENTAL_CATEGORIES[3].items[0], // Epson 4K Projector
];

const HomePage: React.FC<HomePageProps> = ({ categories, onSelectCategory }) => {
  return (
    <div>
      <Carousel items={featuredItems} />
      
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Explore Our Categories</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={onSelectCategory}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
