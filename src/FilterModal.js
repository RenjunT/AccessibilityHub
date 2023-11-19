import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FilterModal.css';

const FilterModal = ({ isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  const handleDropdownItemClick = (option, type) => {
    if (type === 'repository') {
      // Handle repository selection
      navigate(`/repository/${option}`);
    } else if (type === 'aspect') {
      // Handle aspect selection, for example navigating to 'Formular Alt Texts'
      if (option === 'Formular Alt Texts') {
        navigate('/formular-alt-texts');
      } else {
        navigate(`/aspect/${option}`);
      }
    }
    onClose();
  };

  const repositoryOptions = ['arXiv', 'PubMed', 'SpringerOpen', 'MedRxiv'];
  const aspectOptions = ['Figure Alt Texts', 'Formular Alt Texts', 'Table Header'];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="dropdown-container">
          {/* Button for selecting repository */}
          <button className="dropdown-toggle" onClick={() => toggleDropdown('repository')}>
            Select Repository
          </button>
          {/* Dropdown menu for repositories */}
          {activeDropdown === 'repository' && (
            <ul className="dropdown-menu">
              {repositoryOptions.map((option) => (
                <li key={option} className="dropdown-item" onClick={() => handleDropdownItemClick(option, 'repository')}>
                  {option}
                </li>
              ))}
            </ul>
          )}

          {/* Button for selecting aspect */}
          <button className="dropdown-toggle" onClick={() => toggleDropdown('aspect')}>
            Select Criteria
          </button>
          {/* Dropdown menu for aspects */}
          {activeDropdown === 'aspect' && (
            <ul className="dropdown-menu">
              {aspectOptions.map((option) => (
                <li key={option} className="dropdown-item" onClick={() => handleDropdownItemClick(option, 'aspect')}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

