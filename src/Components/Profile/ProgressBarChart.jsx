import React from "react";

export default function ProgressBarChart() {
  const spent = 1050;
  const balance = 2000;
  const total = spent + balance;
  const spentPercent = Math.round((spent / total) * 100);
  const balancePercent = Math.round((balance / total) * 100);

  return (
    <div className="w-full  p-4 bg-white rounded-xl shadow-xl">
      <h2 className="mb-2 font-semibold">Finance Overview This Month</h2>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-xl font-bold text-red-600">Spent: ${spent}</span>
        <span className="text-xl font-bold text-green-600">Balance: ${balance}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-6 flex overflow-hidden">
        <div
          className="bg-gray-900 h-6 flex justify-center items-center text-white text-xs font-bold"
          style={{ width: `${spentPercent}%` }}
        >
          {spentPercent}%
        </div>
        <div
          className="bg-gray-500 h-6 flex justify-center items-center text-white text-xs font-bold"
          style={{ width: `${balancePercent}%` }}
        >
          {balancePercent}%
        </div>
      </div>
    </div>
  );
}
