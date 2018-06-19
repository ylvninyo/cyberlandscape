import React, { Component } from 'react'
const M = window.M

class Dropdown extends Component {
    componentDidMount(){
        M.FormSelect.init(this.instance.querySelectorAll('select'))
        this.instance.getElementsByTagName('input')[0].size = this.props.title.length + 2
        this.instance.getElementsByTagName('input')[0].onclick = (e) => {
            e.target.value = this.props.title || ''
        }
    }

    componentDidUpdate() {
        this.instance.getElementsByTagName('input')[0].style.color = this.props.colored ? '#00BEC1' : 'white'
    }

    onChange = (e) => {
        this.instance.getElementsByTagName('input')[0].value = this.props.title || ''
        this.props.onChange(M.FormSelect.getInstance(e.target).getSelectedValues())
    }

    render(){
        return(
            <span ref={el => (this.instance = el)}>
                <select multiple onChange={this.onChange}>
                    <option value="" disabled selected>{this.props.title}</option>
                    { this.props.options.map((key) => <option key={key} value={key}>{key}</option>) }
                </select>
            </span>
        )
    }
}

export default Dropdown