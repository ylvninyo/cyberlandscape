import React, { Component } from 'react'
import '../style/foldable.css'

class Foldable extends Component {
    render(){
        return(
            <div className="category-foldable">
                <button className="btn foldable-text turquoise-background turquoise-hover turquoise-focus" onClick={this.props.onFold}>
                    <span className="bold">{this.props.category} </span>&nbsp;
                    <span className="black-text weight-200">{this.props.subcategory}</span>
                    <i className="material-icons valign-top no-margin">{ this.props.folded ? 'expand_more' : 'expand_less' }</i>
                </button>
                <span className="foldable-company-count">{this.props.length} {this.props.length > 1 ? 'companies' : 'company'}</span>
            </div>
        )
    }
}

export default Foldable