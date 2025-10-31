//expense summary 

'use client'
import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import useExpenseSummary from "@/Hooks/useExpenseSummary";
import useAuth from "@/Hooks/useAuth";


export default function ProfileChartBar() {
  const {user,loading,isRefetch,setIsRefetch} = useAuth();
  const {data:chartData,isLoading,refetch} = useExpenseSummary(user?.uid);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const [currMonth,setCurrMonth] = useState('November');
  const [sixMonthAgo,setSixMonthAgo] = useState('June');


  useEffect(()=> {
    if(chartData){
      setCurrMonth(chartData[5]?.month);
      setSixMonthAgo(chartData[0]?.month);
    }
  },[chartData,currMonth,sixMonthAgo]);



  // console.log(chartData[0]?.month);


  function getSixMonthsAgo(currentMonth) {
    // currentMonth: 0 (Jan) - 11 (Dec)
    let sixMonthsAgo = currentMonth - 5;
    if (sixMonthsAgo < 0) {
      sixMonthsAgo += 12; // wrap around previous year
    }
    return sixMonthsAgo;
}

  useEffect(()=> {
    if(user?.uid,isRefetch){
      refetch();
      setIsRefetch(false);
    }
  },[user?.uid,isRefetch,setIsRefetch,refetch]);

  if(loading || isLoading){
    return 'loading';
  }

  return (
    <div className="p-4 bg-white shadow-xl rounded-lg w-full">
      <div className="mb-2">
        <h2 className="text-lg font-semibold">Expense Summary</h2>
        <p className="text-sm text-gray-500">{sixMonthAgo} - {currMonth} {currentYear}</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 10 }}>
          <CartesianGrid horizontal={false} stroke="#f0f0f0" />
          <XAxis type="number"  />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            axisLine={false}
            tickFormatter={(val) => val.slice(0, 3)}
          />
          <Tooltip />
          <Bar dataKey="expense" fill="#4f46e5" radius={5}>
            <LabelList
              dataKey="expense"
              position="right"
              style={{ fill: "#000", fontWeight: "bold" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 flex flex-col items-start gap-1 text-sm">
        <div className="flex items-center gap-2 font-medium text-gray-800">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <p className="text-gray-500">
          Showing total expenses for the last 6 months
        </p>
      </div>
    </div>
  );
}
