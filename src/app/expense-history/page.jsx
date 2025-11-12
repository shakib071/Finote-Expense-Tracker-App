'use client';
import useAuth from '@/Hooks/useAuth';
import useExpenseHistoryByMonth from '@/Hooks/useExpenseHistoryByMonth';
import React, { useEffect, useState } from 'react';



const page = () => {
    const {user,loading,isRefetch,setIsRefetch} = useAuth();
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [selectedPage , setSelectedPage] = useState(0);
    const [numberOfPage, setNumberOfPage] = useState(2);
    const [SearchQuery,setsearchQuery] = useState("");
    const [pages, setPages] = useState([]);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const {data:expenseHistoryByMonth,isLoading,refetch} = useExpenseHistoryByMonth(user?.uid,month,year,selectedPage,itemsPerPage,SearchQuery);

    // console.log(SearchQuery,expenseHistoryByMonth?.pagination);
    console.log('count is ',expenseHistoryByMonth?.count);

    useEffect(()=> {
        if(isRefetch && user?.uid){
            refetch();
            setIsRefetch(false);
        }
    },[user?.uid,refetch,isRefetch,setIsRefetch])

    useEffect(()=> {
        refetch();
    },[year,month,SearchQuery,selectedPage]);


    // Automatically select current month & year
    useEffect(() => {
        const now = new Date();
        setMonth(String(now.getMonth() + 1)); // getMonth() returns 0–11
        setYear(String(now.getFullYear()));
    }, []);


    useEffect(()=>{
        const dataCount = expenseHistoryByMonth?.count;
        
        const numofPage = Math.ceil(dataCount/parseInt(itemsPerPage));
        setNumberOfPage(numofPage);
        refetch();
   },[expenseHistoryByMonth?.count,itemsPerPage,refetch]);


    useEffect(() => {
        const pageWindowSize = 10;
        let start = Math.max(selectedPage - Math.floor(pageWindowSize / 2), 0);
        let end =  Math.min(selectedPage + Math.floor(pageWindowSize / 2), numberOfPage);

        if(selectedPage - Math.floor(pageWindowSize / 2)<=0){
        end = Math.min(pageWindowSize+start,numberOfPage);
        }
        if(selectedPage + Math.floor(pageWindowSize / 2)>numberOfPage){
        start = Math.max(end-pageWindowSize,0)
        }

        const newPages = [];
        for (let i = start; i < end; i++) {
        newPages.push(i);
        }

        setPages(newPages); 
    }, [selectedPage, numberOfPage]);

    const handleKeyClick=(page) => {
    
        setSelectedPage(page);

    }


    const handlePrevButton = () => {
        const value = selectedPage-1
        if(selectedPage>0){
        setSelectedPage(value);
        
        }
    
    }
    const handleNextButton = () => {
        const value = selectedPage+1;
        if(selectedPage<numberOfPage-1){
        setSelectedPage(value);

        }
    
    }

    const handleItemsPerPage = (e) => {
        const value = parseInt(e.target.value);
        setItemsPerPage(value);
        setSelectedPage(0);
        
    }




    const handleSearchQuery = (e) => {
        e.preventDefault();
        const value = e.target.searchQuery.value;
        setsearchQuery(value);
        setSelectedPage(0);
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
        <div className='min-h-screen'>
            


            <div className="p-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center gap-4 mb-6">
  
        
                <div className="flex-1">
                <form onSubmit={handleSearchQuery} className="flex items-center  bg-white border rounded-lg shadow-sm px-3 py-2">
                    <input
                    type="text"
                    placeholder="Search your expenses"
                    name="searchQuery"
                    className="flex-1 outline-none text-gray-700 text-sm"
                    />
                    <button className="ml-2 md:text-lg   btn btn-primary px-3 py-1 ">
                    submit
                    </button>
                </form>
                </div>

            
                <div className="flex  items-center gap-2">
                    <select value={month} onChange={(e) => setMonth(e.target.value)}  className="border rounded-lg px-3 py-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="0" disabled >Select a month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                        
                    </select>

                    <select value={year} onChange={(e) => setYear(e.target.value)}  className="border rounded-lg px-3 py-1 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500" >
                        <option value="" disabled >Select Year</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                    </select>
                </div>

            </div>



            <div className="bg-white rounded-xl shadow-md  p-6 w-full mx-auto">
                <h2 className="text-lg font-semibold mb-4">Expense History</h2>
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr className="text-gray-500 text-sm border-b">
                        <th className="pb-3">Category</th>
                        <th className="pb-3">Name</th>
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Description</th>
                        <th className="pb-3 text-right">Amount</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {expenseHistoryByMonth?.pagination?.map((t,index) => (
                        <tr
                        key={index}
                        className="border-b last:border-none hover:bg-gray-50 transition"
                        >
                        <td className="py-3 flex items-center gap-3">
                            <span className="font-medium text-gray-700">{t?.category}</span>
                            
                        </td>
                        <td className="py-3 text-gray-600">{t?.name}</td>
                        <td className="py-3 text-gray-600">{covertDateTimeToBD(t?.date)}</td>
                        <td className="py-3 text-gray-600">{t?.description}</td>
                        <td className="py-3 text-right text-red-500 font-semibold">
                            <span>-</span>{t?.amount}
                        </td>
                        
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex  flex-col md:flex-row justify-center  items-center md:gap-4 mt-10 space-y-4 md:space-y-0">

                <div className="flex  items-center sm:space-x-1 md:space-x-2">
                    {/* Prev */}
                    <button onClick={handlePrevButton} className=" px-1 md:px-3 py-1 text-[10px] sm:text-[14px] md:text-[16px] rounded-lg border bg-white hover:bg-blue-500 hover:text-white border-gray-300">
                    Prev
                    </button>
                    {
                    pages?.map((page,index)=>
                        <button  onClick={()=>{handleKeyClick(parseInt(page))}} key={index} className={`px-3 py-1  rounded-lg ${selectedPage==page ?'text-white bg-blue-500 ': 'bg-white text-black'} border text-[10px] sm:text-[14px] md:text-[16px] text-black  hover:bg-blue-500 border-gray-300`}>
                        {page + 1}
                        </button>
                    )
                    }
                    
                
                    {/* Next */}
                    <button onClick={handleNextButton} className="px-1 md:px-3 py-1 text-[10px] sm:text-[14px] md:text-[16px] rounded-lg border bg-white hover:bg-blue-500 hover:text-white border-gray-300">
                    Next
                    </button>

                    
                    </div>


                <div className="flex items-center space-x-2">
                <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
                    Items per page:
                </label>
                <select 
                    onChange={handleItemsPerPage}
                    value={itemsPerPage}
                    id="itemsPerPage"
                    className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
                </div>

            </div>
        </div>
    );
};

export default page;