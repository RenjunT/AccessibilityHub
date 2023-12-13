import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
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

      const scoringData = [
        { name: "Meta Data", value: 20, color: "#4caf50" },
        { name: "Tags", value: 50, color: "#2196f3" },
        { name: "Objects", value: 30, color: "#ff9800" }
      ];
      const renderCustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
            </div>
          );
        }
      
        return null;
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
          <p>Our scoring mechanism evaluates the accessibility of PDFs based on several criteria across three categories: Metadata, Tags and Objects in the file, in line with the <a href={matterhornProtocolUrl} target="_blank" rel="noopener noreferrer">Matterhorn Protocol</a>. Each criterion is binary, for each criterion, a PDF either meets the standard (scored as 1) or does not (scored as 0). </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PieChart width={400} height={400}>
            <Pie data={scoringData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8">
              {
                scoringData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color}/>)
              }
            </Pie>
            <Tooltip content={renderCustomTooltip} />
            <Legend />
          </PieChart>
          </div>
          
          <h3>Meta Data (20% of the final score):</h3>
        <ul>
            <li><strong>Title Set:</strong> Checks if the document's title is properly defined.</li>
            <li><strong>Language Set:</strong> Ensures the document's language is correctly specified for screen readers.</li>
            <li><strong>Author Set:</strong> Verifies if the author's information is accurately provided.</li>
            <li><strong>PDF UA Identifier Set:</strong> Assesses the presence of a PDF/UA identifier for accessibility standards.</li>
        </ul>

        <h3>Tags (50% of the final score):</h3>
        <ul>
            <li><strong>Content Marked:</strong> Evaluates whether all content is properly marked for screen readers.</li>
            <li><strong>Correct Nesting:</strong> Checks the structural hierarchy of tags for logical organization.</li>
            <li><strong>Reading Order Set:</strong> Confirms the correct sequence of reading order for content flow.</li>
        </ul>

        <h3>Objects (30% of the final score):</h3>
        <ul>
            <li><strong>Alternatives Texts Set (Figures and Formulas):</strong> Verifies alternative texts for visual elements.</li>
            <li><strong>Valid Heading Order:</strong> Ensures headings follow a proper sequence for structural clarity.</li>
            <li><strong>Valid Table:</strong> Checks if tables have headers and a coherent structure.</li>
            <li><strong>Link Text Set:</strong> Assesses if links have descriptive texts for better understanding.</li>
            <li><strong>Lists:</strong> Evaluates if lists are correctly tagged and have more than one item.</li>
        </ul>
          <p>The final score of a PDF is a weighted sum of these criteria, with document properties contributing 60% and object properties 40%. This balance reflects the greater impact of document properties on accessibility for screen-reader users.</p>
          
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

