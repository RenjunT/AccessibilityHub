import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './DetailsPage.css';
import Header from './components/Header';
// Simulated function to fetch details based on an ID
const fetchDetails = (id) => {
  // This is where you would fetch data from a server or select from a local source
  // For demonstration, it returns different data sets based on the ID
  const datasets = {
    'arXiv': [
      { year: 2019, FormularAltTexts: 100, FigureAltTexts: 69.24, TableHeader: 76.93, ContentMarked:30.77, TagSuspects: 0, LanguageSpecifier: 30.77, PDF_UAIdentifier: 0.0, HeadingOrder: 92.86, MetadataTitle:21.43 },
      { year: 2020, FormularAltTexts: 100, FigureAltTexts: 73, TableHeader: 91, ContentMarked:37, TagSuspects: 0, LanguageSpecifier: 37, PDF_UAIdentifier: 0.0, HeadingOrder: 91, MetadataTitle:37 },
      { year: 2021, FormularAltTexts: 100, FigureAltTexts: 94, TableHeader: 94, ContentMarked:6, TagSuspects: 6, LanguageSpecifier: 53, PDF_UAIdentifier: 6, HeadingOrder: 100, MetadataTitle:27 },
      { year: 2022, FormularAltTexts: 100, FigureAltTexts: 84, TableHeader: 84, ContentMarked:33, TagSuspects: 99, LanguageSpecifier: 32, PDF_UAIdentifier: 0.00, HeadingOrder: 100, MetadataTitle:22 },
      { year: 2023, FormularAltTexts: 100, FigureAltTexts: 94, TableHeader: 100, ContentMarked:5, TagSuspects: 6, LanguageSpecifier: 46, PDF_UAIdentifier: 6, HeadingOrder: 99, MetadataTitle:18}
    ],
    'PubMed': [
      { year: 2019, FormularAltTexts: 100, FigureAltTexts: 93.49, TableHeader: 100, ContentMarked:5, TagSuspects: 0, LanguageSpecifier: 47.7, PDF_UAIdentifier: 0.0, HeadingOrder: 100, MetadataTitle:66.16 },
      { year: 2020, FormularAltTexts: 100, FigureAltTexts: 100, TableHeader: 96.5, ContentMarked:2, TagSuspects:2, LanguageSpecifier: 31.04, PDF_UAIdentifier: 0.0, HeadingOrder: 100, MetadataTitle:70.69 },
      { year: 2021, FormularAltTexts: 100, FigureAltTexts: 100, TableHeader: 100, ContentMarked:0, TagSuspects: 0, LanguageSpecifier: 49, PDF_UAIdentifier: 0, HeadingOrder: 100, MetadataTitle:72 },
      { year: 2022, FormularAltTexts: 100, FigureAltTexts: 95, TableHeader: 98, ContentMarked:3, TagSuspects: 0, LanguageSpecifier: 77, PDF_UAIdentifier: 0.00, HeadingOrder: 100, MetadataTitle:66 },
      { year: 2023, FormularAltTexts: 100, FigureAltTexts: 98, TableHeader: 100, ContentMarked:1, TagSuspects: 1, LanguageSpecifier: 28, PDF_UAIdentifier: 0, HeadingOrder: 100, MetadataTitle:37}
    ],
    'SpringerOpen': [
      { year: 2019, FormularAltTexts: 100, FigureAltTexts: 99, TableHeader: 100, ContentMarked:2, TagSuspects: 0, LanguageSpecifier: 91, PDF_UAIdentifier: 0.0, HeadingOrder: 100, MetadataTitle:96 },
      { year: 2020, FormularAltTexts: 100, FigureAltTexts: 100, TableHeader: 100, ContentMarked:0, TagSuspects: 0, LanguageSpecifier: 46, PDF_UAIdentifier: 0.0, HeadingOrder: 100, MetadataTitle:46 },
      { year: 2021, FormularAltTexts: 100, FigureAltTexts: 100, TableHeader: 100, ContentMarked:0, TagSuspects: 0, LanguageSpecifier: 100, PDF_UAIdentifier: 0, HeadingOrder: 100, MetadataTitle:89 },
      { year: 2022, FormularAltTexts: 100, FigureAltTexts: 95, TableHeader: 97, ContentMarked:2, TagSuspects: 0, LanguageSpecifier: 94, PDF_UAIdentifier: 0.00, HeadingOrder: 99.6, MetadataTitle:89 },
      { year: 2023, FormularAltTexts: 100, FigureAltTexts: 95, TableHeader: 97, ContentMarked:4, TagSuspects: 0, LanguageSpecifier: 95, PDF_UAIdentifier: 0, HeadingOrder: 99, MetadataTitle:89}
    ],
    'IEEEOpen': [
      { year: 2019, FormularAltTexts: 100, FigureAltTexts: 93, TableHeader: 95, ContentMarked:5, TagSuspects: 0, LanguageSpecifier: 8, PDF_UAIdentifier: 0.0, HeadingOrder: 100, MetadataTitle:84 },
      { year: 2020, FormularAltTexts: 100, FigureAltTexts: 96, TableHeader: 97, ContentMarked:5, TagSuspects: 0, LanguageSpecifier: 7, PDF_UAIdentifier: 0.0, HeadingOrder: 100, MetadataTitle:83 },
      { year: 2021, FormularAltTexts: 100, FigureAltTexts: 94, TableHeader: 96, ContentMarked:5, TagSuspects: 0, LanguageSpecifier: 9, PDF_UAIdentifier: 0, HeadingOrder: 100, MetadataTitle:89 },
      { year: 2022, FormularAltTexts: 100, FigureAltTexts: 95, TableHeader: 97, ContentMarked:7, TagSuspects: 0, LanguageSpecifier: 9, PDF_UAIdentifier: 0.00, HeadingOrder: 100, MetadataTitle:83 },
      { year: 2023, FormularAltTexts: 100, FigureAltTexts: 95, TableHeader: 97, ContentMarked:5, TagSuspects: 0, LanguageSpecifier: 5, PDF_UAIdentifier: 0, HeadingOrder: 100, MetadataTitle:85}
    ],
    
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
      

      <ResponsiveContainer width="60%" height={450} >
      <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 20 }} data={detailsData} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }}/>
        <YAxis domain={[0, 100]}  label={{ value: 'Percentage(%)', angle: -90, position: 'insideLeft' }}/>
        <Tooltip />
        <Line type="monotone" dataKey="FormularAltTexts" stroke="#8884d8" />
        <Line type="monotone" dataKey="FigureAltTexts" stroke="#82ca9d" />
        <Line type="monotone" dataKey="TableHeader" stroke="#ff8c42" />
        <Line type="monotone" dataKey="ContentMarked" stroke="#63a4ff" />
        <Line type="monotone" dataKey="TagSuspects" stroke="#f56991" />
        <Line type="monotone" dataKey="LanguageSpecifier" stroke="#a0d2db" />
        <Line type="monotone" dataKey="PDF/UA-Identifier" stroke="#e4c1f9" />
        <Line type="monotone" dataKey="HeadingOrder" stroke="#ffd700" />
        <Line type="monotone" dataKey="MetadataTitle" stroke="#7c5295" />
      </LineChart>
      </ResponsiveContainer>

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
