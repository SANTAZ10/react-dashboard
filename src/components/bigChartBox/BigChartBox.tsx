import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss"


const data = [
    { name: "Item 1", books: 5, clothes: 10, electronics: 2 },
    { name: "Item 2", books: 3, clothes: 8, electronics: 5 },
    { name: "Item 3", books: 7, clothes: 12, electronics: 3 },
    { name: "Item 4", books: 2, clothes: 6, electronics: 8 }
  ];


const BigChartBox = () => {
  return (
    <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BigChartBox