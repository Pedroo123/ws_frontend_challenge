import React from 'react';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import Avatar from '../Avatar/Avatar';

export default class CustomerCard extends React.Component {

    constructor() {
        super();

        this.state = {
            customer: {},
            error: null,
            loading: false
        }
    }

    fetchCustomerData() {
        fetch(`${API_URL}/customer`)
            .then(responseHandle)
            .then((data) => {
                this.setState({
                    customer: data,
                    error: null,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    
    componentDidMount() {
        this.fetchCustomerData();
    }

    render() {
        const { customer, error, loading } = this.state;
        console.log('render', customer)
        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return(
            <div className="Customer-Card">
                <Card>
                    <Avatar />
                    <h2 className="Customer-name">
                        {customer.name}
                    </h2>
                    <div className="Customer-initialValue-container">
                        <span className="Customer-initialValue">{customer.initialValue}</span>
                    </div>
                    <div className="Customer-finalValue-container">
                        <span className="Customer-finalValue">{customer.finalValue}</span>
                    </div>
                    <div className="Customer-phone-container">
                        <span className="Customer-phone">{customer.phone}</span>
                    </div>
                    <div className="Customer-email-container">
                        <span className="Customer-email">{customer.email}</span>
                    </div>
                </Card>
            </div>
        )
    }

}