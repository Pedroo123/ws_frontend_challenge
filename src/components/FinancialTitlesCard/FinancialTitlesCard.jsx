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

    componentDidMount() {
        this.fetchFinantialTitlesData();
    }

    render() {
        const { titulos, error, loading } = this.state;
        
        const mappedtTitulos = titulos.map((items) =>
            <Card>
                <div className="Vencidos">
                        <span className="Financial-titles-vencidos-total">{items.vencidos.totalVencidos}</span>
                        <span className="Financial-titles-vencidos-value">{items.vencidos.totalVencidosValue}</span>
                    </div>

                    <div className="Para-vencer">
                        <span className="Financial-titles-para-vencer-total">{items.paraVencer.totalParaVencer}</span>
                        <span className="Financial-titles-para-vencer-value">{items.paraVencer.totalParaVencerValue}</span>
                    </div>

                    <div className="Pagos">
                        <span className="Financial-titles-pagos-total">{items.pagos.totalPagos}</span>
                        <span className="Financial-titles-pagos-value">{items.pagos.totalPagosValue}</span>
                    </div>
            </Card>
        );

        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return(
            <div className="Financial-titles-card">
                {mappedtTitulos}
            </div>
        )
    }

}