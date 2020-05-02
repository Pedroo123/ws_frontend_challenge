import React from 'react';

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
            <div className="search-container">
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type a customer name"/>
            </div>
        )
    }

}

export default Search;