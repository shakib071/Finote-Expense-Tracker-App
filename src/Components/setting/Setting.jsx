// Setting.jsx
"use client";
import React, { useState } from "react";
import SettingNav from "./SettingNav";
import Account from "./Account";
import Categories from "./Categories";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div>
      <SettingNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-6">
        {activeTab === "account" && <Account></Account>}
        {activeTab === "categories" && <Categories></Categories>}
      </div>
    </div>
  );
};

export default Setting;
