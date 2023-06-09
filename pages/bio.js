import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { SideBar } from '../components/sidebar.js'
const bio = require('../editable_files/bio.json');

export default function Bio() {
    let [isSideBarShown, setSideBarShown] = useState(false);

    return (
        <PageBody>
            <Header isSolidBackground={true} showSideBar={() => setSideBarShown(true)} />
            <div className={styles.contentContainer}>
                <h1>{bio.header}</h1>
                <img
                    alt={bio.photo.alt}
                    src={bio.photo.path}
                    className={`${styles.foregroundImage} ${styles.hideLargeScreen}`}
                />
                <div className={styles.aboutTextContainer}>
                    <img
                        alt={bio.photo.alt}
                        src={bio.photo.path}
                        className={`${styles.foregroundImage} ${styles.hideSmallScreen}`}
                        style={{ float: "right" }}
                    />
                    {bio.body.map((paragraph) => <p>{paragraph}</p>)}
                </div>
            </div>
            <SideBar show={isSideBarShown} hideSideBar={() => setSideBarShown(false)}></SideBar>
        </PageBody>
    );
}