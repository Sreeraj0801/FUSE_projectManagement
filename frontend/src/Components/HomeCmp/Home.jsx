import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Projects",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: "#3498db",
    },
    {
      label: "Tasks",
      data: [5, 12, 6, 10, 3, 2],
      fill: false,
      borderColor: "#e74c3c",
    },
    {
      label: "Workspaces",
      data: [3, 6, 4, 1, 8, 2],
      fill: false,
      borderColor: "#2ecc71",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        font: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: "normal",
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: "normal",
        },
      },
    },
    y: {
      grid: {
        borderDash: [8, 4],
        color: "#d1d5db",
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: "normal",
        },
        beginAtZero: true,
      },
    },
  },
};

const Home = ({ totalProjects = 10, totalTasks = 30 , totalWorkspaces = 40 }) => {
  return (
    <div className="container mx-auto my-8 px-4 md:px-8">
      <h2 className="text-xl font-medium mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Projects</h3>
          <p className="text-5xl font-semibold">{totalProjects}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Tasks</h3>
          <p className="text-5xl font-semibold">{totalTasks}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium mb-4">Workspaces</h3>
          <p className="text-5xl font-semibold">{totalWorkspaces}</p>
        </div>
      </div>
      <div className="my-8">
        <Line data={data} options={options} height={300} />
      </div>
    </div>
  );
};

export default Home;
