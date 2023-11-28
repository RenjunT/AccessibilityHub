import React from 'react';
import './FormularAltTextsPage.css';
import Header from './components/Header';
import BarChartComponent from './components/BarChartComponent';
import { useNavigate } from 'react-router-dom';

const FormularAltTextsPage = () => {
  const navigate=useNavigate();
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
    <div className="formular-page-container">
      
      <Header 
        repositories={repositories} 
        criteriaOptions={criteriaOptions} 
        handleRepoSelect={handleRepoSelect} 
        handleCriteriaSelect={handleCriteriaSelect} 
      />
      
      <div className="header-content">
          <h2>Accessibility Criteria: Formular Alternative Texts</h2>
          
        </div>
      

      <main className="main-content">
        <div className="chart-container">
        <BarChartComponent />
        </div>
      </main>
      

      <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="mailto:renjun.tang@uzh.ch?subject=Feedback%20on%20Accessibility%20Hub&body=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback..." className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          <button onClick={()=> navigate('/score-explanation')}>Learn How Scoring Works</button>
        </footer>
    </div>
  );
};

export default FormularAltTextsPage;
