import { Header } from '../components/header.js'
import { PageBody } from '../components/pageBody'
import styles from '../styles/Home.module.css'
import { SideBar } from '../components/sidebar.js'
import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Home() {
  let [isSideBarShown, setSideBarShown] = useState(false);
  return (
    <PageBody>
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
        <div className={styles.row} style={{gap: "1em", height: "100%"}}>
          <IconContext.Provider value={{ size: 32 }}>
            <a href={"http://www.instagram.com/alanacosta_22/"}>
              <FaInstagram></FaInstagram>
            </a>
            <a href={"http://www.instagram.com/alanacosta_22/"}>
              <FaTwitter></FaTwitter>
            </a>
            <a href={"http://www.instagram.com/alanacosta_22/"}>
              <FaFacebook></FaFacebook>
            </a>
          </IconContext.Provider>
        </div>
        <h2 className={styles.text}>Send business inquiries to: <a href='mailto:alanemail@gmail.com'>alanemail@gmail.com</a></h2>
      </div>
      <SideBar show={isSideBarShown} hideSideBar={() => setSideBarShown(false)}></SideBar>
    </PageBody>
  )
}



