import React, { useEffect, useState } from 'react';
import '../styles/CardMenu.css';

import MenuService from '../services/menu.service';
import { mapMenuByCategory } from '../mappers/menu.mapper';
import Spinner from '../components/Spinner';

const CardMenu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await MenuService.getAll();
        const mappedCategories = mapMenuByCategory(data);
        setCategories(mappedCategories);
      } catch (error) {
        console.error('Error loading menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="menu-loading">
        <Spinner />
      </div>
    );
  }

  const filteredCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((cat) => cat.name === selectedCategory);

  return (
    <div className="card-menu-container">

      {/* ===== CATEGORIES BAR ===== */}
      <div className="categories-bar">
        <button
          className={`category-chip ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-chip ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ===== MENU ===== */}
      {filteredCategories.map((category) => (
        <section key={category.id} className="menu-section">

          <h2 className="menu-category-title">
            {category.name}
          </h2>

          <ul className="menu-grid">
            {category.items.map((item, index) => (
              <li key={item.id} className="menu-item">

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

                <h3 className="menu-item-title">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="menu-item-description">
                    {item.description}
                  </p>
                )}

                <div className="menu-item-price">
                  ${item.price}
                </div>

                {/* Fine dining separator */}
                {index !== category.items.length - 1 && (
                  <div className="menu-item-separator" />
                )}

              </li>
            ))}
          </ul>

        </section>
      ))}
    </div>
  );
};

export default CardMenu;
