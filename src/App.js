import React, { useState, useEffect }from 'react';
import './App.css';
import './FilterModal.css'
import {useNavigate} from 'react-router-dom';
import Papa from 'papaparse';
import Timeline from './Timeline'
import DetailsPage from './DetailsPage'
import FilterModal from './FilterModal'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  // State to control the visibility of the modal
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Function to toggle the modal's visibility
  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };
  // Sample data for repositories
  const repositories = [
    { id: 'arXiv', name: 'arXiv', progress: 46.13 },
    { id: 'PubMed', name: 'PubMed', progress: 49.64 },
    { id: 'SpringerOpen', name: 'SpringerOpen', progress: 64 },
    { id: 'MedRxiv',name: 'MedRxiv', progress: 42 }
  ];
  const navigate = useNavigate();
  

  

  return (
      <div className="App">
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <header className="App-header">
          <div className="header-content">
            <div className="App-logo">Accessibility Hub</div>
            <div className="intro-and-filter">
              <div className="intro-text">
                <p>Welcome!</p>
                <p>This is the accessibility score of PDFs in these repositories</p>
              </div>
              <button onClick={toggleFilterModal} className="filter-button">+ Filter</button>
            </div>
          </div>
        </header>

        <div classname="content">
        
          <div className="repo-list">
            {/* Map through the repositories and display each one */}
            {repositories.map((repo, index) => (
              <div key={repo.id} className="repo-item">
                <span>{repo.name}</span> {/* Repository Name */}
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
        ))}
          
          </div>
          <div className="timeline-button-container">
          <button className="timeline-btn" onClick={() => navigate('/timeline')}>Check Timeline</button>
        </div>
       </div>

       <FilterModal isOpen={isFilterModalOpen} onClose={toggleFilterModal} />

        <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="#" className="App-link">Contact Us</a>
          <p>Data Privacy Statement</p>
          <p>LOGO?</p>
        </footer>
    </div>
  );
}

export default App;
