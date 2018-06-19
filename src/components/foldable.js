import React, { Component } from 'react'
import '../style/foldable.css'

class Foldable extends Component {
    render(){
        return(
            <div className="category-foldable">
                <button className="btn foldable-text turquoise-background turquoise-hover turquoise-focus" onClick={this.props.onFold}>
                    <span className="bold valign-middle">{this.props.category}&nbsp;</span>
                    <span className="black-text weight-200 valign-middle"> {this.props.subcategory}</span>
                    <i className="material-icons valign-middle no-margin">&nbsp;{ this.props.folded ? 'expand_more' : 'expand_less' }</i>
                </button>
                <span className="foldable-company-count">{this.props.length} {this.props.length > 1 ? 'companies' : 'company'}</span>
            </div>
        )
    }
}

export default Foldable