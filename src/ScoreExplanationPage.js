import React from 'react';
import './ScoreExplanationPage.css'; // Import your CSS file
import {useNavigate} from 'react-router-dom';
const ScoreExplanationPage = () => {
    const matterhornProtocolUrl = "https://www.pdflib.com/pdf-knowledge-base/pdfua/matterhorn-protocol/";
    const navigate = useNavigate();
  return (
    <div className="score-explanation-container">
      <header className="app-header">
        <h1>Accessibility Hub</h1>
        {/* Add any header elements such as navigation or logos */}
      </header>
      <main className="main-content">
        <section className="explanation-section">
          <h2>How we score the PDFs</h2>
          <p>Our scoring mechanism evaluates the accessibility of the PDFs based on 9 key criteria, 
          divided into 2 categories: document properties and object properties according to the 
           <a href={matterhornProtocolUrl} target="_blank" rel="noopener noreferrer"> Matterhorn Protocol</a>. Document properties include 
          language specifier, tagging suspects, PDF/UA identifier, heading order, and metadata title. Object 
          properties assess whether content is marked correctly, figures have alt text, tables include headers, 
          and formulas have alt text. 
          
          Each property contributes equally within its category to a subtotal score. 
          The document properties make up 60% of the final score, while object properties account for 40%. This 
          weighted approach ensures a balanced assessment of your document's accessibility.</p>
          
        </section>
        
      </main>
      <footer className="app-footer">
      <p>Have any problems with our APP?</p>
          <a href="#" className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          <button onClick={()=> navigate('/score-explanation')}>Learn How Scoring Works</button>
      </footer>
    </div>
  );
};

export default ScoreExplanationPage;

