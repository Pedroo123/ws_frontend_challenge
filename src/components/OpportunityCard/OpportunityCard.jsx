import React from 'react';
import Card from '../Card/Card';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers'; 
import Loading from '../Loading/Loading';

export default class OpportunityCard extends React.Component {

    constructor() {
        super();

        this.state = {
            opportunities: [],
            error: null,
            loading: false
        }
    }

    componentDidMount() {
        this.fetchOpportunityData();
    }

    fetchOpportunityData() {
        fetch(`${API_URL}/opportunities`)
            .then(responseHandle)
            .then((data) => {
                this.setState({ 
                    opportunities: data,
                    error: null,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        const { opportunities, error, loading } = this.state;

        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return(
            <div className="Opportunity-card">
                <Card>
                    <span className="Opportunities-won">{opportunities.won.totalWonOpportunities}</span>
                    <span className="Opportunities-won-value">{opportunities.won.totalValue}</span>

                    <span className="Opportunities-lost">{opportunities.lost.totalLostOpportunities}</span>
                    <span className="Opportunities-lost-value">{opportunities.lost.totalLostValue}</span>

                    <span className="Opportunities-open">{opportunities.open.totalOpenOpportunities}</span>
                    <span className="Opportunities-open-value">{opportunities.open.totalOpenValue}</span>

                    <span className="Opportunities-canceled">{opportunities.canceled.totalCanceledOpportunities}</span>
                </Card>
            </div>
        )
    }

}