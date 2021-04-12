import React from 'react';


const Spinner  = () => { 
        
    return(
        <section className="spinner">
            <svg className="svg-spinner" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="32" strokeWidth="8" stroke="#2ab7a9" strokeDasharray="50.26548245743669 50.26548245743669" fill="none" strokeLinecap="round" >
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" style={{animationPlayState: 'running', animationDelay: '0s'}}></animateTransform>
            </circle>
            </svg>
        </section>
    )
}

export default Spinner;