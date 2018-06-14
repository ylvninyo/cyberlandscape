import React, { Component } from 'react'
import Tile from './tile'
import List from './list'
import ListLabel from './listLabel'
import Foldable from './foldable'
import '../style/category.css'

class CategoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { folded: false }
    }

    toggleFold = () => { this.setState({ folded: !this.state.folded }) }

    render(){
        let folded = this.state.folded
        let items = this.props.items
        let isTile = this.props.isTile

        return(
            <div className="background-dark-grey">
                <div className="container center">
                    <div className="category-group inline-block left-align">
                    { !isTile  &&
                        <div className="row">
                            <ListLabel category={items[0].category} subcategory={items[0].subcategory} length={items.length}/>
                            <div className="col s9">
                                {items.map((item) => <List key={(item.category + item.subcategory + item.name)} item={item} />)}
                            </div>
                        </div>
                    }
                    { isTile &&
                        <div>
                            <Foldable category={items[0].category} subcategory={items[0].subcategory} length={items.length} folded={folded} onFold={this.toggleFold.bind(this)}/>
                            <div>
                                { !folded && items.map((item) =>
                                    <Tile key={(item.category + item.subcategory + item.name)} item={item} /> )
                                }
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoryComponent