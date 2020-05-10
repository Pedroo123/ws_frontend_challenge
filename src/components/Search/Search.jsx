import React from 'react';
import './Search.css'

class Search extends React.Component {

    constructor() {
        super();

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return(
            <div className="Search">
                <input className="Search-Input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type a customer name"/>
            </div>
        )
    }

}

export default Search;