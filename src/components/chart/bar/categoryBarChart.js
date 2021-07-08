import React, { Component } from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell,
} from 'recharts';

import { categoryColor } from '../../../utils';

import CustomizedLabel from './customizedLabel';
import gradientName from './gradientName';

function formatTick(tick) {
    if (tick >= 1000000) {
        return `$${tick}M`;
    } else {
        return `$${tick}`;
    }
}

export default class CategoryBarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        let newData = [...this.props.data].sort((a, b) => {
            if (Number.isNaN(a.value) && Number.isNaN(b.value)) {
                return 0;
            }

            if (Number.isNaN(a.value)) {
                return 1;
            }

            if (Number.isNaN(b.value)) {
                return -1;
            }

            return b.value - a.value;
        });

        this.setState({ data: newData });
    }

    render() {
        const {
            labelFontSize,
            chartHeight,
            barCategoryGap,
            xAxisTickCount,
            xAxisTickFormatter,
            xAxisMinTickGap,
            yAxisFontSize,
            yAxisLine,
            yAxisPadding,
            gridStrokeOpacity,
            gridHorizontal,
            gridVertical,
            gridVerticalFill,
            gridVerticalPoints,
        } = this.props;
        const data = this.state.data;

        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    barSize={15}
                    fill="#15181b"
                    data={data}
                    layout="vertical"
                    height={chartHeight || 10}
                    barCategoryGap={barCategoryGap || 0.5}
                    margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
                >
                    {data.map((entry) => {
                        const color = categoryColor(entry.name);

                        return (
                            <defs>
                                <linearGradient
                                    id={gradientName(entry)}
                                    x1="0%"
                                    y1="85%"
                                    x2="85%"
                                    y2="100%"
                                >
                                    <stop offset="0" stopColor={'#15181b'} />
                                    <stop offset="100" stopColor={color} />
                                </linearGradient>
                            </defs>
                        );
                    })}

                    <CartesianGrid
                        horizontal={gridHorizontal}
                        vertical={gridVertical}
                        verticalFill={gridVerticalFill || '#1f2328'}
                        verticalPoints={gridVerticalPoints}
                        strokeOpacity={gridStrokeOpacity}
                        strokeDasharray="3 3"
                    />
                    <XAxis
                        tickCount={xAxisTickCount}
                        minTickGap={xAxisMinTickGap}
                        type="number"
                        tickFormatter={xAxisTickFormatter || formatTick}
                        stroke="#fff"
                        fontSize={14}
                    />
                    <YAxis
                        dx={-10}
                        type="category"
                        width={200}
                        axisLine={yAxisLine}
                        stroke="#fff"
                        padding={yAxisPadding}
                        fontSize={yAxisFontSize || 14}
                        dataKey="name"
                    />

                    <Bar
                        dataKey="value"
                        fill="#fff"
                        label={<CustomizedLabel fontSize={labelFontSize} />}
                        radius={10}
                    >
                        {data.map((entry) => {
                            return (
                                <Cell fill={`url(#${gradientName(entry)})`} />
                            );
                        })}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
