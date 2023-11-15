import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './DetailsPage.css';
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
  const matterhornProtocolUrl = "https://www.pdflib.com/pdf-knowledge-base/pdfua/matterhorn-protocol/"; 

  useEffect(() => {
    const data = fetchDetails(id);
    setDetailsData(data);
  }, [id]);

  return (
    <div className="details-page">
      <header className="App-header">
          <div className="header-content">
            <div className="App-logo">Accessibility Hub</div>
            <div className="intro-and-filter">
              <div className="intro-text">
                <h2>{id}</h2>
                <p>This is the detail score fraction from {id}.</p>
              </div>
              <button className="filter-button">🔍+ Filter</button>
            </div>
          </div>
        </header>

      <section className="scoring-explanation">
        <h3>Understanding the Accessibility Score</h3>
        <p>
          Our scoring mechanism evaluates the accessibility of the PDFs based on 9 key criteria, 
          divided into 2 categories: document properties and object properties according to the 
           <a href={matterhornProtocolUrl} target="_blank" rel="noopener noreferrer"> Matterhorn Protocol</a>. Document properties include 
          language specifier, tagging suspects, PDF/UA identifier, heading order, and metadata title. Object 
          properties assess whether content is marked correctly, figures have alt text, tables include headers, 
          and formulas have alt text. 
          
          Each property contributes equally within its category to a subtotal score. 
          The document properties make up 60% of the final score, while object properties account for 40%. This 
          weighted approach ensures a balanced assessment of your document's accessibility.
        </p>
      </section>
      
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
          <p>Data Privacy Statement</p>
          <p>LOGO?</p>
      </footer>
    </div>
  );
};

export default DetailsPage;
