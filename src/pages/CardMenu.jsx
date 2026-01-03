import React, { useContext, useEffect, useState } from 'react';
import '../styles/CardMenu.css';
import { DataContext } from '../context/Context';
import Spinner from '../components/Spinner';
import CategoryPanel from '../components/CategoryPanel';

const CardMenu = () => {
  const { categories, loading } = useContext(DataContext);
  console.log('CATEGORIES', categories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsPanelOpen(false);
  };
  useEffect(() => {
    setFilteredMenu(
      selectedCategory === 'All'
        ? categories
        : [categories.find((category) => category.name === selectedCategory)] ||
            [],
    );
  }, [categories, selectedCategory]);

  if (loading) return <Spinner />;
  return (
    <div className="pt-2 md:pt-0">
      <button
        className="category-button-panel card-menu-button text-[18]"
        onClick={() => setIsPanelOpen(true)}
      >
        Categories
      </button>

      {isPanelOpen && (
        <CategoryPanel
          categories={[...categories, { id: 0, name: 'All' }]}
          onSelectCategory={handleCategorySelect}
          onClose={() => setIsPanelOpen(false)}
          isOpen={isPanelOpen}
        />
      )}

      {filteredMenu.map((category) => (
        <div key={category.id} className="mb-16">
          <h2 className="menu-category-title uppercase font-garamond text-white-full mb-4 md:mb-8 lg:mb-12">
            {category.name}
          </h2>
          <div className="menu-category-products">
            <ul className="menu-category-list masonry-grid">
              {category.items.map((item) => (
                <li
                  className="menu-category-item masonry-item text-center mb-6 md:mb-8 lg:mb-12"
                  key={item.id}
                >
                  <h3 className="menu-category-item__title mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                    <span className="menu-category-item__title__name uppercase font-larsseit">
                      {item.name}{' '}
                    </span>
                  </h3>
                  <p
                    className="menu-category-item__description w-full font-cormorant mb-2 sm:mb-3 md:mb-4 lg:mb-5"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                  <span className="price text-white-full">${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMenu;
