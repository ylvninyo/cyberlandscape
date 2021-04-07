import React from 'react';

const PerYearLogos = ({cx,cy,logos,close}) => {

    const images = logos?.map((l,index) => {
        return (
            <div className="col s4" key={index}>
                <img alt="cybermap analytics" src={`${l}`} />
            </div>
        )
    })

    return (
        <div className="tooltip-modal_custom" style={{'top': `${cy+50}px`, 'left': `${cx}px`}}>
            <button className="close" onClick={() => close()}><i className="material-icons">close</i></button>
            <div className="clear"></div>
            <div className="scroll-wrapper">
                <div className="row">
                    {images}
                </div>
            </div>
        </div>
    );
}
 
export default PerYearLogos;