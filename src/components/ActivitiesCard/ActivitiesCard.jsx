import React from 'react';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

export default class ActivitiesCard extends React.Component {

    constructor() {
        super();

        this.state = {
            activities: [],
            error: null,
            loading: false
        }
    }

    fetchActivitiesData() {
        fetch(`${API_URL}/activities`)
            .then(responseHandle)
            .then((data) => {
                this.setState({
                    activities: data,
                    error: null,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderActivitiesCard = () => {
        const { activities } = this.state;

        const mappedActivities = activities.map((items) => 
            <Card>
                <h3>Atividades</h3>
                <div className="search-container">
                    <Search />                   
                </div>
                <div>
                    Total: {items.total.totalActivities}
                </div>
                <div className="Activities-late">
                    Late: {items.late.totalLateActivities}
                </div>
                <div className="Activities-in-progress">
                    In Progress: {items.inProgress.totalActivitiesInProgress}
                </div>
                <div className="Activities-waiting">
                    Waiting: {items.waiting.totalWaitingActivities}
                </div>
                <div className="Activities-completed">
                    Completed: {items.completed.totalCompletedActivities}
                </div>
            </Card>
        );

        return mappedActivities;
    }

    componentDidMount() {
        this.fetchActivitiesData();
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
            <div className="Activities-Card">
                <div className="activities-container">
                    {this.renderActivitiesCard()}
                </div>
            </div>
        )
    }

}