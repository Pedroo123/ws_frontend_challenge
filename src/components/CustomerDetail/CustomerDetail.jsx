import React from 'react';
import { responseHandle } from '../Helpers/helpers';

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

    componentDidUpdate(nextProps) {
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
                console.log(error)
            })
    }

    render() {
        return (
            <div className="details-container">

            </div>
        )
    }

}

export default CustomerDetail;