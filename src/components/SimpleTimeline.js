import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the line chart
const data = [ 
    /* Sample data format */
    
    { year: '2015', arXiv: 46.28, PubMed: 52.19, SpringerOpen: 66 , IEEEOpen:  54  },
    { year: '2016', arXiv: 57.77, PubMed: 51.96, SpringerOpen: 63.68 , IEEEOpen: 54   },
    { year: '2017', arXiv: 47.42, PubMed: 51.87, SpringerOpen: 63.36, IEEEOpen: 52  },
    { year: '2018', arXiv: 50.85, PubMed: 52.23, SpringerOpen: 63.58, IEEEOpen: 54    },
    { year: '2019', arXiv: 45.84, PubMed: 51.98, SpringerOpen: 64.37 , IEEEOpen: 51.5   },
    { year: '2020', arXiv: 56, PubMed: 52.21, SpringerOpen: 52.9, IEEEOpen: 51.73   },
    { year: '2021', arXiv: 43.89, PubMed: 52.13, SpringerOpen: 66 , IEEEOpen: 51.45   },
    { year: '2022', arXiv: 43.57, PubMed: 51.64, SpringerOpen: 63.07, IEEEOpen: 52.07   },
    { year: '2023', arXiv: 42.28, PubMed: 51.91, SpringerOpen: 63.27, IEEEOpen: 52  },
    
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
        <Line type="monotone" dataKey="SpringerOpen" stroke="#ff8c42" />
        <Line type="monotone" dataKey="IEEEOpen" stroke="#63a4ff" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleTimeline;