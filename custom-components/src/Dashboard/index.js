import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import LineChart from "./components/LineChart.js";
import BarChart from "./components/BarChart.js";

export const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="border border-dotted border-red-500 bg-red-100 w-full">
        <nav className="border border-dotted border-blue-500 bg-blue-100">
          <button>Nav Button</button>
          <button>Nav Button</button>
        </nav>
        <h1>Title</h1>
        <p>Text</p>
      </div>
    </div>
  );
};
