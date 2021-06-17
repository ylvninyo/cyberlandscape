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
                        <div className="item_circle" style={{'backgroundColor': `rgba(${Math.random() * (0 - 150) + 150},${Math.random() * (18 - 100) + 100},${Math.random() * (50 - 200) + 200})`}}>
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