import React from "react";
import { TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

export default function ProfileChartBar() {
  return (
    <div className="p-4 bg-white shadow-xl rounded-lg  max-w-full">
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Bar Chart - Horizontal</h2>
        <p className="text-sm text-gray-500">January - June 2024</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ left: 20 }}
        >
          <CartesianGrid horizontal={false} stroke="#f0f0f0" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            axisLine={false}
            tickFormatter={(val) => val.slice(0, 3)}
          />
          <Tooltip />
          <Bar dataKey="desktop" fill="#4f46e5" radius={5}>
            <LabelList dataKey="desktop" position="right" style={{ fill: "#000", fontWeight: "bold" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 flex flex-col items-start gap-1 text-sm">
        <div className="flex items-center gap-2 font-medium text-gray-800">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <p className="text-gray-500">Showing total visitors for the last 6 months</p>
      </div>
    </div>
  );
}
