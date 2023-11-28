import { useNavigate } from 'react-router-dom';
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Timeline.css';  
import Header from './components/Header';

// Sample data for the line chart
const data = [ 
  /* Sample data format */
  { year: '2013', arXiv: 48.13, PubMed: 50 },
  { year: '2014', arXiv: 55, PubMed: 49 },
  { year: '2015', arXiv: 50, PubMed: 48 },
  { year: '2016', arXiv: 64, PubMed: 65 },
  { year: '2017', arXiv: 30, PubMed: 50 },
  { year: '2018', arXiv: 80, PubMed: 31 },
  { year: '2019', arXiv: 40, PubMed: 48 },
  { year: '2020', arXiv: 70, PubMed: 50 },
  { year: '2017', arXiv: 50, PubMed: 50},
  { year: '2018', arXiv: 48, PubMed: 60 },
  { year: '2019', arXiv: 49, PubMed: 48 },
  { year: '2020', arXiv: 48, PubMed: 60 },
  { year: '2021', arXiv: 48.40, PubMed: 34 },
  { year: '2022', arXiv: 48.5, PubMed: 50 },
  { year: '2023', arXiv: 48.41, PubMed: 50},
  /* ... Add more data points as needed */
];


function Timeline() {
  const navigate = useNavigate();
  const repositories = [
    { id: 'arXiv', name: 'arXiv', score: 46.13 },
    { id: 'PubMed', name: 'PubMed', score: 49.64 },
    { id: 'SpringerOpen', name: 'SpringerOpen', score: 64 },
    { id: 'MedRxiv',name: 'MedRxiv', score: 42 }
  ];
  const criteriaOptions = ['Figure Alt Texts', 'Formular Alt Texts', 'Table Header'];
  const handleRepoSelect = (repo) => {
          
    navigate(`/details/${repo}`); // Navigate to the repository page
  };

  const handleCriteriaSelect = (criteria) => {
    
    navigate('/formular-alt-texts');
  };
  return (
    
    <div className="timeline-container">
      {/* Header */}
      <Header 
        repositories={repositories} 
        criteriaOptions={criteriaOptions} 
        handleRepoSelect={handleRepoSelect} 
        handleCriteriaSelect={handleCriteriaSelect} 
      />
        
        <div className="timeline-title-section">
          <h2>Timeline</h2>
          <p>This is the accessibility score of PDFs in these repositories over recent years.</p>
        </div>
        
      
      
      {/* Line Chart */}
      <div className="timeline-chart">
        <LineChart width={600} height={400} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="arXiv" stroke="#8884d8" />
          <Line type="monotone" dataKey="PubMed" stroke="#82ca9d" />
        </LineChart>
      </div>
      <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="mailto:renjun.tang@uzh.ch?subject=Feedback%20on%20Accessibility%20Hub&body=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback..." className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          <button onClick={()=> navigate('/score-explanation')}>Learn How Scoring Works</button>
        </footer>
      
    </div>
    
  );
}

export default Timeline;

