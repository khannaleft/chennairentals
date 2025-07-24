import React, { useState, useCallback } from 'react';
import { Category } from './types';
import { RENTAL_CATEGORIES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import CategoryPage from './views/CategoryPage';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleSelectCategory = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Header onHomeClick={handleGoHome} />
      <main className="flex-grow">
          {!selectedCategory ? (
            <HomePage
              categories={RENTAL_CATEGORIES}
              onSelectCategory={handleSelectCategory}
            />
          ) : (
            <CategoryPage
              category={selectedCategory}
              onBack={handleGoHome}
            />
          )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
