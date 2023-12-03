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
          <p>Our scoring mechanism evaluates the accessibility of the PDFs based on 9 binary criteria, 
          divided into 2 categories: document properties and object properties according to the 
           <a href={matterhornProtocolUrl} target="_blank" rel="noopener noreferrer"> Matterhorn Protocol</a>. For each criterion, a PDF either meets the standard (scored as 1) or does not (scored as 0). </p>
           <h3>Document Properties (60% of the final score):</h3>
          <ul>
            <li><strong>Language Specifiers:</strong> Ensures the language of the document is correctly specified for screen readers.</li>
            <li><strong>Tagging Suspects:</strong> Checks for potential issues in tagging which could affect content interpretation.</li>
            <li><strong>PDF/UA Identifiers:</strong> Verifies the presence of a PDF/UA identifier indicating conformance to accessibility standards.</li>
            <li><strong>Valid Heading Order:</strong> Ensure the numbered heading levels are in descending sequence one by one, instead of Heading3 follows directly after Heading1.</li>
            <li><strong>Metadata Title:</strong> Checks if the metadata contains 'dc:title', which helps screen reader users identify and search for the PDF file.</li>
          </ul>
          <h3>Object Properties (40% of the final score):</h3>
          <ul>
            <li><strong>Content Marked:</strong> Assesses if all content (e.g. paragraphs) is marked so that it is rendered "visible" to screen reader users.</li>
            <li><strong>Figure Alternative Texts:</strong> Checks if figures in the file is tagged with alternative texts, which is nessecery to help screen reader users understand the figure content.</li>
            <li><strong>Formular Alternative Texts:</strong> Checks if formulars in the file is tagged with alternative texts, to help screen reader users understand the formular correctly.</li>
            <li><strong>Table Headers:</strong> Assesses if tables in the file have headers so that screen reader users can understand the table correctly.</li>
          </ul>
          <p>The final score of a PDF is a weighted sum of these criteria, with document properties contributing 60% and object properties 40%. This balance reflects the greater impact of document properties on accessibility for screen-reader users.</p>
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
                        <p>The score of a repository is calculated by the average score of all the PDFs we retrived from the repository. This provides an overall measure of the repository's accessibility.</p>
                    <h3>Timeline View</h3>
                        <p>The score of a year from a repository is calculated by the average score of PDFs published in that year, giving insight into accessibility trends over time.</p>
                        
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

