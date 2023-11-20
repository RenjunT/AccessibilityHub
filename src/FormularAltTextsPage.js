import React from 'react';
import './FormularAltTextsPage.css';
import Header from './components/Header';
import BarChartComponent from './components/BarChartComponent';
import { useNavigate } from 'react-router-dom';

const FormularAltTextsPage = () => {
  const navigate=useNavigate;
  return (
    <div className="formular-page-container">
      
      <Header/>
      
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
