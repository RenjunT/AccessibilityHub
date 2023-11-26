import React from 'react';
import './Header.css'; 
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ repositories, criteriaOptions, handleRepoSelect, handleCriteriaSelect }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo">Accessibility Hub</span>
      </div>
      <nav className="header-navigation">
          <button onClick={() => navigate('/score-explanation')} className="nav-btn">
            Learn How Scoring Works
          </button>

          {/* Dropdown for selecting repository */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-repository" className="nav-btn">
              Select Repository
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {repositories.map((repo) => (
                <Dropdown.Item key={repo.id} onClick={() => handleRepoSelect(repo.id)}>
                  {repo.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Dropdown for selecting criteria */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="success" id="dropdown-criteria" className="nav-btn">
              Select Criteria
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {criteriaOptions.map((criteria, index) => (
                <Dropdown.Item key={index} onClick={() => handleCriteriaSelect(criteria)}>
                  {criteria}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </nav>

      
    </div>
  );
};

export default Header;

