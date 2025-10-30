import React, { useState, useMemo } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, LabelList } from "recharts";

const chartData = [
  { date: "2025-10-01", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-02", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-03", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-04", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-05", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-06", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-07", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-08", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-09", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-10", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-11", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-12", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-13", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-14", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-15", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-16", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-17", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-18", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-19", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-20", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-21", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-22", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-23", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-24", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-25", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-26", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-27", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-28", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-29", currentMonth: 0, prevMonth: 0 },
  { date: "2025-10-30", currentMonth: 1630, prevMonth: 0 },
  { date: "2025-10-31", currentMonth: 0, prevMonth: 0 },
];

export default function DailyExpenseBarChart() {
  const [activeChart, setActiveChart] = useState("currentMonth");

  // calculate total sums for display
  const total = useMemo(
    () => ({
      currentMonth: chartData.reduce((acc, curr) => acc + curr.currentMonth, 0),
      prevMonth: chartData.reduce((acc, curr) => acc + curr.prevMonth, 0),
    }),
    []
  );

  const chartColors = {
    currentMonth: "#8884d8",
    prevMonth: "#82ca9d",
  };

  return (
    <div className="bg-white p-4 rounded-xl" style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 16 }}>
        Daily Expense Comparison
      </h2>

      {/* Toggle Buttons */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["currentMonth", "prevMonth"].map((key) => (
          <button
            key={key}
            onClick={() => setActiveChart(key)}
            style={{
              flex: 1,
              padding: "8px 16px",
              fontWeight: activeChart === key ? "bold" : "normal",
              backgroundColor: activeChart === key ? "#ddd" : "#f5f5f5",
              border: "1px solid #ccc",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {key === "currentMonth" ? "Current Month" : "Previous Month"} (
            {total[key].toLocaleString()})
          </button>
        ))}
      </div>

      {/* Bar Chart */}
      <BarChart
        width={900}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 6, left: 5, bottom: 5 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
          }}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, activeChart === "currentMonth" ? "Current" : "Previous"]}
          labelFormatter={(label) =>
            new Date(label).toLocaleDateString("en-US", { month: "short", day: "numeric" })
          }
        />
        <Bar
          dataKey={activeChart}
          fill={chartColors[activeChart]}
          barSize={40}
          radius={6}
        >
          <LabelList
            dataKey={activeChart} 
            position="top" 
            formatter={(value) => `${value}`} 
            style={{ fontSize: 12, fill: "#333", fontWeight: "bold" }}
          />
        </Bar>
      </BarChart>
    </div>
  );
}
