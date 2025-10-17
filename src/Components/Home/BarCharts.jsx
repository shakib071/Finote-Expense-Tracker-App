
import { BarChart, Bar, CartesianGrid, Rectangle, XAxis, Tooltip,LabelList } from "recharts";


const chartData = [
  { name: "chrome", expense: 187, fill: "#8884d8" },
  { name: "safari", expense: 100, fill: "#82ca9d" },
  { name: "firefox", expense: 375, fill: "#ffc658" },
  { name: "edge", expense: 173, fill: "#ff7f50" },
  { name: "other", expense: 90, fill: "#00c49f" },
  { name: "chrome", expense: 187, fill: "#8884d8" },
  { name: "safari", expense: 100, fill: "#82ca9d" },
  { name: "firefox", expense: 375, fill: "#ffc658" },
  { name: "edge", expense: 173, fill: "#ff7f50" },
  { name: "other", expense: 90, fill: "#00c49f" },
];

export default function BarCharts() {
  return (
    <div className="bg-white p-3 rounded-xl">
      <h2>Top Expenses</h2>
      <BarChart  width={600} height={300} data={chartData}  margin={{ top: 20, right: 5, left: 5, bottom: 1 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <Tooltip   cursor={{ fill: "transparent" }} />
        <Bar
          dataKey="expense"
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

