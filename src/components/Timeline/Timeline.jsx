import React from 'react';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';
import People from '@material-ui/icons/People';
import './Timeline.css';    

const Timeline = () => {

    return (
        <>
            <div className="timeline-header-1">
                <div className="timeline-circle-1">
                    <span className="timeline-text-1">Completed</span>
                </div>
                <div className="timeline-ruler-1" />

                <div className="timeline-content-1">
                    <span className="call-icon"><Phone /></span>
                    <span className="activitie-completed-1">Meeting Call</span>
                    <span className="activitie-completed-2">Pedro Brancalhao</span>
                </div>
            </div>
    
            <div className="timeline-header-2">
                <div className="timeline-circle-2">
                    <span className="timeline-text-2">Canceled</span>
                </div>
                <div className="timeline-ruler-2" />

                <div className="timeline-content-2">
                    <span className="mail-icon"><Mail /></span>
                    <span className="activitie-canceled-1">Sending Email</span>
                    <span className="activitie-canceled-2">Pedro Brancalhao</span>
                </div>
            </div>

            <div className="timeline-header-3">
                <div className="timeline-circle-3">
                    <span className="timeline-text-3">Waiting</span>
                </div>

                <div className="timeline-content-2">
                    <span className="meeting-icon"><People /></span>
                    <span className="activitie-waiting-1">Meeting</span>
                    <span className="activitie-waiting-2">Pedro Brancalhao</span>
                    
                    <span className="call-icon-2"><Phone /></span>
                    <span className="activitie-waiting-3">Call</span>
                    <span className="activitie-waiting-4">Pedro Brancalhao</span>
                </div>
            </div>
        </>
    )
}

export default Timeline;