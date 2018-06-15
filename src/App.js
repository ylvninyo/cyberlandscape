import React, { Component } from 'react'
import Navbar from './components/navbar'
import Category from './components/category'
import PageTop from './components/pageTop'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: window.companies,
            searchFilter: null,
            fundingFilter: new Set(),
            categoryFilter: new Set(),
            fundingOptions: ['0-50M', '50M-100M', '100M-200M', '200M+'],
            isTile: true
        }

        this.state.sortedCategories = Object.keys(this.generateCategories(this.state.data)).sort()
    }

    generateCategories(data) {
        return data.reduce((result, item) => {
            let key = item.category + (item.subcategory ? ' | '+item.subcategory : '')
            if(!result[key]) result[key] = []
            result[key].push(item)
            return result
        }, {})
    }

    applyFilters = (categories, funding, search) => {
        let categoryFilter = categories || this.state.categoryFilter
        categoryFilter = new Set(categoryFilter)
        let fundingFilter = funding || this.state.fundingFilter
        fundingFilter = new Set(fundingFilter)
        let searchFilter = search != null ? search : this.state.searchFilter

        let data = window.companies
        if(searchFilter)
            data = data.filter(item => item.name.toLowerCase().includes(searchFilter))
        if(categoryFilter.size)
            data = data.filter(item =>
                categoryFilter.has(item.category + (item.subcategory ? ' | '+item.subcategory : '')) ||
                    categoryFilter.has(item.category))
        if(fundingFilter.size) {
            data = data.filter(item => {
                let funding = item.funding ? (parseFloat(item.funding, 10) * (item.funding.includes('M') ?
                    1000 : item.funding.includes('B') ? 1000000 : 1)) : 0
                if(funding < 50000 && !fundingFilter.has('0-50M')) return false
                if(funding >= 50000 && funding < 100000 && !fundingFilter.has('50M-100M')) return false
                if(funding >= 100000 && funding < 200000 && !fundingFilter.has('100M-200M')) return false
                if(funding >= 200000 && !fundingFilter.has('200M+')) return false
                return true
            })
        }

        this.setState({ ...this.state, categoryFilter, fundingFilter, searchFilter, data })
    }

    handleCategoryFilter = (categories) => {
        this.applyFilters(categories)
    }

    handleFundingFilter = (funding) => {
        this.applyFilters(null, funding)
    }

    handleSearch = (e) => {
        this.applyFilters(null, null, e.target.value.toLowerCase())
    }

    onViewChange = () => {
        this.setState({...this.state, isTile: !this.state.isTile})
    }

    render() {
        let categories = this.generateCategories(this.state.data)
        let sortedKeys = Object.keys(categories).sort()

        return (
            <div className="App">
                <Navbar />
                <PageTop amount={this.state.data.length}
                    onSearch={this.handleSearch}
                    categoryFilter={!!this.state.categoryFilter.size}
                    categories={this.state.sortedCategories}
                    onCategoryFilter={this.handleCategoryFilter}
                    fundingFilter={!!this.state.fundingFilter.size}
                    funding={this.state.fundingOptions}
                    onFundingFilter={this.handleFundingFilter}
                    isTile={this.state.isTile}
                    onViewChange={this.onViewChange}/>
                <div className="companies-view background-dark-grey">
                { !!sortedKeys.length && sortedKeys.map((key) => <Category isTile={this.state.isTile} key={key} items={categories[key]} />) }
                { !sortedKeys.length && <div className="center white-text"><br />No Results</div> }
                </div>
            </div>
        );
    }
}

export default App;