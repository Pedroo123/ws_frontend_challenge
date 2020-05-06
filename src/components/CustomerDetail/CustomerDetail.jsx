import React from 'react';
import { responseHandle } from '../Helpers/helpers';
import Avatar from '../Avatar/Avatar';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';

class CustomerDetail extends React.Component {
    
    constructor() {
        super();

        this.state = {
            loading: false,
            error: null,
            customer: {}
        }
    }

    componentDidMount() {

        const customerId = this.props.match.params.id;

        this.fetchCustomer(customerId);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.location.pathName !== nextProps.location.pathName) {
            const newCustomerId = nextProps.match.params.id;

            this.fetchCustomer(newCustomerId);
        }
    }

    fetchCustomer(customerId) {
        fetch(`http://localhost:4000/customers/${customerId}`)
            .then(responseHandle)
            .then((customer) => {
                this.setState({
                    loading: false,
                    error: null,
                    customer,
                })
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error
                })
            })
    }

    render() {

        const { loading, error, customer } = this.state;

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <div>{error}</div>
        }

        return (
            <div className="details-container">
                <Card>
                    <Avatar />
                    <p>{customer.name}</p>
                    <p>{customer.age}</p>
                    <p>{customer.initialValue}</p>
                    <p>{customer.finalValue}</p>
                </Card>
            </div>
        )
    }

}

export default CustomerDetail;