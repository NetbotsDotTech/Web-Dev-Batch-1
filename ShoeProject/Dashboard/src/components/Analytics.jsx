import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement  // Register ArcElement for Pie chart
);

const Analytics = ({ collapsed }) => {
  // Sales by Category data for Pie chart
  const categoryData = {
    labels: ['Shoes', 'Clothes', 'Accessories', 'Bags', 'Others'],
    datasets: [
      {
        label: 'Sales by Category (in PKR)',
        data: [300000, 500000, 200000, 150000, 100000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
      },
    ],
  };

  // Monthly Profit Trends data
  const profitData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Profit (in PKR)',
        data: [35000, 19000, 25000, 36000, 6000, 30000],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Poppins, sans-serif',
          },
          color: '#333',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: 'Poppins, sans-serif',
          size: 14,
        },
        bodyFont: {
          family: 'Poppins, sans-serif',
          size: 12,
        },
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.formattedValue} PKR`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#444',
          font: {
            size: 13,
            family: 'Poppins, sans-serif',
          },
        },
        title: {
          display: true,
          text: 'Amount (PKR)',
          color: '#444',
          font: {
            size: 14,
            family: 'Poppins, sans-serif',
          },
        },
        grid: {
          color: 'rgba(220, 220, 220, 0.5)',
          borderDash: [4, 4],
        },
      },
      x: {
        ticks: {
          color: '#444',
          font: {
            size: 13,
            family: 'Poppins, sans-serif',
          },
        },
        title: {
          display: true,
          text: 'Months',
          color: '#444',
          font: {
            size: 14,
            family: 'Poppins, sans-serif',
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        marginLeft: collapsed ? 100 : 250, // Adjust layout based on collapse state
        // paddingTop:,
        transition: 'margin-left 0.3s',
      }}
    >
      <h1>Analytics</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          justifyContent: 'space-between',
          flexWrap: 'wrap', // Ensures charts wrap on smaller screens
        }}
      >
        <div
          style={{
            width: '48%', // Adjust width for better responsiveness
            minWidth: '400px', // Set a minimum width for the charts
            height: 300,
          }}
        >
          <h3>Sales by Category</h3>
          <Pie data={categoryData} options={options} />
        </div>

        <div
          style={{
            width: '48%', // Adjust width for better responsiveness
            minWidth: '400px', // Set a minimum width for the charts
            height: 300,
          }}
        >
          <h3>Monthly Profit Trends</h3>
          <Line data={profitData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
