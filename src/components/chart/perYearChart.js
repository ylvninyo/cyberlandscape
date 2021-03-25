import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    year:2016,
    company: 13,
  },
  {
    name: 'Page B',
    year:2017,
    company: 10,
  },
  {
    name: 'Page C',
    year:2018,
    company: 16,
  },
  {
    name: 'Page D',
    year:2019,
    company: 25,
  },
  {
    name: 'Page E',
    year:2020,
    company: 13,
  },
];

// const CustomizedDot = (props) => {
//   const { cx, cy, stroke, payload, value, point, area } = props;
//   return (
//     <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="green" viewBox="0 0 1024 1024">
//       <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z"/>
//     </svg>
//   );
// };

const PerYearChart = () => {
    

    return (
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeOpacity={.2} strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="company" stroke="#8884d8" activeDot={{ onClick: (event, payload) => console.log(payload) }} dot />
        </LineChart>
     </ResponsiveContainer>
    );
}
 
export default PerYearChart;