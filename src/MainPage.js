import React, { useState, useEffect }from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import './App.css';
import './FilterModal.css'
import FormularAltTextsPage from './FormularAltTextsPage';
import {useNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Timeline from './Timeline'
import SimpleTimeline from './components/SimpleTimeline';
import DetailsPage from './DetailsPage'
import ScoreExplanationPage from './ScoreExplanationPage';
import FilterModal from './FilterModal'
import Header from './components/Header'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


    
const MainPage = () => {
    
    const navigate = useNavigate();
    const [showTimeline, setShowTimeline] = useState(false);
    
      const handleTimelineViewClick = () => {
        setShowTimeline(!showTimeline); 
      };
    const repositories = [
        { id: 'arXiv', name: 'arXiv', score: 2.3755},
        { id: 'PubMed', name: 'PubMed', score: 2.5955},
        { id: 'SpringerOpen', name: 'SpringerOpen', score: 3.1655 },
        { id: 'IEEEOpen',name: 'IEEEOpen', score: 2.6065 }
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
          <p>View the accessibility scores of various repositories at a glance. Hover over or click on the bars for more details.</p>
        {/* Bar Chart Section */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative',  height: 500}}>
          {/* Position the Timeline View button */}
            
            <div 
              style={{ 
                position: 'absolute', 
                top: -50,  // Adjust if you have some padding or margin inside the container
                right: 385, // Adjust if you have some padding or margin inside the container
                padding: '10px', // Gives some space from the corners
              }}
              onClick={handleTimelineViewClick}
            >
              <button style={{ cursor: 'pointer' }}>
                Change View
              </button></div>
        <div style={{ width: '50%' }}>
        {!showTimeline && (
          <ResponsiveContainer>
            <BarChart
              data={repositories}
              margin={{
                top: 20, right: 30, left: 20, bottom: 15,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" label={{ value: 'Repository', position: 'insideBottomRight', offset: -10 }}/>
              <YAxis domain={[0,5]}  ticks={[0, 1, 2, 3, 4, 5]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }}/>
              <Tooltip />
              <Bar dataKey="score" fill="#2196f3" barSize={50} onClick={(data) => handleRepoSelect(data.payload.id)}>
              
              </Bar>
            </BarChart>
          </ResponsiveContainer>)}
        </div>
       
        {showTimeline && (
                <div style={{ position: 'absolute', top: 0, 
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' }}>
                  <SimpleTimeline />
                </div>
              )}
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
