import React from 'react';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import './CreditLimitCard.css';

export default class CreditLimitCard extends React.Component {

    constructor() {
        super();

        this.state = {
            creditLimit: [],
            loading: false,
            error: null
        }
    }

    fetchCreditLimitData() {
        fetch(`${API_URL}/creditLimit`)
            .then(responseHandle)
            .then((data) => {
                this.setState({
                    creditLimit: data,
                    loading: false,
                    error: null
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderCreditLimit() {
        const { creditLimit } = this.state;

        const mappedCreditLimit = creditLimit.map((items) => 
        <Card>
            <h3>Credit Limit</h3>
            <div className="credit-limit-container">
                <div className="granted-container">
                        <span className="total-granted">R$ {items.granted.totalGrantedValue}</span>
                        <span className="granted-text">Granted</span>
                </div>
                <div className="avaliabe-container">
                        <span className="total-avaliabe">R$ {items.avaliable.totalAvaliableValue}</span>
                        <span className="avaliable-text">Avaliable</span>
                </div>
            </div>
        </Card>
        )

        return mappedCreditLimit
    }

    componentDidMount() {
        this.fetchCreditLimitData();
    }

    render() {
        const { error, loading } = this.state;

        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return (
            <div className="credit-limit-card">
                {this.renderCreditLimit()}
            </div>
        )
    }


}