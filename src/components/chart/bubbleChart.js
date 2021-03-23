import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const BubbleChart  = ({value}) => { 

    const data = [
        { name: 'Group A', value: value },
      ];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" dominantBaseline="central">
            <tspan dy="1em">{`${(percent * 100).toFixed(0)}%`}</tspan>
            <tspan dy="1em">Category name</tspan>
          </text>
        );
      };


      const pi = 3.141;
      const radius = Math.sqrt(2*value/pi*100);
      

    return(
        <PieChart stroke="none" width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={radius}
                fill="#8884d8"
                dataKey="value"
            >
                <Cell stroke="none" fill="#8884d8" />
            </Pie>
        </PieChart>
    )
}

export default BubbleChart