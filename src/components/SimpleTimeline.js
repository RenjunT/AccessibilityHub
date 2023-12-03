import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the line chart
const data = [ 
    /* Sample data format */
    
    { "year": "2015", "arXiv": 2.314, "PubMed": 2.6095, "SpringerOpen": 3.3, "IEEEOpen": 2.7 },
  { "year": "2016", "arXiv": 2.8885, "PubMed": 2.598, "SpringerOpen": 3.184, "IEEEOpen": 2.7 },
  { "year": "2017", "arXiv": 2.371, "PubMed": 2.5935, "SpringerOpen": 3.168, "IEEEOpen": 2.6 },
  { "year": "2018", "arXiv": 2.5425, "PubMed": 2.6115, "SpringerOpen": 3.179, "IEEEOpen": 2.7 },
  { "year": "2019", "arXiv": 2.292, "PubMed": 2.599, "SpringerOpen": 3.2185, "IEEEOpen": 2.575 },
  { "year": "2020", "arXiv": 2.8, "PubMed": 2.6105, "SpringerOpen": 2.645, "IEEEOpen": 2.5865 },
  { "year": "2021", "arXiv": 2.1945, "PubMed": 2.6065, "SpringerOpen": 3.3, "IEEEOpen": 2.5725 },
  { "year": "2022", "arXiv": 2.1785, "PubMed": 2.582, "SpringerOpen": 3.1535, "IEEEOpen": 2.6035 },
  { "year": "2023", "arXiv": 2.114, "PubMed": 2.5955, "SpringerOpen": 3.1635, "IEEEOpen": 2.6 }
];



function SimpleTimeline() {
  return (
    <div className="timeline-chart">
        <ResponsiveContainer width="100%" height={450} >
      <LineChart margin={{ top: 0, right: 30, left: 20, bottom: 20 }} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }}/>
        <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }}/>
        <Tooltip />
        <Line type="monotone" dataKey="arXiv" stroke="#8884d8" />
        <Line type="monotone" dataKey="PubMed" stroke="#82ca9d" />
        <Line type="monotone" dataKey="SpringerOpen" stroke="#ff8c42" />
        <Line type="monotone" dataKey="IEEEOpen" stroke="#63a4ff" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleTimeline;