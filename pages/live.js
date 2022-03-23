import React from "react";
import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";
import styles from '../styles/Home.module.css'
const events = require('../media/events.json');

export default class Live extends React.Component {

    constructor(props) {
        super();
        this.state = {
            viewUpcoming: true
        };
    }
    render() {
        let pastEvents = [];
        let upcomingEvents = [];
        let now = Date.now();
        events.forEach((event, i) => {
            let renderedEvent = renderEvent(event, i);
            if (now > getEventDate(event)) {
                pastEvents.push(renderedEvent);
            } else {
                upcomingEvents.push(renderedEvent);
            }
        });

        pastEvents = pastEvents.sort((a, b) => {
            return getEventDate(a) < getEventDate(b);
        });

        upcomingEvents = upcomingEvents.sort((a, b) => {
            return getEventDate(a) > getEventDate(b);
        });

        let viewType = this.state.viewUpcoming ? "Upcoming" : "Past";
        let inverseViewType = this.state.viewUpcoming ? "Past" : "Upcoming";
        let viewedEvents = this.state.viewUpcoming ? upcomingEvents : pastEvents;
        return (
            <PageBody>
                <Header isSolidBackground={true} />
                <div className={styles.backdropLight}>
                    <div className={styles.contentContainer}>
                        <div className={`${styles.row} ${styles.alignCenter} ${styles.spread}`}>
                            <h2>{`${viewType} Concerts & Events`}</h2>
                            <button className={`${styles.button} ${styles.text}`} onClick={() => this.setState((prevState) => ({
                                viewUpcoming: !prevState.viewUpcoming
                            }))}>{`${inverseViewType} Dates`}</button>
                        </div>
                        <div className={styles.eventContainer}>
                            {viewedEvents}
                        </div>
                    </div>
                </div>
            </PageBody>
        );
    }
}

function renderEvent(event, key) {
    let eventDate = getEventDate(event);
    return (
        <div className={styles.eventRow} key={key}>
            <h3>{event.name}</h3>
            <p>{`${getDateString(eventDate)} @ ${getTimeString(eventDate)}`}</p>
            <p>{`Address: ${event.location}`}</p>
            <p>{event.description}</p>
        </div>
    )
}

function getEventDate(event) {
    // Month and hours are zero indexed adjust for that here
    return new Date(event.year, event.month - 1, event.day, event.hour + 1, event.minute);
}

function getTimeString(date) {
    if (date.getHours() > 12) {
        return `${date.getHours() - 12}:${pad(date.getMinutes(), 2)}pm`
    } else {
        return `${date.getHours()}:${pad(date.getMinutes(), 2)}am`
    }
}

function getDateString(date) {
    let month = undefined;
    let weekDay = undefined;
    switch (date.getMonth()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    switch (date.getDay()) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }
    return `${weekDay} ${month}, ${date.getDate()} ${date.getFullYear()}`
}

function pad(number, digits) {
    return String("000000000000" + number.toString()).slice(-digits);
}