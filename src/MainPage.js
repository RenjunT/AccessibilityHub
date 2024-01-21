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
        { id: 'arXiv', name: 'arXiv', score: 0.73},
        { id: 'PubMed', name: 'PubMed', score: 2.14},
        { id: 'Springer', name: 'Springer', score: 1.36 },
        { id: 'IEEE',name: 'IEEE', score: 2.224 }
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

    <div className="page-layout">
    <aside className="app-description">
      <h2>What is PDF accessibility?</h2>
      <p>PDF accessibility ensures that documents are structured and tagged for easy navigation and readability by assistive technologies, making them accessible to all users, including those with disabilities.</p>
      <p><a href="https://webaim.org/techniques/acrobat/" target="_blank" rel="noopener noreferrer">Know more about this...</a></p>
      <h2>About Accessibility Hub</h2>
      <p>Accessibility Hub is a tool visualizing the accessibility of PDFs in academic online repositories. 4,000 scientific articles in four databases (<a href="https://arxiv.org" target="_blank" rel="noopener noreferrer">arXiv</a>, <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer">PubMed</a>, <a href="https://www.springeropen.com/" target="_blank" rel="noopener noreferrer">Springer</a>, and <a href="https://open.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE</a>) were evaluated along <Link to="/score-explanation">12 criteria</Link> which resulted in an accessibility score for each repository.</p>
       <p> This score aids in comparing the level of accessibility between repositories, as well as across time. </p>
      <p>Additionally, a detailed breakdown of scores for each repository highlights which criteria were fulfilled and which were not. Our tool enables academia, libraries, and online repositories to identify accessibility gaps as well as progress in their efforts to make scientific publications more inclusive for people with disabilities.</p>
    </aside>
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
