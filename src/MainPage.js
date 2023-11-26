import React, { useState, useEffect }from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './App.css';
import './FilterModal.css'
import FormularAltTextsPage from './FormularAltTextsPage';
import {useNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Timeline from './Timeline'
import DetailsPage from './DetailsPage'
import ScoreExplanationPage from './ScoreExplanationPage';
import FilterModal from './FilterModal'
import Header from './components/Header'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const MainPage = () => {
    
    const navigate = useNavigate();
    const repositories = [
        { id: 'arXiv', name: 'arXiv', score: 46.13 },
        { id: 'PubMed', name: 'PubMed', score: 49.64 },
        { id: 'SpringerOpen', name: 'SpringerOpen', score: 64 },
        { id: 'MedRxiv',name: 'MedRxiv', score: 42 }
      ];
      const criteriaOptions = ['Figure Alt Texts', 'Formular Alt Texts', 'Table Header'];
      const onNavigate = (path) => {
        navigate(path);};
        
        const handleRepoSelect = (repo) => {
          
          navigate(`/details/${repo}`); // Navigate to the repository page
        };
      
        const handleCriteriaSelect = (criteria) => {
          
          navigate('/formular-alt-texts');
        };

  return (
    <div className="MainPage">
        <Header 
        repositories={repositories} 
        criteriaOptions={criteriaOptions} 
        handleRepoSelect={handleRepoSelect} 
        handleCriteriaSelect={handleCriteriaSelect} 
      />

        <div className="content">
        <section className="chart-section">
          <h3>Repository Score Overview</h3>
          <p>View the accessibility scores of various repositories at a glance. Hover over the bars for more details.</p>
        {/* Bar Chart Section */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%', height: 500 }}>
          <ResponsiveContainer>
            <BarChart
              data={repositories}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#2196f3" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>
        </section>

        <section className="repository-list">
      <h3>Repositories</h3>
          <p>Click on any "Details" button for detailed information and score composition.</p>
          <div className="repo-list">
            {/* Map through the repositories and display each one */}
            {repositories.map((repo, index) => (
              <div key={repo.id} className="repo-item">
                <div className="repo-label">{repo.name}</div>
                <div className="progress-container">
                <div className="progress-bar">
                  {/* Dynamically set the width of the progress bar based on the progress value */}
                  <div className="progress" style={{ width: `${repo.score}%` }}></div>
                </div>
                <button onClick={() =>  {navigate(`/details/${repo.id}`);}}>Details</button>
                </div>
             </div>
        ))}
          </div>
          </section>

        <section className="additional-resources">
          <h3>Repository Trends</h3>
          <p>View the score changes over recent years for these repositories.</p>
          <div className="timeline-button-container">
          <button className="timeline-btn" onClick={() => navigate('/timeline')}>Check Timeline</button>
          </div>
        </section>

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
