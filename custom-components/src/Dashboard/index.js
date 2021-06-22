import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Sidebar from "./components/Sidebar.js";

export const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full border border-dotted border-red-500 bg-red-100">
        {/* Top Nav Bar */}
        <nav className="h-10 px-3 border border-dotted border-blue-500 bg-blue-100 flex items-center space-x-3">
          <button className="border-b hover:border-indigo-500 focus:outline-none">
            Nav Button
          </button>
          <button className="border-b hover:border-indigo-500 focus:outline-none">
            Nav Button
          </button>
        </nav>

        {/* Notification Bar */}
        <section className="border border-red-500 flex items-center justify-center">
          <p>Notification Bar</p>
        </section>

        {/* Main Body */}
        <main className="p-10 flex flex-col gap-4">
          {/* Some Text */}
          <section className="border border-blue-500">
            <h1>Main Body Title</h1>
            <p>Main Body Text</p>
          </section>

          {/* Card Container */}
          <section className="border border-green-100 flex flex-wrap justify-between gap-4">
            {/* Card */}
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title</h1>
              <p>Card Text</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title - Medium</h1>
              <p>Card Text - Medium</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title ----- Large</h1>
              <p>Card Text ----- Large</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title - Medium</h1>
              <p>Card Text - Medium</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title</h1>
              <p>Card Text</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title</h1>
              <p>Card Text</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title</h1>
              <p>Card Text</p>
            </div>
            <div className="p-6 border border-green-500 rounded-lg flex-auto">
              <h1>Card Title ----- Large</h1>
              <p>Card Text ----- Large</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
