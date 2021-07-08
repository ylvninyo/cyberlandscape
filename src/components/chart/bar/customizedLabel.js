import React from 'react';

export default function CustomizedLabel({ fontSize = 14, x, y, width, height, value }) {
    const actualX = Number.isNaN(x) ? 0 : x;
    const actualWidth = Number.isNaN(width) ? 0 : width;

    return (
        <text
            x={actualX + actualWidth + 15}
            y={y + height - 2}
            fontSize={fontSize}
            fill={'#fff'}
            textAnchor="start"
            dominantBaseline="end"
        >
            {value && Math.ceil(value) > 0 ? Math.ceil(value) : 'N/A'}
        </text>
    );
}
