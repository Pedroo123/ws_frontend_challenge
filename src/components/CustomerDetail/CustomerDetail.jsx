import React from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import OpportunityCard from '../OpportunityCard/OpportunityCard';
import FinancialTitlesCard from '../FinancialTitlesCard/FinancialTitlesCard';
import ChartsCard from '../ChartsCard/ChartsCard';
import Loading from '../Loading/Loading';
import './CustomerDetail.css';

class CustomerDetail extends React.Component {
    
    constructor() {
        super();

        this.state = {
            loading: false,
            error: null
        }
    }

    render() {
        const { loading, error} = this.state;

        if (loading) {
            return <div><Loading /></div>
        }

        if (error) {
            return <div>{error}</div>
        }

        return (
            <>
                <div className="Right-card-container">
                    <CustomerCard />
                    <OpportunityCard />
                    <FinancialTitlesCard />
                    <ChartsCard />
                </div>        
            </>
        )
    }

}

export default CustomerDetail;