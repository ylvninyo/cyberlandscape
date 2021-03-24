import React, { Component, PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

const data = [
  { x: 100, y: 200, },
  { x: 120, y: 100, },
  { x: 170, y: 300, },
  { x: 140, y: 250, },
  { x: 150, y: 400, },
  { x: 110, y: 280, },
];

const TotalFundingAmount = ({}) => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter 
           name="A school" 
          
           data={data} fill="#8884d8">
            <LabelList dataKey="x" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    );
}


export default TotalFundingAmount