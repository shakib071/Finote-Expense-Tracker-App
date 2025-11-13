import useAuth from "@/Hooks/useAuth";
import useIncomeExpense from "@/Hooks/useIncomeExpense";
import React, { useEffect, useState } from "react";

export default function ProgressBarChart() {
  const {user,loading,isRefetch,setIsRefetch} = useAuth();
  const [spent,setSpend] = useState(10);
  const [balance,setBalance ]= useState(10);
  const [spentPercent,setSpentPercent] = useState(50);
  const [balancePercent,setBalancePercent] = useState(50);

  const {data:incomeExpense,isLoading,refetch} = useIncomeExpense(user?.uid);
  // console.log(incomeExpense);

  useEffect(()=> {
    setSpend(incomeExpense?.expense);
    setBalance(incomeExpense?.balance-incomeExpense?.expense);
    const total = spent + balance;
    const spendPercentage = Math.round((spent/total)*100);
    setSpentPercent(spendPercentage);
    setBalancePercent(100-spendPercentage);
  },[incomeExpense,user?.uid,isLoading,spent,balance,spentPercent,balancePercent]);

  useEffect(()=> {
    if(isRefetch && user?.uid){
      refetch();
      setIsRefetch(false);
    }
  },[refetch,isRefetch,user?.uid,setIsRefetch]);

  if(loading || isLoading){
    return 'loading';
  }

  return (
    <div className="w-full  p-4 bg-white rounded-xl shadow-xl">
      <h2 className="mb-2 font-semibold">Finance Overview This Month</h2>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[17px] md:text-xl font-bold text-red-600">Spent: ${spent}</span>
        <span className="text-[17px] md:text-xl font-bold text-green-600">Left: ${balance}</span>
      </div>
      <div className="w-full bg-gray-500 rounded-full h-5 md:h-6 flex overflow-hidden">
        <div
          className="bg-red-600 h-5 md:h-6 flex justify-center items-center text-white text-xs font-bold"
          style={{ width: `${spentPercent}%` }}
        >
          {spentPercent}%
        </div>
        <div
          className="bg-green-500 h-5 md:h-6 flex justify-center items-center text-white text-xs font-bold"
          style={{ width: `${balancePercent}%` }}
        >
          {balancePercent}%
        </div>
      </div>
    </div>
  );
}
