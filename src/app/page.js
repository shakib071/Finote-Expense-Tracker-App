// app/page.tsx
"use client";

import { use, useContext, useState } from "react";
import { HiMenu } from "react-icons/hi"; // hamburger icon
import { FaHome, FaCog } from "react-icons/fa";
import Navbar from "@/Components/Shared/Navbar";
import DashBoard from "@/Components/Home/DashBoard";
import Footer from "@/Components/Shared/Footer";
// import { FaPlus } from "react-icons/fa";
import { Plus } from 'lucide-react';
import { Wallet, MinusCircle, X} from "lucide-react";
import { BarChart3 } from "lucide-react";
import { User } from "lucide-react";
import { HelpCircle } from "lucide-react";
import Profile from "@/Components/Profile/Profile";
import useAuth from "@/Hooks/useAuth";
import { AuthContext } from "@/Components/context/AuthContext";





export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [showBalanseForm, setShowBalanseForm] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  // const hello = useContext(AuthContext);
  // console.log('hello is',hello);

  //setShowForm

  const addBalanceForm = () => {
    setShowBalanseForm(!showBalanseForm);
    setOpen(false);
  };

  const addExpenseForm = () =>{
    setShowExpenseForm(!showExpenseForm);
    setOpen(false);
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashBoard></DashBoard>;
      case "expenses":
        return <h2 className="text-2xl font-bold">Track Your Expenses Here</h2>;
      case "analytic":
        return <h2 className="text-2xl font-bold">View Your Analytic</h2>;
      case "profile":
        return <Profile></Profile>;
      case "support":
        return <h2 className="text-2xl font-bold">Adjust support</h2>;
      case "setting":
        return <h2 className="text-2xl font-bold">Adjust setting</h2>;
      default:
        return <h2 className="text-2xl font-bold">Welcome to Finote</h2>;
    }
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaHome /> },
    { id: "analytic", label: "Analytic", icon: <BarChart3 /> },
    { id: "profile", label: "Profile", icon: <User /> },
    { id: "support", label: "Support", icon: <HelpCircle /> },
    { id: "setting", label: "Setting", icon: <FaCog /> },
  ];

  return (
    <div className="flex h-screen  justify-center">
      {/* Sidebar */}
      <aside
        className={`bg-[#2b30bc] py-2 px-3 flex flex-col   transition-all duration-300 ${
          isCollapsed ? "w-18" : "w-64"
        }`}
      >
        {/* Hamburger */}
        <button
          className="p-2 mb-4 text-white hover:bg-blue-500 rounded"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <HiMenu size={24} />
        </button>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center text-xl gap-2 p-3 text-white rounded hover:bg-blue-500 ${
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
      <main className="flex-1 p-6 bg-[#807d7d31] overflow-auto">
        <div>
          <Navbar></Navbar>


          {/* Plus button  */}
          <div className="fixed bottom-20 right-20 flex flex-col z-100 items-end space-y-3">
          {/* Floating options (only show when open) */}
            <div
              className={`flex flex-col items-end space-y-3 transition-all duration-300 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10 pointer-events-none"
              }`}
            >
            
              <button onClick={addBalanceForm} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition">
              <Wallet className="w-5 h-5" /> Add Balance
              </button>
              <button onClick={addExpenseForm} className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white shadow-md hover:bg-red-700 transition">
                <MinusCircle className="w-5 h-5" /> Add Expense
              </button>
            </div>
            
            {/* Add Balance Form Popup */}

            {showBalanseForm && (
              <div className="fixed inset-0 bg-[#ffffff40] bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
                  <button
                    onClick={() => setShowBalanseForm(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl font-semibold mb-4 text-center">Add Balance</h2>
                  <form  className="flex flex-col space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <input
                      type="number"
                      name="amount"
                      placeholder="Amount"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Add expense form  */}
            {showExpenseForm && (
              <div className="fixed inset-0 bg-[#ffffff40] bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg w-80 relative">
                  <button
                    onClick={() => setShowExpenseForm(false)}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <h2 className="text-xl font-semibold mb-4 text-center">Add Balance</h2>
                  <form  className="flex flex-col space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <input
                      type="number"
                      name="amount"
                      placeholder="Amount"
                      className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            ) }



          {/* Main + button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-transform duration-300"
              style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              <Plus className="w-8 h-8" />
            </button>
          </div>


        </div>

        {renderContent()}

        <div>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}
