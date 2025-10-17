"use client";

import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function ChartLineMultiple() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 4 }}>
        Line Chart - Multiple
      </h2>
      <p style={{ color: "#555", marginBottom: 16 }}>January - June 2024</p>

      <LineChart width={900} height={300} data={chartData} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)} // Show first 3 letters of month
        />
        <Tooltip cursor={false} />
        <Legend />
        <Line
          type="monotone"
          dataKey="desktop"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="mobile"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>

      <div style={{ marginTop: 16, fontSize: "0.9rem", color: "#555" }}>
        <div style={{ fontWeight: "500", display: "flex", alignItems: "center", gap: 4 }}>
          Trending up by 5.2% this month
          <span style={{ color: "green", fontWeight: "bold" }}>↑</span>
        </div>
        <div>Showing total visitors for the last 6 months</div>
      </div>
    </div>
  );
}
