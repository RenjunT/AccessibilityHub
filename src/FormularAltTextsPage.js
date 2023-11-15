import React from 'react';
import './FormularAltTextsPage.css';
import BarChartComponent from './components/BarChartComponent';

const FormularAltTextsPage = () => {
  return (
    <div className="formular-page-container">
      
      <header className="page-header">
      <div className="logo-container">
          <h1>Accessibility Hub</h1>
      </div>
      <div className="header-content">
          <h2>Accessibility Criteria: Formular Alternative Texts</h2>
          <div className="header-actions">
            <button className="filter-button">🔍+ Filter</button>
            <div className="filter-chip">Formular</div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="chart-container">
        <BarChartComponent />
        </div>
      </main>
      
      <footer className="page-footer">
        <button className="contact-button">
          Contact Us
        </button>
        <button className="back-button" onClick={() => {/* logic to navigate back */}}>
          Back to MainPage
        </button>
        <button className="privacy-button">
          Data Privacy Statement
        </button>
      </footer>
    </div>
  );
};

export default FormularAltTextsPage;
