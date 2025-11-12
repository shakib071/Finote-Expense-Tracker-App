'use client';
import useAuth from "@/Hooks/useAuth";
import useExpenseHistoryByMonth from "@/Hooks/useExpenseHistoryByMonth";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";



export default function ExpenseHistory() {
  const {user,loading,isRefetch,setIsRefetch} =  useAuth();
  const router = useRouter();
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [selectedPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [SearchQuery] = useState("");

  const {data:expenseHistory,isLoading,refetch} = useExpenseHistoryByMonth(user?.uid,month,year,selectedPage,itemsPerPage,SearchQuery);

  useEffect(()=> {
      if(isRefetch && user?.uid){
          refetch();
          setIsRefetch(false);
      }
  },[user?.uid,refetch,isRefetch,setIsRefetch])

  useEffect(()=> {
      refetch();
  },[year,month]);

  // Automatically select current month & year
  useEffect(() => {
      const now = new Date();
      setMonth(String(now.getMonth() + 1)); // getMonth() returns 0–11
      setYear(String(now.getFullYear()));
  }, []);

  const handleSeeAll = () => {
    router.push('/expense-history');
  }

  const covertDateTimeToBD = (utcDate) => {
    const bdFormatted = new Date(utcDate).toLocaleString("en-BD", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    });

    return bdFormatted;
  }

  if(loading || isLoading){
    return 'loading';
  }
  
  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-full mx-auto">
      <h2 className="text-lg font-semibold mb-4">Expense History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3 px-1">Category</th>
            <th className="pb-3">Name</th>
            <th className="pb-3">Date</th>
            
            <th className="pb-3 text-right">Amount</th>
            
          </tr>
        </thead>
        <tbody>
          {expenseHistory?.pagination?.map((t,index) => (
            <tr
              key={index}
              className="border-b  text-sm last:border-none hover:bg-gray-50 transition"
            >
              {/* <td className="py-3 flex items-center gap-3">
                <span className="font-medium text-gray-700">{t?.category}</span>
              </td> */}
              <td className="py-3 px-1 font-medium text-gray-600">{t?.category}</td>
              <td className="py-3 px-1 text-gray-600">{t?.name}</td>
              <td className="py-3 px-1 text-[10px] md:text-sm text-gray-600">{covertDateTimeToBD(t?.date)}</td>
              
              <td className="py-3 px-1 text-right text-red-500 font-semibold">
                -{t?.amount}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <div onClick={()=>handleSeeAll()} className="flex items-center justify-center font-semibold mt-5 bg-green-400 py-1 rounded-2xl shadow-xl cursor-pointer">
        <button className="text-xl text-white  ">See all</button>
      </div>
    </div>
  );
}
