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
      { year: 2016, formula: 40, figure: 24, table: 24 },
      { year: 2017, formula: 30, figure: 13, table: 22 },
      { year: 2018, formula: 60, figure: 10, table: 23 }
      // ... rest of data
    ],
    'pubMed': [
      { year: 2016, formula: 40, figure: 24, table: 24 },
      { year: 2017, formula: 30, figure: 13, table: 22 },
      { year: 2018, formula: 60, figure: 10, table: 23 }
      
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

  return (
    <div className="details-page">
      
      <Header/>

        <div className="intro-text">
                <h2>{id}</h2>
                <p>This is the detail score fraction from {id}.</p>
              </div>
      
      <div className="detail-chart">
      <BarChart width={800} height={450} data={detailsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="formula" stackId="a" fill="#1e2f97" barSize={50}/>
        <Bar dataKey="figure" stackId="a" fill="#1aa7ec" barSize={50}/>
        <Bar dataKey="table" stackId="a" fill="#4adede" barSize={50}/>
      </BarChart>
      </div>
      {/* ... */}
      <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="#" className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          <button onClick={()=> navigate('/score-explanation')}>Learn How Scoring Works</button>
      </footer>
    </div>
  );
};

export default DetailsPage;
