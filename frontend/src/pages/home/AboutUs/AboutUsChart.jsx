import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Improvment of Personal Life Across Student's Life",
      color: "white",
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
      },
      title: {
        color: "white",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
      },
      title: {
        color: "white",
      },
    },
  },
};

const labels = [
  "Academic Performance",
  "Emotional Well-being",
  "Retention Rates",
  "Skill Development",
  "Networking",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Improved by (%)",
      data: [70, 80, 65, 75, 60],
      borderColor: "#f3d6da",
      backgroundColor: "#f1a7b0",
    },
  ],
};

export default function AboutUsChart() {
  return (
    <div className="fullHeightContainer">
      <Bar options={options} data={data} />
    </div>
  );
}
