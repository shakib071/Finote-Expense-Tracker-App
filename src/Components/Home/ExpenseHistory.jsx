import React from "react";
import { FaSpa, FaCar, FaGraduationCap, FaTv, FaFileInvoiceDollar } from "react-icons/fa";

const transactions = [
  {
    id: 1,
    icon: <FaSpa className="text-pink-500" />,
    category: "Beauty",
    date: "12.12.2023",
    description: "Grocery Items and Beverage soft drinks",
    amount: "-32.20",
    currency: "USD",
  },
  {
    id: 2,
    icon: <FaFileInvoiceDollar className="text-blue-500" />,
    category: "Bills & Fees",
    date: "12.12.2023",
    description: "Grocery Items and Beverage soft drinks",
    amount: "-32.20",
    currency: "USD",
  },
  {
    id: 3,
    icon: <FaCar className="text-green-500" />,
    category: "Car",
    date: "12.12.2023",
    description: "Grocery Items and Beverage soft drinks",
    amount: "-32.20",
    currency: "USD",
  },
  {
    id: 4,
    icon: <FaGraduationCap className="text-sky-500" />,
    category: "Education",
    date: "12.12.2023",
    description: "Grocery Items and Beverage soft drinks",
    amount: "-32.20",
    currency: "USD",
  },
  {
    id: 5,
    icon: <FaTv className="text-purple-500" />,
    category: "Entertainment",
    date: "12.12.2023",
    description: "Grocery Items and Beverage soft drinks",
    amount: "-32.20",
    currency: "USD",
  },
];

export default function ExpenseHistory() {
  return (
    <div className="bg-white rounded-xl shadow-md  p-6 w-full mx-auto">
      <h2 className="text-lg font-semibold mb-4">Expense History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3">Category</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Description</th>
            <th className="pb-3 text-right">Amount</th>
            <th className="pb-3 text-right">Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="py-3 flex items-center gap-3">
                <span className="font-medium text-gray-700">{t.category}</span>
              </td>
              <td className="py-3 text-gray-600">{t.date}</td>
              <td className="py-3 text-gray-600">{t.description}</td>
              <td className="py-3 text-right text-red-500 font-semibold">
                {t.amount}
              </td>
              <td className="py-3 text-right text-gray-600">{t.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
