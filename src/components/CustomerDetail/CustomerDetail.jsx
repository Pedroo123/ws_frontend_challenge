import React from 'react';
import { responseHandle } from '../Helpers/helpers';
import { API_URL } from '../../config';
import Loading from '../Loading/Loading';
import './CustomerDetail.css';
import Avatar from '../Avatar/Avatar';

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

    /**
     * Este hook so seria executado em caso do update do componente, como por exemplo, 
     * um search que redireciona à pagina de detalhes, ou, uma alteração de dado por parte da API
     * Como estou utilizando dados estaticos, este metodo sempre retorna false
     * Deixei aqui apenas como exemplo de como eu faria.
     */

    // shouldComponentUpdate(nextProps) {
    //     if (this.props.location.pathname !== nextProps.location.pathname) {
    //         const newCustomerId = nextProps.match.params.id;

    //         this.fetchCustomer(newCustomerId);
    //     }
    //     return false;
    // }

    fetchCustomer(customerId) {
        fetch(`${API_URL}/customers/${customerId}`)
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
            <div className="Customer-details">
                <Avatar />
                {/*Info Header*/}
                <h1 className="Customer-name">
                    {customer.name}
                </h1>

                <div className="Sub-information-container">
                    <div className="Customer-sub-item">
                        Age: <span className="Customer-age">{customer.age}</span>
                    </div>

                    <div className="Customer-sub-item">
                        Initial Value: <span className="Customer-initial-value">{customer.initialValue}</span>
                    </div>

                    <div className="Customer-sub-item">
                        Final Value: <span className="Customer-final-value">{customer.finalValue}</span>
                    </div>
                </div>
            </div>
        )
    }

}

export default CustomerDetail;