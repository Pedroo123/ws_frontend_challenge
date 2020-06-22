import React from 'react';
import Card from '../Card/Card';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers'; 
import Loading from '../Loading/Loading';
import './OpportunityCard.css';

export default class OpportunityCard extends React.Component {

    constructor() {
        super();

        this.state = {
            opportunities: [],
            error: null,
            loading: false
        }
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

    renderOpportunities = () => {
        const { opportunities } = this.state;

        const mappedOpportunities = opportunities.map((items) => 
        <Card>
            <h3>Opportunities (12)</h3>
            <div className="opportunities-container">
                <div key={items.won.id} className="Opportunities-won">
                    <div className="square-won">
                        <span className="Opportunities-won-total">{items.won.totalWonOpportunities}</span>
                    </div>
                    <span className="Opportunities-won-value">R$: {items.won.totalValue}</span>
                </div>
                
                <div key={items.lost.id} className="Opportunities-lost">
                    <div className="square-lost">
                        <span className="Opportunities-lost-total">{items.lost.totalLostOpportunities}</span>
                    </div>
                    <span className="Opportunities-lost-value">R$: {items.lost.totalLostValue}</span>
                </div>

                <div key={items.open.id} className="Opportunities-open">
                    <div className="square-open">
                        <span key={items.open.id} className="Opportunities-open-total">{items.open.totalOpenOpportunities}</span>
                    </div>
                    <span className="Opportunities-open-value">R$: {items.open.totalOpenValue}</span>
                </div>

                <div key={items.canceled.id} className="Opportunities-canceled">
                    <div className="square-canceled">
                        <span key={items.canceled.id} className="Opportunities-canceled-total">{items.canceled.totalCanceledOpportunities}</span>
                    </div>
                    <span className="opportunities-canceled-value">R$: {items.canceled.totalCanceledValue}</span>
                </div>
            </div>
        </Card>
        );

        return mappedOpportunities;
    }

    componentDidMount() {
        this.fetchOpportunityData();
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
            <div className="Opportunity-card">
                {this.renderOpportunities()}
            </div>
        )
    }

}