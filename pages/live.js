import { useState } from 'react';
import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";
import { SideBar } from '../components/sidebar.js';
import styles from '../styles/Home.module.css';
const events = require('../editable_files/events.json');

export default function Live() {
    let [isSideBarShown, setSideBarShown] = useState(false);
    let [viewUpcoming, setViewUpcoming] = useState(true);

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

    let viewType = viewUpcoming ? "Upcoming" : "Past";
    let inverseViewType = viewUpcoming ? "Past" : "Upcoming";
    let viewedEvents = viewUpcoming ? upcomingEvents : pastEvents;

    let noEvents = viewedEvents.length === 0;

    return (
        <PageBody>
            <Header isSolidBackground={true} showSideBar={() => setSideBarShown(true)} />
            <div className={styles.backdropLight}>
                <div className={styles.contentContainer}>
                    <div className={`${styles.row} ${styles.alignCenter} ${styles.spread}`}>
                        <h2>{`${viewType} Events`}</h2>
                        <button className={`${styles.button} ${styles.text}`} onClick={() => setViewUpcoming((prevState) => !prevState)}>{`${inverseViewType} Dates`}</button>
                    </div>
                    <div className={styles.eventContainer}>
                        {viewedEvents}
                        {noEvents ? <div>
                            <i>{`No ${viewType} Events to Display`}</i>
                        </div> : null}
                    </div>
                </div>
            </div>
            <SideBar show={isSideBarShown} hideSideBar={() => setSideBarShown(false)}></SideBar>
        </PageBody>
    );
}

function renderEvent(event, key) {
    let eventDate = getEventDate(event);
    let header = event.eventLinkOptional ? (<h3><a className={styles.interactive} href={event.eventLinkOptional}>{event.name}</a></h3>) : (<h3>{event.name}</h3>);
    let address = event.venueLinkOptional ? (<p><a className={styles.interactive} href={event.venueLinkOptional}>{`Address: ${event.location}`}</a></p>) : (<p>{`Address: ${event.location}`}</p>);
    return (
        <div className={styles.eventRow} key={key}>
            {header}
            <p>{`${getDateString(eventDate)} @ ${getTimeString(eventDate)}`}</p>
            {address}
            <p>{event.description}</p>
            <div className={styles.row} style={{gap: 8, paddingTop: 8}}>
                {event.eventLinkOptional ? <a href={event.eventLinkOptional}><button className={`${styles.button} ${styles.text}`}>Event</button></a> : null}
                {event.venueLinkOptional ? <a href={event.venueLinkOptional}><button className={`${styles.button} ${styles.text}`}>Address</button></a> : null}
            </div>
        </div>
    )
}

function getEventDate(event) {
    // Month and hours are zero indexed adjust for that here
    return new Date(event.year, event.month - 1, event.day, event.hour, event.minute);
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