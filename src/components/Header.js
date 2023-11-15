import React from 'react';
import './Header.css'; // Make sure to create a Header.css file with the styles

const Header = ({onFilterClick}) => {
  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo">Accessibility Hub</span>
      </div>
      <div className="header-content">
        <h1>Welcome!</h1>
        <p>This is the accessibility score of PDFs in these repositories</p>
        <div className="filter-container">
          <button className="filter-button" onClick={onFilterClick}>🔍 + Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

