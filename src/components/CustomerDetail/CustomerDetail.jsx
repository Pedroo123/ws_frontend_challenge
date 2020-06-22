import React from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import OpportunityCard from '../OpportunityCard/OpportunityCard';
import FinancialTitlesCard from '../FinancialTitlesCard/FinancialTitlesCard';
import ChartsCard from '../ChartsCard/ChartsCard';
import Loading from '../Loading/Loading';
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard';
import GoogleMap from '../MapsCard/MapsCard';
import CreditLimitCard from '../CreditLimitCard/CreditLimitCard';
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
                <div className="wrapper">
                    <div className="left-card-container">
                        <CustomerCard />
                        <ChartsCard />
                        <OpportunityCard />
                        <GoogleMap />
                        <FinancialTitlesCard />
                        <CreditLimitCard />
                    </div>

                    <div className="right-card-container">
                        <ActivitiesCard />
                    </div>
                </div>
            </>
        )
    }

}

export default CustomerDetail;