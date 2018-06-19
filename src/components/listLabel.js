import React, { Component } from 'react'
import '../style/listlabel.css'

class ListLabel extends Component {
    render(){
        return(
            <div className="col s3">
                <div className="btn cursor-default turquoise-background white-text list-label valign-middle left-align turquoise-hover" onClick={this.props.onFold}>
                    <div className="list-label-tex">
                        <div className="bold font-18">{this.props.category} </div>
                        <div className="weight-200 no-uppercase">{this.props.subcategory}</div>
                        <div className="no-uppercase list-company-count">{this.props.length} {this.props.length > 1 ? 'companies' : 'company'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListLabel