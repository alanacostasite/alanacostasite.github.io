import { Header } from '../components/header.js'
import { PageBody } from '../components/pageBody'
import styles from '../styles/Home.module.css'
import { SideBar } from '../components/sidebar.js'
import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaTwitter } from 'react-icons/fa'
const connect = require('../editable_files/connect.json');

export default function Home() {
  let [isSideBarShown, setSideBarShown] = useState(false);
  return (
    <PageBody backgroundColor="#121212">
      <div className={styles.backdropBlack}>
        <div className={styles.row}>
          <img
            alt="Alan Shredding the Saxaphone"
            src="./_DSC0162.jpg"
            className={styles.backgroundImage}
          />
        </div>
        <div className={`${styles.section} ${styles.main}`}>
          <Header showSideBar={() => setSideBarShown(true)} />
        </div>
      </div>
      <div id="connect" className={`${styles.section} ${styles.backdropDark}`}>
        <h2 className={styles.text}>Connect with Alan on</h2>
        <div className={styles.row} style={{ gap: "1em" }}>
          <IconContext.Provider value={{ size: 32 }}>
            {connect.socialMediaLinks.instagramOptional ? (
              <a href={connect.socialMediaLinks.instagramOptional}>
                <FaInstagram></FaInstagram>
              </a>) : null}
            {connect.socialMediaLinks.twitterOptional ? (
              <a href={connect.socialMediaLinks.twitterOptional}>
                <FaTwitter></FaTwitter>
              </a>) : null}
            {connect.socialMediaLinks.facebookOptional ? (
              <a href={connect.socialMediaLinks.facebookOptional}>
                <FaFacebook></FaFacebook>
              </a>) : null}
            {connect.socialMediaLinks.soundCloudOptional ? (
              <a href={connect.socialMediaLinks.soundCloudOptional}>
                <FaSoundcloud></FaSoundcloud>
              </a>) : null}
            {connect.socialMediaLinks.spotifyOptional ? (
              <a href={connect.socialMediaLinks.spotifyOptional}>
                <FaSpotify></FaSpotify>
              </a>) : null}
          </IconContext.Provider>
        </div>
        <h2 className={styles.text}>Send business inquiries to: <a href={`mailto:${connect.email}`}>{connect.email}</a></h2>
      </div>
      <SideBar show={isSideBarShown} hideSideBar={() => setSideBarShown(false)}></SideBar>
    </PageBody>
  )
}



