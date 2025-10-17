// app/page.tsx
"use client";

import { useState } from "react";
import { HiMenu } from "react-icons/hi"; // hamburger icon
import { FaHome, FaMoneyBillWave, FaChartLine, FaCog } from "react-icons/fa";
import Navbar from "@/Components/Shared/Navbar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <h2 className="text-2xl font-bold">Welcome to Finote Dashboard</h2>;
      case "expenses":
        return <h2 className="text-2xl font-bold">Track Your Expenses Here</h2>;
      case "reports":
        return <h2 className="text-2xl font-bold">View Your Reports</h2>;
      case "settings":
        return <h2 className="text-2xl font-bold">Adjust Settings</h2>;
      default:
        return <h2 className="text-2xl font-bold">Welcome to Finote</h2>;
    }
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaHome /> },
    { id: "expenses", label: "Expenses", icon: <FaMoneyBillWave /> },
    { id: "reports", label: "Reports", icon: <FaChartLine /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="flex h-screen justify-center">
      {/* Sidebar */}
      <aside
        className={`bg-gray-100 p-2 flex flex-col   transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Hamburger */}
        <button
          className="p-2 mb-4 text-gray-700 hover:bg-gray-200 rounded"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <HiMenu size={24} />
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center text-xl gap-2 p-3 rounded hover:bg-blue-100 ${
                activeTab === item.id ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              {!isCollapsed && item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white overflow-auto">
        <div>
          <Navbar></Navbar>
        </div>

        {renderContent()}
      </main>
    </div>
  );
}
