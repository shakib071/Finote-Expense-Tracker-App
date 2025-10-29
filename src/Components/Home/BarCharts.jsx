
import useAuth from "@/Hooks/useAuth";
import useTopExpenseByCategory from "@/Hooks/useTopExpenseByCategory";
import { useEffect } from "react";
import { BarChart, Bar, CartesianGrid, Rectangle, XAxis, Tooltip} from "recharts";




export default function BarCharts() {

  const {user,loading,isRefetch,setIsRefetch} = useAuth();
  const {data:TopExpenseByCategory,isLoading,refetch} = useTopExpenseByCategory(user?.uid);

  

  useEffect(() => {
    if(user?.uid && isRefetch){
      refetch();
      setIsRefetch(false);
    }
  },[isRefetch,setIsRefetch,refetch,user?.uid]);

  if(loading || isLoading){
    return 'loading';
  }
  
  return (
    <div className="bg-white p-3 rounded-xl">
      <h2>Top Expenses this month</h2>
      
      <BarChart  width={600} height={300} data={TopExpenseByCategory}  margin={{ top: 20, right: 5, left: 5, bottom: 1 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="category" />
        <Tooltip   cursor={{ fill: "transparent" }} />
        <Bar
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

