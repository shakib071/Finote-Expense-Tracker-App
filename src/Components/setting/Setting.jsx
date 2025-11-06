// Setting.jsx
"use client";
import React, { useState } from "react";
import SettingNav from "./SettingNav";
import Account from "./Account";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div>
      <SettingNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-6">
        {activeTab === "account" && <Account></Account>}
        {activeTab === "session" && <h2>🕓 Session Management Content</h2>}
        {activeTab === "categories" && <h2>📂 Category Settings Content</h2>}
      </div>
    </div>
  );
};

export default Setting;
