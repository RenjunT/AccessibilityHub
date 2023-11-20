import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // For Chart.js 3.x, you need to import the controllers and elements you use.

// Example data and options for the chart
const data = {
  labels: ['SpingerOpen', 'arXiv', 'PubMed', 'MedrXiv'], // The label for the bars
  datasets: [
    {
      
      data: [90, 75, 60, 42], // The data points for the bars
      backgroundColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      barThickness:50,
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    }
  },
  plugins: {
    legend: {
      display: false // This will hide the legend
    }
  },
  maintainAspectRatio: false // Allows the chart to fit into the parent container size
};

const BarChartComponent = () => (
  <div style={{ width: '100%', height: '400px' }}>
    <Bar data={data} options={options} />
  </div>
);

export default BarChartComponent;
