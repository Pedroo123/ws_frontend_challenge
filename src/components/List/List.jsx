import React from 'react';
import { responseHandle } from '../Helpers/helpers';

export default class List extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            error: null,
            customers: []
        }
    }

    componentDidMount() {
        this.fetchApiData();
    }

    fetchApiData() {
        fetch('http://localhost:3000')
            .then(responseHandle)
            .then((data) => {

                const { customers } = data

                this.setState({ loading: false, customers })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        const { customers, loading, error } = this.state;

        if (error) {
            return <div className="error-container">{error}</div>
        }

        if (loading) {
            return <div className="loading-container">componente de loading</div>
        }

        <ul>
            {customers.map(customer => {
                <li key={customer.id}>
                    <li>{customer.name}</li>
                    <li>{customer.age}</li>
                </li>
            })}
        </ul>
    }

}