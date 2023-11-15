import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FilterModal.css'; // Make sure to include your CSS styles

const FilterModal = ({ isOpen, onClose, onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  const handleDropdownItemClick = (option) => {
    // Modify this function to navigate to the correct path
    if (option === 'Formular Alt Texts') {
      navigate('/formular-alt-texts'); // Navigate to the FormularAltTextsPage
    } 
    
    else {
      
      navigate(`/details/${option}`);
    }
    onClose();
  };

  const repositoryOptions = ['arXiv', 'PubMed', 'SpringerOpen', 'MedRxiv'];
  const aspectOptions = ['Figure Alt Texts', 'Formular Alt Texts', 'Table Header'];

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
                  <li key={index} className="dropdown-item" onClick={() => handleDropdownItemClick(option)}>{option}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={() => toggleDropdown('aspect')}>
              Select Criteria
            </button>
            {activeDropdown === 'aspect' && (
              <ul className="dropdown-menu">
                {aspectOptions.map((option, index) => (
                  <li key={index} className="dropdown-item"onClick={() => handleDropdownItemClick(option)}>{option}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
