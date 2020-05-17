import React from 'react';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';

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

    render() {

        const { titulos, error, loading } = this.state;

        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return(
            <div className="Financial-titles-card">
                {/* <Card>
                    <div className="Vencidos">
                        <span className="Financial-titles-vencidos">{titulos.vencidos[0].value}</span>
                        <span className="Financial-titles-vencidos">{titulos.vencidos[1].value}</span>
                        <span className="Financial-titles-vencidos">{titulos.vencidos[2].value}</span>
                    </div>

                    <div className="Para-vencer">
                        <span className="Financial-titles-para-vencer">{titulos.aVencer.value}</span>
                    </div>

                    <div className="Pagos">
                        <span className="Financial-titles-vencidos">{titulos.pagos[0].value}</span>
                        <span className="Financial-titles-vencidos">{titulos.pagos[1].value}</span>
                    </div>
                </Card> */}
                teste
            </div>
        )
    }

}