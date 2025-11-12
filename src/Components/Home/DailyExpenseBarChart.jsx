import useAuth from "@/Hooks/useAuth";
import useDailyExpense from "@/Hooks/useDailyExpense";
import React, { useState, useMemo, useEffect } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, LabelList } from "recharts";



export default function DailyExpenseBarChart() {
  const {user,loading,isRefetch,setIsRefetch} = useAuth();
  const [activeChart, setActiveChart] = useState("currentMonth");
  const {data:chartData,isLoading,refetch} = useDailyExpense(user?.uid);
  const [barWidth,setBarWidth] = useState(900);
  // console.log('ChartData is',chartData);
  

  useEffect(()=>{
    if(user?.uid && isRefetch){
      refetch();
      setIsRefetch(false);
    }
  },[user?.uid,isRefetch,setIsRefetch,refetch])

    useEffect(()=> {
    const handleWidth = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBarWidth(900);
      else if (width >= 1280) setBarWidth(900);
      else if (width >= 1024) setBarWidth(900);
      else if (width >= 768) setBarWidth(900);
      else if (width >= 640) setBarWidth(900);
      else setBarWidth(290);
    };
    handleWidth();
  },[window?.innerWidth,setBarWidth,barWidth])

  // calculate total sums for display
  const total = useMemo(() => {
    if (!Array.isArray(chartData)) return { currentMonth: 0, prevMonth: 0 };

    const currentMonthTotal = chartData.reduce((sum, item) => sum + (item.currentMonth || 0), 0);
    const prevMonthTotal = chartData.reduce((sum, item) => sum + (item.prevMonth || 0), 0);

    return {
      currentMonth: currentMonthTotal,
      prevMonth: prevMonthTotal,
    };
  }, [chartData]);


  const chartColors = {
    currentMonth: "#8884d8",
    prevMonth: "#82ca9d",
  };

  if(loading || isLoading){
    return 'loading';
  }

  return (
    <div className="bg-white p-4  rounded-xl" style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h2 className="text-lg md:text-xl" style={{ fontWeight: "bold", marginBottom: 16 }}>
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
            <span className="text-sm md:text-lg">{key === "currentMonth" ? "Current Month" : "Previous Month"} (
            {total[key]?.toLocaleString()})</span>
          </button>
        ))}
      </div>

      {/* Bar Chart */}
      <BarChart
        width={barWidth}
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
            className="text-[8px] md:text-sm"
            style={{ fill: "#333", fontWeight: "bold" }}
          />
        </Bar>
      </BarChart>
    </div>
  );
}
