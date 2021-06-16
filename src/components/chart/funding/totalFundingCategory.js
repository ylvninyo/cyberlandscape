import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';


class TotalFundingCategory extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            data:[]
        }
    }

    componentDidMount() {
    
        const newData = this.props.data.sort((a,b) => {
            return b.value - a.value;
        })

        this.setState({data:newData});
    
    }

     formatTick = (tick) => {
        if (tick >= 1000000) {
            return `$${tick}M`;
        } else {
            return `$${tick}`;
        }
    }



render() {
    const CustomizedLabel = ({x,y,value}) => {

        return <text 
                x={x+20} 
                y={y-5} 
                fontSize={12} 
                fill={'#fff'}
                textAnchor="start" dominantBaseline="end">{Math.ceil(value) > 0 ? Math.ceil(value) : 'N/A'}</text>
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
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="85%" x2="85%" y2="100%">
                        {/* <stop stopColor="#009dbc" /> */}
                        <stop offset="0" stopColor={'#15181b'} />
                        <stop offset="100" stopColor={'#7e179c'} />
                        {/* <stop offset="0.823677" stopColor={'#009dbc'} />
                        <stop offset="1" stopColor="white" stopOpacity="0.01" /> */}
                    </linearGradient>
                </defs>
                    <CartesianGrid horizontal verticalFill={'#1f2328'} strokeOpacity={.2} strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(tick) => this.formatTick(tick)}   stroke="#fff" fontSize={14} />
                    <YAxis type="category" width={100} axisLine={{ stroke: 'transparent' }} stroke="#fff" padding={{ left: 20 }} fontSize={13} dataKey="name"/>
                        
                <Bar 
                    dataKey="value" 
                    fill='url(#gradient)'
                    label={<CustomizedLabel />}
                    radius={10}
                    />
                    
            </BarChart>
        </ResponsiveContainer>

    )
}
}

export default TotalFundingCategory;