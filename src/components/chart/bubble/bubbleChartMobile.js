import React from 'react';

const BubbleChartMobile = ({chartData}) => {

    const items = chartData?.map(({label,value}, index) => {
        return (
            <div className="bubbleChartColumn_item" key={index}>
                <div>
                    <div className="item_circle" style={{'backgroundColor': `rgba(${Math.random() * (90 - 60) + 60},${Math.random() * (18 - 10) + 10},120)`}}>
                        {value}%
                    </div>
                </div>
                <div>
                    <span>
                        {label}
                    </span>
                </div>
            </div>
        )
    })

    return (
     <div className="bubbleChartColumn">
         {items}
     </div>
    )
}
 
export default BubbleChartMobile;