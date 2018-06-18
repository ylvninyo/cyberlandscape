import React, { Component } from 'react'
import '../style/modal.css'

class Modal extends Component {
    render(){
        let item = this.props.item
        return(
            <div id={this.props.id} className="modal company-modal outline-0 modal-with-x" ref={el => (this.instance = el)}>
                <div className="modal-closing-btn modal-close cursor-pointer"><i className="material-icons modal-icon">close</i></div>
                <div className="modal-content center modal-content-with-x">
                    <img src={item.logo} className="modal-logo" alt="logo"></img>
                    <br />
                    <hr />
                    <br/>
                    <div className="bolder modal-h">{item.name}</div>
                    <div className="turquoise-text modal-category">{item.category}{item.subcategory ? (' | '+item.subcategory) : ''}</div>
                    <div className="font-14 pre-wrap">{item.description}</div>
                    <br />
                    { item.headquarters && <div className="font-13 bold">Headquarters: {item.headquarters}</div> }
                    { item.funding && <div className="font-13 bold">Funding: ${item.funding}</div> }
                    <br />
                    <hr />
                    <br />
                    <div>
                        { item.homepage &&
                            <a href={item.homepage} target="_blank">
                                <div className="modal-links inline-block turquoise-background white-text"><i className="material-icons modal-icon">language</i></div>
                            </a>
                        }
                        { item.crunchbase &&
                            <a href={item.crunchbase} target="_blank">
                                <div className="modal-links inline-block cb-in-icon turquoise-background white-text">cb</div>
                            </a>
                        }
                        { item.linkedin &&
                            <a href={item.linkedin} target="_blank">
                                <div className="modal-links inline-block bold cb-in-icon turquoise-background white-text">in</div>
                            </a>
                        }
                        { item.twitter &&
                            <a href={item.twitter} target="_blank">
                                <div className="modal-links inline-block turquoise-background white-text">
                                    <img src="/twitter_outline.png" className="twitter-icon" alt="logo"></img>
                                </div>
                            </a>
                        }
                    </div>
                    <br />
                    { item.twitter && <div className="twtr-wrapper"><a className="twtr" href={item.twitter}>Tweets Feed</a></div> }
                </div>
            </div>
        )
    }
}
export default Modal