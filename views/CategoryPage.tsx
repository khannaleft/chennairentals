import React, { useState, useCallback } from 'react';
import { Category, RentalItem } from '../types';
import RentalItemCard from '../components/RentalItemCard';
import ItemDetailModal from '../components/ItemDetailModal';
import { ChevronLeftIcon } from '../components/IconComponents';

interface CategoryPageProps {
  category: Category;
  onBack: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category, onBack }) => {
  const [selectedItem, setSelectedItem] = useState<RentalItem | null>(null);

  const handleViewDetails = useCallback((item: RentalItem) => {
    setSelectedItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 bg-white pl-2 pr-4 py-2 rounded-full shadow-md hover:bg-slate-200 transition-colors border border-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="Go back to categories"
        >
          <ChevronLeftIcon className="w-5 h-5 text-slate-700" />
          <span className="font-semibold text-slate-700">Back</span>
        </button>
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">{category.name}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {category.items.map((item) => (
          <RentalItemCard
            key={item.id}
            item={item}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <ItemDetailModal item={selectedItem} onClose={handleCloseModal} />
    </div>
  );
};

export default CategoryPage;
