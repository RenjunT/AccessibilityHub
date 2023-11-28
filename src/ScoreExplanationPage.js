import React from 'react';
import './ScoreExplanationPage.css'; 
import Header from './components/Header';
import {useNavigate} from 'react-router-dom';
const ScoreExplanationPage = () => {
    const matterhornProtocolUrl = "https://www.pdflib.com/pdf-knowledge-base/pdfua/matterhorn-protocol/";
    const navigate = useNavigate();
    const repositories = [
      { id: 'arXiv', name: 'arXiv', score: 46.13 },
      { id: 'PubMed', name: 'PubMed', score: 49.64 },
      { id: 'SpringerOpen', name: 'SpringerOpen', score: 64 },
      { id: 'MedRxiv',name: 'MedRxiv', score: 42 }
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
    <div className="score-explanation-container">
      <Header 
        repositories={repositories} 
        criteriaOptions={criteriaOptions} 
        handleRepoSelect={handleRepoSelect} 
        handleCriteriaSelect={handleCriteriaSelect} 
      />
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
          weighted approach ensures a balanced assessment of PDF files' accessibility.</p>
          {/* Adding an illustrative example */}
          <div className="example-section">
                        <h3>Scoring Example</h3>
                        <p>Let's consider a practical example to understand how our scoring mechanism works:</p>
                        <ol>
                            <li><strong>Document Properties:</strong> Assume a file scores 1 for Language Specifier, Tagging Suspects, PDF/UA Identifier, and Metadata Title, but 0 for Heading Order. This gives a Document Properties subtotal of (1+1+1+1+0)/5 = 0.8.</li>
                            <li><strong>Object Properties:</strong> Let's say the file scores 1 for Correctly Marked Content, Figures with Alt Text, and Tables with Headers, but 0 for Formulas with Alt Text. This gives an Object Properties subtotal of (1+1+1+0)/4 = 0.75.</li>
                            <li><strong>Final Score:</strong> Applying the weights, we get a final score of (0.8 * 60%) + (0.75 * 40%) = 0.78 or 78%.</li>
                        </ol>
                        <p>This example demonstrates how each criterion's score contributes to the final accessibility rating of a PDF file.</p>
                    </div>
                    <h3>Repository View</h3>
                        <p>The score of a repository is calculated by the average score of all 1000 PDFs we retrived from the repository.</p>
                    <h3>Timeline View</h3>
                        <p>The score of a year from a repository is calculated by the average score of PDFs from that year.</p>
                        
        </section>
        
      </main>
      
      <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="mailto:renjun.tang@uzh.ch?subject=Feedback%20on%20Accessibility%20Hub&body=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback..." className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          
        </footer>
    </div>
  );
};

export default ScoreExplanationPage;

