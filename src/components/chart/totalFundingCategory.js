import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, Tooltip, Legend, CartesianGrid} from 'recharts';


const TotalFundingCategory  = ({value}) => { 

    const data = [
        {
            "name":"Endpoint Security",
            "value":132
        },
        {
            "name":"Identity & Access Mgmt",
            "value":89
        },
        {
            "name":"Fraud & Transactions",
            "value":87
        },
        {
            "name":"Threat Intelligence",
            "value":74
        },
        {
            "name":"Application Security",
            "value":73
        },
        {
            "name":"71",
            "value":57
        }
    ]
const CustomizedLabel = ({x,y,fill,value}) => {
    return <text 
            x={x} 
            y={y} 

            fontSize={12} 
            fill={'#fff'}
            textAnchor="top" dominantBaseline="start">${value}M</text>
}


    return(
        <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    barSize={20}
                    fill="#fff"
                    data={data}
                    layout="vertical" height={10} barCategoryGap={.5}
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                >

                    <XAxis type="number" tickFormatter={(tick) => `$${tick}M`}   stroke="#fff" fontSize={12} />
                    <YAxis type="category" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={12} dataKey="name"/>
                        
                <Bar 
                    dataKey="value" 
                    fill="#ee6e73"
                    label={<CustomizedLabel />}
                    radius={10}
                    />
                    
            </BarChart>
        </ResponsiveContainer>

    )
}

export default TotalFundingCategory


{/* <ResponsiveContainer width="100%" height="100%">
<BarChart width={150} height={40} data={data} layout="vertical" margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
  <Bar dataKey="uv" fill="#8884d8" />
</BarChart>
</ResponsiveContainer> */}