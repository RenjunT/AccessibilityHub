import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './DetailsPage.css';
import Header from './components/Header';
// Simulated function to fetch details based on an ID
const fetchDetails = (id) => {
  // This is where you would fetch data from a server or select from a local source
  // For demonstration, it returns different data sets based on the ID
  const datasets = {
    'arXiv': [
      { year: 2021, formula: 1, figure: 0.94, table: 0.94, content:0.06},
      { year: 2022, formula: 1, figure: 0.84, table: 0.84, content:0.33 },
      { year: 2023, formula: 1, figure: 0.94, table: 1, content:0.05}
      // ... rest of data
    ],
    'PubMed': [
      { year: 2021, formula: 1, figure: 0.97, table: 0.99, content:0.003},
      { year: 2022, formula: 1, figure: 0.84, table: 0.84, content:0.33 },
      { year: 2023, formula: 1, figure: 0.94, table: 1, content:0.05}
      
    ],
    // ... other datasets
  };

  return datasets[id] || []; // Return the dataset or an empty array if not found
};

const DetailsPage = () => {
  let { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const navigate = useNavigate();
  const matterhornProtocolUrl = "https://www.pdflib.com/pdf-knowledge-base/pdfua/matterhorn-protocol/"; 

  useEffect(() => {
    const data = fetchDetails(id);
    setDetailsData(data);
  }, [id]);

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
    <div className="details-page">
      
      <Header 
        repositories={repositories} 
        criteriaOptions={criteriaOptions} 
        handleRepoSelect={handleRepoSelect} 
        handleCriteriaSelect={handleCriteriaSelect} 
      />

        <div className="intro-text">
                <h2>{id}</h2>
                <p>This is the detail score fraction from {id}.</p>
              </div>
      
      <div className="detail-chart">
      <BarChart width={800} height={450} data={detailsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 4]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="formula" stackId="a" fill="#1e2f97" barSize={50}/>
        <Bar dataKey="figure" stackId="a" fill="#1aa7ec" barSize={50}/>
        <Bar dataKey="table" stackId="a" fill="#4adede" barSize={50}/>
        <Bar dataKey="content" stackId="a" fill="#ffcc99" barSize={50}/>
      </BarChart>
      </div>
     
      <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="#mailto:renjun.tang@uzh.ch?subject=Feedback%20on%20Accessibility%20Hub&body=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback..." className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          
      </footer>
    </div>
  );
};

export default DetailsPage;
