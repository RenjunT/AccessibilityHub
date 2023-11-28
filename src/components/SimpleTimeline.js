import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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

function SimpleTimeline() {
  return (
    <div className="timeline-chart">
        <ResponsiveContainer width="100%" height={450} >
      <LineChart data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 100]}/>
        <Tooltip />
        <Line type="monotone" dataKey="arXiv" stroke="#8884d8" />
        <Line type="monotone" dataKey="PubMed" stroke="#82ca9d" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleTimeline;