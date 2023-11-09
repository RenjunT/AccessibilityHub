
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Timeline.css';  // Assuming you will create a separate CSS file for styling

// Sample data for the line chart
const data = [
  /* Sample data format */
  { year: '2013', arXiv: 48.13, PubMed: 50 },
  { year: '2014', arXiv: 55, PubMed: 49 },
  { year: '2015', arXiv: 50, PubMed: 48 },
  { year: '2016', arXiv: 64, PubMed: 65 },
  { year: '2017', arXiv: 30, PubMed: 50 },
  { year: '2018', arXiv: 80, PubMed: 31 },
  { year: '2019', arXiv: 40, PubMed: 48 },
  { year: '2020', arXiv: 70, PubMed: 50 },
  { year: '2017', arXiv: 50, PubMed: 50},
  { year: '2018', arXiv: 48, PubMed: 60 },
  { year: '2019', arXiv: 49, PubMed: 48 },
  { year: '2020', arXiv: 48, PubMed: 60 },
  { year: '2021', arXiv: 48.40, PubMed: 34 },
  { year: '2022', arXiv: 48.5, PubMed: 50 },
  { year: '2023', arXiv: 48.41, PubMed: 50},
  /* ... Add more data points as needed */
];

function Timeline() {
  return (
    <div className="timeline-container">
      {/* Header */}
      <header className="timeline-header">
        <div className="logo">Accessibility Hub</div>
        <div className="timeline-title-section">
          <h1>Timeline</h1>
          <p>This is the accessibility score of PDFs in these repositories over recent years</p>
        </div>
        <button className="filter-button">+ Filter</button>
      </header>
      
      {/* Line Chart */}
      <div className="timeline-chart">
        <LineChart width={600} height={400} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="arXiv" stroke="#8884d8" />
          <Line type="monotone" dataKey="PubMed" stroke="#82ca9d" />
        </LineChart>
      </div>
      
      {/* Footer */}
      <footer className="timeline-footer">
        <button className="contact-button">Contact Us</button>
        <p>Data Privacy Statement</p>
        <div className="logo-placeholder">LOGO?</div>
      </footer>
    </div>
  );
}

export default Timeline;

