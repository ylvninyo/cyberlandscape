import React, { Component } from 'react';
import { render } from 'react-dom';

class PerYearLogos  extends Component{

    constructor(props) {
        super(props);
        this.state = {
            cx: null,
            cy: null,
            logos: null,
            year: null,
            years: [],
            data: this.props.data,
            key: null,
        }
    }

    scrollRight = () => {

        if(this.state.years.[this.state.key+1]) {
            
            const y = this.state.years[this.state.key+1];
            // this.setState({year:this.year})
            let logos = [];

            const selectedYearCompanies = this.props.data.[`${y}`]

            selectedYearCompanies.map((c) => {
              logos.push(c.logo);
            });

            this.setState({logos, year: y, key: this.state.key+1});

        }

    }


    scrollLeft = () => {
        if(this.state.years.[this.state.key-1]) {
            
            const y = this.state.years[this.state.key-1];
            // this.setState({year:this.year})
            let logos = [];

            const selectedYearCompanies = this.props.data.[`${y}`]

            selectedYearCompanies.map((c) => {
              logos.push(c.logo);
            });

            this.setState({logos, year: y, key: this.state.key-1});

        }

    }
    
    componentDidMount () {

        this.setState({
            ...this.props
        })

        let years = [];
        Object.keys(this.props.data).map(el => {
            years.push(Number(el));
        })


       let key = Object.keys(this.props.data).indexOf(this.props.year);

        this.setState({years,key})
    }


 render() {

    const images = this.state.logos?.map((l,index) => {
        return (
            <div className="col s4" key={index}>
                <img className="logo-image" alt="cybermap analytics" src={`${l}`} />
            </div>
        )
    })
    return (
        <div className="tooltip-modal_custom" style={{'top': `${this.state.cy+50}px`, 'left': `${this.state.cx}px`}}>
            <div className="modal-header">
                <div className="modal-header_left">
                    <h4>{this.state.year}</h4>
                    <div>
                    <button className="scroll-left" onClick={() => this.scrollLeft(this.state.year)}>
                        <i className="material-icons">arrow_back</i>
                    </button>
                    <button className="scroll-right" onClick={() => this.scrollRight(this.state.year)}>
                        <i className="material-icons">arrow_forward</i>
                    </button>
                    </div>
                </div>
                <button className="close" onClick={() => this.props.close()}><i className="material-icons">close</i></button>
            </div>
            <div className="clear"></div>
            <div className="scroll-wrapper">
                <div className="row">
                    {images}
                </div>
            </div>
        </div>
    );
 }
}
 
export default PerYearLogos;