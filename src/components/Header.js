import React from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ repositories, criteriaOptions, handleRepoSelect, handleCriteriaSelect }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo-container">
        <span onClick={() => navigate('/')} className="logo">Accessibility Hub</span>
      </div>
      <nav className="header-navigation">
          <button onClick={() => navigate('/score-explanation')} className="nav-btn">
            Learn How Scoring Works
          </button>

          
        </nav>

      
    </div>
  );
};

export default Header;

