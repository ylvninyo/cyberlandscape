import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip';
import '../style/tooltip.css'


class Tooltip extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return(
            <>
                <span
                    className="cybermap-tooltip_custom"
                    data-tip={this.props.text}
                    data-for={this.props.randomID}
                >
                <i className="material-icons valign-middle no-margin">
                    {this.props.icon}
                </i>
                </span>
                <ReactTooltip type={'light'} id={this.props.randomID} />
            </>
        )
    }
}

export default Tooltip