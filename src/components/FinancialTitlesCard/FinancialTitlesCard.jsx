import React from 'react';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import './FinancialTitlesCard.css';

export default class FinancialTitlesCard extends React.Component {

    constructor() {
        super();

        this.state = {
            titulos: [],
            error: null,
            loading: false
        }
    }

    fetchFinantialTitlesData() {
        fetch(`${API_URL}/financialTitles`)
            .then(responseHandle)
            .then((data) => {
                this.setState({
                    titulos: data,
                    error: null,
                    loading: false
                })
            });
    }

    renderTitulos = () => {
        const { titulos } = this.state;

        const mappedtTitulos = titulos.map((items) =>
            <Card>
                <h3>Financial Titles</h3>
                <div className="financial-titles-container">
                    <div className="Vencidos">
                        <div className="square-vencidos">
                            <span className="Financial-titles-vencidos-total">{items.vencidos.totalVencidos}</span>
                        </div>
                        <span className="Financial-titles-vencidos-value">R$: {items.vencidos.totalVencidosValue}</span>
                        <span className="financial-titles-vencidos-text">Expired</span>
                    </div>

                    <div className="Para-vencer">
                        <div className="square-para-vencer">
                            <span className="Financial-titles-para-vencer-total">{items.paraVencer.totalParaVencer}</span>
                        </div>
                        <span className="Financial-titles-para-vencer-value">R$: {items.paraVencer.totalParaVencerValue}</span>
                        <span className="financial-titles-para-vencer-text">To expire</span>
                    </div>

                    <div className="Pagos">
                        <div className="square-pagos">
                            <span className="Financial-titles-pagos-total">{items.pagos.totalPagos}</span>
                        </div>
                        <span className="Financial-titles-pagos-value">R$: {items.pagos.totalPagosValue}</span>
                        <span className="financial-titles-pagos-text">Paid</span>
                    </div>
                </div>
            </Card>
        );

        return mappedtTitulos
    }

    componentDidMount() {
        this.fetchFinantialTitlesData();
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
            <div className="Financial-titles-card">
                {this.renderTitulos()}
            </div>
        )
    }

}