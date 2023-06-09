import Link from 'next/link';
import { IconContext } from "react-icons";
import { FaBars } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export function Header(props) {

    let backgroundStyle = styles.headerTransparentBackground;

    if (props?.isSolidBackground) {
        backgroundStyle = styles.headerSolidBackground;
    }

    return (
        <div className={`${styles.header} ${backgroundStyle}`}>
            <IconContext.Provider value={{size: 24 }}>
                <FaBars className={`${styles.interactive} ${styles.hideLargeScreen} ${styles.burgerButton}`} onClick={() => props.showSideBar()}></FaBars>
            </IconContext.Provider>
            <h2 className={styles.hideSmallScreen}><Link href="/live"><a>Events</a></Link></h2>
            <h2 className={styles.hideSmallScreen}><Link href="/#connect"><a>Connect</a></Link></h2>
            <h1><Link href="/"><a>Alan Acosta</a></Link></h1>
            <h2 className={styles.hideSmallScreen}><Link href="/bio"><a>Bio</a></Link></h2>
            <h2 className={styles.hideSmallScreen}><Link href="/media"><a>Media</a></Link></h2>
        </div >
    )
}