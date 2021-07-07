import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';


class AverageChartLifeSpan extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            data:[]
        }
    }

componentDidMount() {
    let newData = this.props.data.sort((a,b) => {
        return b.value - a.value;
    });

    this.setState({data: newData});
}




    render() {

        const CustomizedLabel = ({x,y,fill,value}) => {
            return <text 
                    x={x+20} 
                    y={y} 
    
                    fontSize={14} 
                    fill={'#fff'}
                    textAnchor="top" dominantBaseline="start">{Math.ceil(value) >0 ? Math.ceil(value) : 'N/A'}</text>
        }
        return(
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    barSize={15}
                    fill="#15181b"
                    data={this.state.data}
                    layout="vertical" 
                    height={10} 
                    barCategoryGap={.5}
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                >
                    <defs>
                        <linearGradient id="gradient3" x1="0%" y1="85%" x2="85%" y2="100%">
                            {/* <stop stopColor="#009dbc" /> */}
                            <stop offset="0" stopColor={'#15181b'} />
                            <stop offset="100" stopColor={'#fdae6b'} />
                        </linearGradient>
                    </defs>
                    
                    <CartesianGrid horizontal={false} verticalPoints={['100', '200', '300', '400', '500']} verticalFill={'#22272c'} strokeDasharray="3 3" />
                    <XAxis tickCount={12} type="number" tickFormatter={(tick) => `${tick}Y`} stroke="#fff" fontSize={14} minTickGap={0} />
                    <YAxis type="category" width={100} axisLine={false} stroke="#fff" fontSize={14} dataKey="name"/>
                        
                    <Bar 
                        dataKey="value" 
                        fill="url(#gradient3)"
                        label={<CustomizedLabel />}
                        radius={10}
                        />
                        
                </BarChart>
            </ResponsiveContainer>
    
        )
    }
}

export default AverageChartLifeSpan;
