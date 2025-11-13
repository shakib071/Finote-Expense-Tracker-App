
import useAuth from "@/Hooks/useAuth";
import useTopExpenseByCategory from "@/Hooks/useTopExpenseByCategory";
import { useEffect, useState } from "react";
import { BarChart, Bar, CartesianGrid, Rectangle, XAxis, Tooltip} from "recharts";




export default function BarCharts() {

  const {user,loading,isRefetch,setIsRefetch} = useAuth();
  const {data:TopExpenseByCategory,isLoading,refetch} = useTopExpenseByCategory(user?.uid);
  const [barWidth,setBarWidth] = useState(600);

  

  useEffect(() => {
    if(user?.uid && isRefetch){
      refetch();
      setIsRefetch(false);
    }
  },[isRefetch,setIsRefetch,refetch,user?.uid]);

  useEffect(()=> {
    const handleWidth = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBarWidth(600);
      else if (width >= 1280) setBarWidth(600);
      else if (width >= 1024) setBarWidth(600);
      else if (width >= 768) setBarWidth(600);
      else if (width >= 640) setBarWidth(600);
      else setBarWidth(290);
    };
    handleWidth();
  },[window?.innerWidth,setBarWidth,barWidth])

  if(loading || isLoading){
    return 'loading';
  }
  
  return (
    <div className="bg-white p-3 rounded-xl">
      <h2>Top Expenses this month</h2>
      
      <BarChart  width={barWidth} height={300} data={TopExpenseByCategory}  margin={{ top: 20, right: 5, left: 5, bottom: 1 }}>
        <CartesianGrid vertical={false} />
        <XAxis className="text-[11px] md:text-[16px]" dataKey="category" />
        <Tooltip   cursor={{ fill: "transparent" }} />
        <Bar className="text-[11px] md:text-[16px]"
          dataKey="total"
          radius={8}
          activeIndex={2}
          barSize={80}  
          label={{ position: "top", style: { fontWeight: "bold", fill: "#000" } }} 
          activeBar={(props) => (
            <Rectangle
              {...props}
              fillOpacity={0.8}
              stroke={props.payload.fill}
              strokeDasharray={4}
              strokeDashoffset={4}
            />
          )}
        />
        
      </BarChart>
      
    </div>
  );
}

