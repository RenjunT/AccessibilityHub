import React, { useState, useEffect }from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import './App.css';
import './FilterModal.css'
import FormularAltTextsPage from './FormularAltTextsPage';
import {useNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Timeline from './Timeline'
import SimpleTimeline from './components/SimpleTimeline';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import DetailsPage from './DetailsPage'
import ScoreExplanationPage from './ScoreExplanationPage';
import FilterModal from './FilterModal'
import Header from './components/Header'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


    
const MainPage = () => {
    const [viewType, setViewType] = useState('barChart');
    const navigate = useNavigate();
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
          <h2>Repository Score Overview</h2>
          <p>Quickly compare how different repositories measure up in terms of accessibility. </p>
    <p><strong>Hover over</strong> the bars for a snapshot or <strong>click</strong> for in-depth details. 
    Use the toggle below to switch between the <strong>Bar Chart View</strong> and the 
    <strong>Timeline View</strong> for different perspectives.</p>
        
        </section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ToggleButtonGroup type="radio" name="views" defaultValue="barChart">
          <ToggleButton
            id="tbg-radio-1"
            value="barChart"
            checked={viewType === 'barChart'}
            onChange={(e) => setViewType(e.currentTarget.value)}
          >
            Bar Chart View
          </ToggleButton>
          <ToggleButton
            id="tbg-radio-2"
            value="timeline"
            checked={viewType === 'timeline'}
            onChange={(e) => setViewType(e.currentTarget.value)}
          >
            Timeline View
          </ToggleButton>
        </ToggleButtonGroup>
        </div>
        {viewType === 'barChart' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px' }}>
          <ResponsiveContainer width="50%" height={450}>
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
        </ResponsiveContainer>
        </div>
        )}

        {viewType === 'timeline' && (
          <SimpleTimeline/>
        )}

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
