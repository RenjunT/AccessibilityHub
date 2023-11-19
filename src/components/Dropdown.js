import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.css'; // Create and use appropriate styles

const Dropdown = ({ title, options, onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = (option) => {
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">{title}</button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index} className="dropdown-item" onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;