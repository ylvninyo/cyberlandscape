import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell} from 'recharts';


class TotalFundingCategory extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            data:[],
            colors: []
        }
    }

    componentDidMount() {
        const newColors = [];
        const newData = this.props.data.sort((a,b) => {
            newColors.push(`rgb(${Math.floor(Math.random() * (158 - 20 + 1)) + 20}, 202, 225);`)
            // console.log('hj')
            return b.value - a.value;
        })

        this.setState({data:newData});
        this.setState({colors:newColors});

        // console.log(newColors)

        // console.log(this.state.colors)
    
    }

     formatTick = (tick) => {
        if (tick >= 1000000) {
            return `$${tick}M`;
        } else {
            return `$${tick}`;
        }
    }



render() {
    const ChartBarColors = ['#86c8c9', '#4e254e', '#7d3e7d', '#b0b654', '#ff7700', '#90b66b', '#60cdd3', '#ffa455', '#026167', '#67999a'];

    const CustomizedLabel = ({x,y,value}) => {

        return (
                <text 
                    x={x+20} 
                    y={y-5} 
                    fontSize={12} 
                    fill={'#fff'}
                    textAnchor="start" dominantBaseline="end">
                        {Math.ceil(value) > 0 ? Math.ceil(value) : 'N/A'}
                </text>
                )
        }
    
    return(
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                barSize={15}
                fill="#15181b"
                data={this.state.data}
                layout="vertical" height={8} barCategoryGap={.4}
                margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
            >
            
                {
                    this.state.data.map((entry, index) => {
                        const color = ChartBarColors[index%10];
                        return <defs>
                                    <linearGradient id={"gradient"+index} x1="0%" y1="85%" x2="85%" y2="100%">
                                        <stop offset="0" stopColor={'#15181b'} />
                                        <stop offset="100" stopColor={ChartBarColors[index%10]} />
                                    </linearGradient>
                                </defs>;
                        
                    })
                }

                <CartesianGrid horizontal verticalFill={'#1f2328'} strokeOpacity={.2} strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(tick) => this.formatTick(tick)}   stroke="#fff" fontSize={14} />
                <YAxis dx={-10} type="category" width={200} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={13} dataKey="name"/>
                    
                <Bar 
                    dataKey="value" 
                    fill='url(#fff)'
                    label={<CustomizedLabel />}
                    radius={10}
                >

                    {
                        this.state.data.map((entry, index) => {
                            return <Cell fill={"url(#gradient"+index+")"} />;
                        })
                    }
                </Bar>
                    
            </BarChart>
        </ResponsiveContainer>

    )
}
}

export default TotalFundingCategory;