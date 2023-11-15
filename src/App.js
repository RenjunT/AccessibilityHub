import React, { useState, useEffect }from 'react';
import './App.css';
import './FilterModal.css'
import FormularAltTextsPage from './FormularAltTextsPage';
import {useNavigate} from 'react-router-dom';
import Papa from 'papaparse';
import Timeline from './Timeline'
import DetailsPage from './DetailsPage'
import FilterModal from './FilterModal'
import Header from './components/Header'
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
  const onNavigate = (path) => {
    navigate(path);};
  

  

  return (
      <div className="App">
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/formular-alt-texts" element={<FormularAltTextsPage />} />
        </Routes>
       
      <Header onFilterClick={toggleFilterModal}/>

        <div classname="content">

        <div className="score-calculation-instructions">
        <p>
          If you would like to know how we calculate the scores, please check the details page by 👉clicking on the "Details" button!
        </p>
        <p>
          If you would like to know the change of their accessibility scores over recent years, please check the timeline page by 👉clicking on the "Check Timeline" button!
        </p>
        <p>
          If you would like to know the score from specific repository or accessibility criteria, please try out filter function by 👉clicking on the 🔍 button!
        </p>
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

       <FilterModal isOpen={isFilterModalOpen} onClose={toggleFilterModal} onNavigate={onNavigate} />

        <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="#" className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          <p>LOGO?</p>
        </footer>
    </div>
  );
}

export default App;
