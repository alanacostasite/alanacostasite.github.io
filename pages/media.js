import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";
import { useState } from 'react';
import { SideBar } from '../components/sidebar.js'
import styles from '../styles/Home.module.css';
const photos = require('../editable_files/photos.json');

export default function Media() {
    let [isSideBarShown, setSideBarShown] = useState(false);

    let renderedPhotos = photos.map((photo, i) => renderPhoto(photo, i));
    return (
        <PageBody>
            <Header isSolidBackground={true} showSideBar={() => setSideBarShown(true)} />
            <div className={styles.contentContainer}>
                <h1>Press Photos</h1>
                <div className={styles.photosContainer}>
                    {renderedPhotos}
                </div>
            </div>
            <SideBar show={isSideBarShown} hideSideBar={() => setSideBarShown(false)}></SideBar>
        </PageBody>
    );
}

function renderPhoto(photo, key) {
    return (
        <div className={styles.photo} key={key}>
            <img
                alt={photo.alt}
                src={`./press/${photo.thumbnail}`}
                className={styles.thumbnail}
                style={{ float: "right" }}
            />
            <a className={styles.button} href={`./press/${photo.download}`} style={{ marginTop: 20 }} download>Download</a>
        </div>)
}