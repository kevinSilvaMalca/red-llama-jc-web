import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CategoryPanel.css'; // Aquí definimos los estilos del panel

const CategoryPanel = ({ categories, onSelectCategory, onClose, isOpen }) => {
  return (
    <div className={`category-panel ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onSelectCategory(category.name)}
            className="category-item"
          >
            {category.name.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

CategoryPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default CategoryPanel;
