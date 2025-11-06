// SettingNav.jsx
import React from "react";

const SettingNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "account", label: "Account" },
    { id: "categories", label: "Categories" },
  ];

  return (
    <ul className="flex gap-6 pl-7 font-bold text-lg border-b border-gray-300 pb-2">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`cursor-pointer pb-2 ${
            activeTab === tab.id
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-600 hover:text-green-500"
          }`}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default SettingNav;
