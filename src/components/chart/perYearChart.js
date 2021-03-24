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

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  return (
    <i>+</i>
  );
};

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
          <Line type="monotone" dataKey="company" stroke="#8884d8" dot={<CustomizedDot />} />
        </LineChart>
     </ResponsiveContainer>
    );
}
 
export default PerYearChart;