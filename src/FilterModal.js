import React, { useState } from 'react';
import './FilterModal.css'; // Make sure to include your CSS styles

const FilterModal = ({ isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const repositoryOptions = ['arXiv', 'PubMed', 'bioRiv', 'MedRxiv'];
  const aspectOptions = ['Figure Alt Texts', 'Formular Alt Texts', 'Table Header', 'Heading Structure'];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Do you want to filter by</h2>
        <div className="dropdown-container">
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => toggleDropdown('repository')}>
              Select Repository
            </button>
            {activeDropdown === 'repository' && (
              <ul className="dropdown-menu">
                {repositoryOptions.map((option, index) => (
                  <li key={index} className="dropdown-item">{option}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => toggleDropdown('aspect')}>
              Select Aspect
            </button>
            {activeDropdown === 'aspect' && (
              <ul className="dropdown-menu">
                {aspectOptions.map((option, index) => (
                  <li key={index} className="dropdown-item">{option}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onClose}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
