import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid} from 'recharts';


const AverageChart  = ({data}) => { 

    data.sort((a,b) => {
        return b.value - a.value;
    })

    const formatTick = (tick) => {
        if (tick >= 1000000) {
            return `$${tick}M`;
        } else {
            return `$${tick}`;
        }
    }


const CustomizedLabel = ({x,y,fill,value}) => {
    return <text 
            x={x} 
            y={y} 

            fontSize={12} 
            fill={'#fff'}
            textAnchor="start" >{value}</text>
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
                    <CartesianGrid horizontal strokeOpacity={.2} strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(tick) => formatTick(tick)}   stroke="#fff" fontSize={12} />
                    <YAxis type="category" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={12} dataKey="name"/>
                        
                <Bar 
                    dataKey="value" 
                    fill="#6baed6"
                    label={<CustomizedLabel />}
                    radius={10}
                    />
                    
            </BarChart>
        </ResponsiveContainer>

    )
}

export default AverageChart;
