import React from 'react';

const BubbleChartMobile = ({chartData}) => {

    let newData = chartData.sort((a,b) => {
        return b.value - a.value;
    })

    const items = newData?.map(({label,value}, index) => {
        if (value < 8) {
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
        }
    })

    return (
     <div className="bubbleChartColumn">
         {items}
     </div>
    )
}
 
export default BubbleChartMobile;