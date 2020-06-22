import React from 'react';
import { API_URL } from '../../config';
import { responseHandle } from '../Helpers/helpers';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import Timeline from '../Timeline/Timeline';
import './ActivitiesCard.css';

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
            <Card width="500px" height="760px">
                <h3>Activities</h3>
                <div className="search-container">
                    <Search />                   
                </div>
                <div className="activities-container">
                    <div className="activities-total">
                        <div className="square-total">
                            <span className="activities-total-number">{items.total.totalActivities}</span>
                        </div>
                        <span className="activities-total-text">Total</span>
                    </div>
                    <div className="activities-late">
                        <div className="square-late">
                            <span className="activities-late-number">{items.late.totalLateActivities}</span>
                        </div>
                        <span className="activities-late-text">Late</span>
                    </div>
                    <div className="activities-in-progress">
                        <div className="square-in-progress">
                            <span className="activities-in-progress-number">{items.inProgress.totalActivitiesInProgress}</span>
                        </div>
                        <span className="activities-in-progress-text">In Progress</span>
                    </div>
                    <div className="activities-waiting">
                        <div className="square-waiting">
                            <span className="activities-waiting-number">{items.waiting.totalWaitingActivities}</span>
                        </div>
                        <span className="activities-waiting-text">Waiting</span>
                    </div>
                    <div className="activities-completed">
                        <div className="square-completed">
                            <span className="activities-completed-number">{items.completed.totalCompletedActivities}</span>
                        </div>
                        <span className="activities-completed-text">Completed</span>
                    </div>
                </div>
                <div className="timeline-container">
                        <Timeline />
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