import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import './DetailsPage.css';
import Header from './components/Header';
const categoryKeys = {
  metadata: ["MetadataTitle", "LanguageSpecifier", "Author", "PDF_UAIdentifier" ],
  tags: [ "ContentMarked", "CorrectNesting", "ReadingOrder"],
  objects: ["AltTexts", "HeadingOrder", "Table", "Link", "List"]
};
// Simulated function to fetch details based on an ID
const fetchDetails = (id) => {
  // This is where you would fetch data from a server or select from a local source
  // For demonstration, it returns different data sets based on the ID
  const datasets = {
    'arXiv': [
      { year: 2019, AltTexts: 69, HeadingOrder:100 , Table: 95, Link:69, List: 37,  ContentMarked:79, CorrectNesting:58 , ReadingOrder:74 , LanguageSpecifier: 90, PDF_UAIdentifier: 43, MetadataTitle:43, Author: 90},
      { year: 2020,  AltTexts: 79, HeadingOrder:100 , Table:87, Link:65, List:40 , ContentMarked:66, CorrectNesting: 61, ReadingOrder:61 , LanguageSpecifier: 61, PDF_UAIdentifier: 40, MetadataTitle:48, Author:79 },
      { year: 2021,  AltTexts:83 , HeadingOrder: 95, Table: 89, Link:65, List: 59, ContentMarked:33,CorrectNesting: 77, ReadingOrder:80 ,  LanguageSpecifier: 80, PDF_UAIdentifier: 48,  MetadataTitle:53, Author:77  },
      { year: 2022, AltTexts: 74, HeadingOrder: 100, Table:100 , Link:44, List: 61,  ContentMarked:79, CorrectNesting: 61, ReadingOrder:79 ,  LanguageSpecifier: 83, PDF_UAIdentifier: 40,  MetadataTitle:61, Author: 74 },
      { year: 2023, AltTexts: 78, HeadingOrder:98 , Table: 94, Link:35, List: 49, ContentMarked:65,CorrectNesting:65, ReadingOrder:63 ,  LanguageSpecifier: 76, PDF_UAIdentifier: 46,  MetadataTitle:54, Author:72 }
    ],
    'PubMed': [
      { year: 2019, AltTexts: 95, HeadingOrder:100, Table: 99, Link:16, List: 3,  ContentMarked:0, CorrectNesting:100 , ReadingOrder:0 , LanguageSpecifier: 58, PDF_UAIdentifier: 0, MetadataTitle:64, Author: 48},
      { year: 2020,  AltTexts: 100, HeadingOrder:99 , Table:100, Link:100, List:8, ContentMarked:16, CorrectNesting: 100, ReadingOrder:16 , LanguageSpecifier: 62, PDF_UAIdentifier: 0, MetadataTitle:47, Author:31 },
      { year: 2021,  AltTexts: 100, HeadingOrder:100, Table:100, Link:20, List:20 , ContentMarked:1, CorrectNesting: 100, ReadingOrder:0 , LanguageSpecifier: 60, PDF_UAIdentifier: 0, MetadataTitle:40, Author:40  },
      { year: 2022, AltTexts: 100, HeadingOrder: 100, Table:100 , Link:20, List: 0,  ContentMarked:0, CorrectNesting: 100, ReadingOrder:0 ,  LanguageSpecifier: 50, PDF_UAIdentifier: 0,  MetadataTitle:60, Author: 50},
      { year: 2023, AltTexts: 99, HeadingOrder:99 , Table: 98, Link:8, List: 6, ContentMarked:3,CorrectNesting:100 , ReadingOrder:8 ,  LanguageSpecifier: 36, PDF_UAIdentifier: 0,  MetadataTitle:45, Author:21 }
    ],
    'Springer': [
      { year: 2019, AltTexts: 50, HeadingOrder:50, Table: 50 , Link:50 , List: 0,  ContentMarked:0, CorrectNesting:100, ReadingOrder:0 , LanguageSpecifier: 100, PDF_UAIdentifier: 0, MetadataTitle:87, Author: 0},
      { year: 2020,  AltTexts: 50, HeadingOrder:50 , Table:50 , Link:50 , List:0 , ContentMarked:0, CorrectNesting: 100, ReadingOrder:0, LanguageSpecifier: 99, PDF_UAIdentifier: 0, MetadataTitle:100, Author:0 },
      { year: 2021,  AltTexts:50, HeadingOrder: 50 , Table: 50 , Link:50 , List: 0, ContentMarked:0,CorrectNesting: 100, ReadingOrder:0 ,  LanguageSpecifier: 98, PDF_UAIdentifier: 0,  MetadataTitle:100, Author:0 },
      { year: 2022, AltTexts: 50, HeadingOrder: 50 , Table:50 , Link:0, List: 4,  ContentMarked:0, CorrectNesting: 100, ReadingOrder:0 ,  LanguageSpecifier: 100, PDF_UAIdentifier: 0,  MetadataTitle:99, Author: 2 },
      { year: 2023, AltTexts: 50, HeadingOrder:50  , Table: 50 , Link:33, List: 5,ContentMarked:1,CorrectNesting:100, ReadingOrder:3,  LanguageSpecifier: 100, PDF_UAIdentifier: 0,  MetadataTitle:93, Author:7 }
    ],
    'IEEE': [
      { year: 2019, AltTexts: 98, HeadingOrder:99 , Table: 99, Link:52, List: 3,  ContentMarked:3, CorrectNesting:100, ReadingOrder:0 , LanguageSpecifier: 80, PDF_UAIdentifier: 0, MetadataTitle:79, Author: 0},
      { year: 2020,  AltTexts: 97, HeadingOrder:100 , Table:98, Link:47, List:3 ,ContentMarked:4, CorrectNesting: 100, ReadingOrder:4 , LanguageSpecifier: 50, PDF_UAIdentifier: 0, MetadataTitle:82, Author:32 },
      { year: 2021,  AltTexts:33 , HeadingOrder: 100, Table: 67, Link:67, List: 43, ContentMarked:33,CorrectNesting: 100, ReadingOrder:67 ,  LanguageSpecifier: 67, PDF_UAIdentifier: 0,  MetadataTitle:75, Author:32  },
      { year: 2022, AltTexts: 80, HeadingOrder: 99, Table:80 , Link:60, List: 20,  ContentMarked:20, CorrectNesting: 100, ReadingOrder:20 ,  LanguageSpecifier: 20, PDF_UAIdentifier: 0,  MetadataTitle:81, Author: 40 },
      { year: 2023, AltTexts: 80, HeadingOrder:80 , Table: 60, Link:60, List: 20, ContentMarked:40,CorrectNesting:100 , ReadingOrder:20 ,  LanguageSpecifier: 40, PDF_UAIdentifier: 0,  MetadataTitle:81, Author:80 }
    ],
    
  };

  return datasets[id] || []; // Return the dataset or an empty array if not found
};

const DetailsPage = () => {
  let { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('metadata');
  const [percentages, setPercentages] = useState({});
  const navigate = useNavigate();
  const matterhornProtocolUrl = "https://www.pdflib.com/pdf-knowledge-base/pdfua/matterhorn-protocol/"; 

  useEffect(() => {
    const data = fetchDetails(id);
    setDetailsData(data);
  }, [id]);

  const idPercentages = {
    'arXiv': 22,
    'PubMed': 38,
    'Springer': 46,
    'IEEE': 10,
    
  };

  const repositories = [
    { id: 'arXiv', name: 'arXiv', score: 46.13 },
    { id: 'PubMed', name: 'PubMed', score: 49.64 },
    { id: 'Springer', name: 'Springer', score: 64 },
    { id: 'MedRxiv',name: 'MedRxiv', score: 42 }
  ];
  const criteriaOptions = ['Figure Alt Texts', 'Formular Alt Texts', 'Table Header'];
  const handleRepoSelect = (repo) => {
          
    navigate(`/details/${repo}`); // Navigate to the repository page
  };

  const handleCriteriaSelect = (criteria) => {
    
    navigate('/formular-alt-texts');
  };

  const colorMap = {
    
    
    ContentMarked: "#64b5f6",
    CorrectNesting: "#ff7043",
    ReadingOrder: "#cddc39",
    LanguageSpecifier: "#8bc34a",
    PDF_UAIdentifier: "#009688",
    MetadataTitle: "#ff9800",
    Author: "#9c27b0",
    AltTexts: "#9c27b0",
    HeadingOrder: "#26a69a",
    Table: "#ffca28",
    Link: "#5e6c84",
    List: "#81c784"
  };

  const renderChart = (category) => {
    return (
      
      <ResponsiveContainer width="60%" height={450}>
        <LineChart data={detailsData} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }} />
          <YAxis domain={[0, 100]} label={{ value: 'Percentage(%)', angle: -90, position: 'insideLeft' }}/>
          <Tooltip />
          <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ top: 140, right: -30 }}/>
          {categoryKeys[category].map(key => (
            <Line type="monotone" dataKey={key} stroke={colorMap[key]} strokeWidth={2} key={key} />
          ))}
        </LineChart>
      </ResponsiveContainer>
      
    );
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
          <h2>Accessibility Trends at {id}</h2>
          <p>In {id}, only <strong>{idPercentages[id]}%</strong> of PDFs are partially tagged, and the left are not tagged at all. The chart below analyzes the accessibility of these partially tagged.</p>
          <p>Explore {id}'s five-year progress with interactive charts, highlighting Metadata, Tags, and Objects. <strong>Hover over</strong> chart points for specific data, and use <strong>radio buttons</strong> for detailed analysis.</p>
          <p>For more on scoring criteria, click <strong>"Learn How Scoring Works"</strong> in the header. To return to the main overview, click the <strong>"Accessibility Hub"</strong> logo.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ToggleButtonGroup type="radio" name="categories" defaultValue="metadata">
        {Object.keys(categoryKeys).map(category => (
          <ToggleButton
            key={category}
            id={`category-${category}`}
            type="radio"
            variant="outline-primary"
            value={category}
            checked={activeCategory === category}
            onChange={(e) => setActiveCategory(e.currentTarget.value)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      </div>
      <div className="detail-chart">
      {renderChart(activeCategory)}

      </div>
     
      <footer className="footer">
          <p>Have any problems with our APP?</p>
          <a href="mailto:renjun.tang@uzh.ch?subject=Feedback%20on%20Accessibility%20Hub&body=Hi%20there,%0D%0A%0D%0AI%20wanted%20to%20share%20some%20feedback..." className="App-link">Contact Us</a>
          <p>Accessibility Hub does not collect or store any personal information from you.</p>
          
      </footer>
    </div>
  );
};

export default DetailsPage;
