import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the line chart
const data = [ 
    /* Sample data format */
    
    { "year": "2015", "arXiv": 0.863, "PubMed": 0.092, "Springer": 0.319, "IEEE": 0 },
  { "year": "2016", "arXiv": 0.846, "PubMed": 0.155, "Springer": 0.610, "IEEE": 0 },
  { "year": "2017", "arXiv": 0.278, "PubMed": 0.236, "Springer": 1.340, "IEEE": 0 },
  { "year": "2018", "arXiv": 0.935, "PubMed": 0.216, "Springer": 1.489, "IEEE": 0 },
  { "year": "2019", "arXiv": 0.955, "PubMed": 0.230, "Springer": 0.744, "IEEE": 0.325 },
  { "year": "2020", "arXiv": 0.704, "PubMed": 0.327, "Springer": 1.048, "IEEE": 0.21 },
  { "year": "2021", "arXiv": 1.137, "PubMed": 0.351, "Springer": 1.732, "IEEE":  0.28},
  { "year": "2022", "arXiv": 0.897, "PubMed": 0.259, "Springer": 1.985, "IEEE": 0.36 },
  { "year": "2023", "arXiv": 1.021, "PubMed": 0.125, "Springer": 2.003, "IEEE": 0.385 }
];



function SimpleTimeline() {
  return (
    <div className="timeline-chart">
        <ResponsiveContainer width="100%" height={450} >
      <LineChart margin={{ top: 0, right: 30, left: 10, bottom: 20 }} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottomRight', offset: -10 }}/>
        <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} label={{ value: 'Score', angle: -90, position: 'insideLeft' }}/>
        <Tooltip />
        <Legend verticalAlign="middle" align="right" layout="vertical" wrapperStyle={{ top: 140, right: -30 }}/>
        <Line type="monotone" dataKey="arXiv" stroke="#8884d8" strokeWidth={2}/>
        <Line type="monotone" dataKey="PubMed" stroke="#82ca9d" strokeWidth={2}/>
        <Line type="monotone" dataKey="Springer" stroke="#ff8c42" strokeWidth={2}/>
        <Line type="monotone" dataKey="IEEE" stroke="#63a4ff"strokeWidth={2} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleTimeline;