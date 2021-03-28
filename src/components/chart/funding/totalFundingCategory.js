import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';


const TotalFundingCategory = ({data}) => { 
    
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

    const CustomizedLabel = ({x,y,value}) => {

        return <text 
                x={x+20} 
                y={y-5} 
                fontSize={10} 
                fill={'#fff'}
                textAnchor="start" dominantBaseline="end">{Math.ceil(value) >0 ? Math.ceil(value) : 'N/A'}</text>
        }


    return(
        <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    barSize={15}
                    fill="#1f2328"
                    data={data}
                    layout="vertical" height={10} barCategoryGap={.5}
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                >
                    <CartesianGrid horizontal verticalFill={'#1f2328'} strokeOpacity={.2} strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(tick) => formatTick(tick)}   stroke="#fff" fontSize={12} />
                    <YAxis type="category" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={10} dataKey="name"/>
                        
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

export default TotalFundingCategory;