import React, { useState, useEffect }from 'react';
import './App.css';
import './FilterModal.css'
import FormularAltTextsPage from './FormularAltTextsPage';
import {useNavigate} from 'react-router-dom';
import Timeline from './Timeline'
import DetailsPage from './DetailsPage'
import ScoreExplanationPage from './ScoreExplanationPage';
import FilterModal from './FilterModal'
import Header from './components/Header'
import Dropdown from './components/Dropdown';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const MainPage = () => {
    const [showRepoDropdown, setShowRepoDropdown] = useState(false);
    const [showCriteriaDropdown, setShowCriteriaDropdown] = useState(false);
    const navigate = useNavigate();
    const repositories = [
        { id: 'arXiv', name: 'arXiv', progress: 46.13 },
        { id: 'PubMed', name: 'PubMed', progress: 49.64 },
        { id: 'SpringerOpen', name: 'SpringerOpen', progress: 64 },
        { id: 'MedRxiv',name: 'MedRxiv', progress: 42 }
      ];
      const onNavigate = (path) => {
        navigate(path);};
        
        const handleRepoSelect = (repo) => {
          setShowRepoDropdown(false); // Close the dropdown
          navigate(`/details/${repo}`); // Navigate to the repository page
        };
      
        const handleCriteriaSelect = (criteria) => {
          setShowCriteriaDropdown(false); // Close the dropdown
          navigate('/formular-alt-texts');
        };

  return (
    <div className="MainPage">
        <Header />

        <div classname="content">

        <div className="dropdown-buttons-container">
        <button onClick={()=> navigate('/score-explanation')}>Learn How Scoring Works</button>
        {/* Repository Dropdown */}
        <button onClick={() => setShowRepoDropdown(!showRepoDropdown)}>
          Select Repository
        </button>
        {showRepoDropdown && (
          <Dropdown
            title="Select Repository"
            options={['arXiv', 'PubMed', 'SpringerOpen', 'MedRxiv']}
            onSelect={handleRepoSelect}
          />
        )}

        {/* Criteria Dropdown */}
        <button onClick={() => setShowCriteriaDropdown(!showCriteriaDropdown)}>
          Select Criteria
        </button>
        {showCriteriaDropdown && (
          <Dropdown
            title="Select Criteria"
            options={['Figure Alt Texts', 'Formular Alt Texts', 'Table Header']}
            onSelect={handleCriteriaSelect}
          />
        )}
      </div>
          <div className="repo-list">
            {/* Map through the repositories and display each one */}
            {repositories.map((repo, index) => (
              <div key={repo.id} className="repo-item">
                <div className="repo-label">{repo.name}</div>
                <div className="progress-container">
                <div className="progress-bar">
                  {/* Dynamically set the width of the progress bar based on the progress value */}
                  <div className="progress" style={{ width: `${repo.progress}%` }}></div>
                </div>
                {/* Conditionally render the button based on the index */}

                <button onClick={() => {if (index === 0) {
                  navigate(`/details/${repo.id}`);
                } else {
                  alert('Details for other repositories coming soon!');}
                }}>Details</button>
                </div>
             </div>
        ))}
          
          </div>
          <div className="timeline-button-container">
          <button className="timeline-btn" onClick={() => navigate('/timeline')}>Check Timeline</button>
          
        </div>
       </div>
       <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="mailto:renjun.tang@uzh.ch?subject=Feedback%20on%20Accessibility%20Hub&body=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback..." className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          
        </footer>
       </div>
  );
            };

  
      

export default MainPage;
