import React from 'react';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import Avatar from '../Avatar/Avatar';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';
import Person from '@material-ui/icons/Person';
import './CustomerCard.css';

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

    renderCustomer = () => {
        const { customer } = this.state;

        return <Card>
                <h3>General Info</h3>
                <Avatar />
                <div className="Customer-name">
                    <span className="Name"><Person /> - {customer.name}</span>
                </div>
                <div className="Customer-initialValue-container">
                    <span className="Customer-initialValue">Initial Value: {customer.initialValue}</span>
                </div>
                <div className="Customer-finalValue-container">
                    <span className="Customer-finalValue">Final Value: {customer.finalValue}</span>
                </div>
                <div className="Customer-phone-container">
                    <span className="Customer-phone"><Phone /> - {customer.phone}</span>
                </div>
                <div className="Customer-email-container">
                    <span className="Customer-email"><Mail /> - {customer.email}</span>
                </div>
            </Card>
    }

            
    componentDidMount() {
        this.fetchCustomerData();
    }

    render() {
        const { error, loading } = this.state;
        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return(
            <div className="Customer-Card">
                {this.renderCustomer()}
            </div>
        )
    }

}