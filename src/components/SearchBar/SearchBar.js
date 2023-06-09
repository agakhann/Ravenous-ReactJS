import React from "react";
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: '', location: '', sortBy: 'best_match'};
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        
       // this.getSortByClass = this.getSortByClass.bind(this)
    }

    

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionsValue = this.sortByOptions[sortByOption]
            return <li onClick={this.handleSortByChange.bind(this,sortByOptionsValue)} key = {sortByOptionsValue} className= {this.getSortByClass(sortByOptionsValue)} > {sortByOption} </li>
        })
        
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active'
        }
        else{
            return ''
        }
    }
 
    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        },() => {
            this.handleSearch()
        })
        console.log(this.state.sortBy);
        //this.props.searchYelp(this.state.term, this.state.location,this.state.sortBy)
    }
    
    handleLocationChange(event){
        event.preventDefault()
        this.setState({ location: event.target.value })
    }

    handleTermChange(event){
        event.preventDefault()
        this.setState({ term: event.target.value })
    }   

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location,this.state.sortBy)
    }

    handleKeyPress(event){
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
        //Do stuff in here
        this.handleSearch()
        } 
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                 <ul onChange={this.handleSortByChange}>
                   {this.renderSortByOptions()}
                 </ul>
            </div>
                <div className="SearchBar-fields">
                  <input onChange={this.handleTermChange} placeholder="Search Businesses" onKeyPress={this.handleKeyPress.bind(this)} />
                  <input onChange={this.handleLocationChange} placeholder="Where?" onKeyPress={this.handleKeyPress} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
    
        )
    }
    

    
}

export default SearchBar;