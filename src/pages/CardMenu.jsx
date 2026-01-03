import React, { useEffect, useState } from 'react';
import '../styles/CardMenu.css';

import MenuService from '../services/menu.service';
import { mapMenuByCategory } from '../mappers/menu.mapper';

const CardMenu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await MenuService.getAll();
        const mappedCategories = mapMenuByCategory(data);
        setCategories(mappedCategories);
      } catch (error) {
        console.error('Error loading menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const filteredMenu =
    selectedCategory === 'All'
      ? categories
      : categories.filter((cat) => cat.name === selectedCategory);

  return (
    <div className="pt-2 md:pt-0">

      {/* Category toggle (mobile) */}
      <button
        className="category-button-panel card-menu-button text-[18]"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        Categories
      </button>

      {/* Category panel */}
      {isPanelOpen && (
        <div className="category-panel">
          <button onClick={() => setSelectedCategory('All')}>
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Menu content */}
      {filteredMenu.map((category) => (
        <div key={category.id} className="mb-16">

          <h2 className="menu-category-title uppercase font-garamond text-white-full mb-4 md:mb-8 lg:mb-12">
            {category.name}
          </h2>

          <div className="menu-category-products">
            <ul className="menu-category-list masonry-grid">
              {category.items.map((item) => (
                <li
                  key={item.id}
                  className="menu-category-item masonry-item text-center mb-6 md:mb-8 lg:mb-12"
                >
                  {/* IMAGE (optional, elegant) */}
                  {item.imageUrl && (
                    <div className="menu-item-image-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="menu-item-image"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <h3 className="menu-category-item__title mb-2">
                    <span className="menu-category-item__title__name uppercase font-larsseit">
                      {item.title}
                    </span>
                  </h3>

                  {item.description && (
                    <p className="menu-category-item__description font-cormorant mb-3">
                      {item.description}
                    </p>
                  )}

                  <span className="price text-white-full">
                    ${item.price}
                  </span>
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
