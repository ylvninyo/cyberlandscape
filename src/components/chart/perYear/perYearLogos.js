import React from 'react';

const PerYearLogos = ({cx,cy,logos,close}) => {
    return (
        <div className="tooltip-modal_custom" style={{'top': `${cy+50}px`, 'left': `${cx}px`}}>
            <button className="close" onClick={() => close()}><i className="material-icons">close</i></button>
            <div className="clear"></div>
            <div className="row">
                <div className="col s4">
                    <img alt="cybermap analytics" src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                </div>
                <div className="col s4">
                    <img alt="cybermap analytics" src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                </div>
                <div className="col s4">
                    <img alt="cybermap analytics" src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                </div>
                <div className="col s4">
                    <img alt="cybermap analytics" src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2.jpg" />
                </div>
            </div>
        </div>
    );
}
 
export default PerYearLogos;