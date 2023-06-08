import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function SideBar(props) {

    return (
        <div className={`${styles.text} ${styles.overlay}`} style={{ width: props.show ? "100%" : 0 }} onClick={() => props.hideSideBar()}>
            <div className={styles.overlayContent}>
                <h2 className={styles.interactive}><Link href="/"><a>Home</a></Link></h2>
                <h2 className={styles.interactive}><Link href="/live"><a>Events</a></Link></h2>
                <h2 className={styles.interactive}><Link href="/#connect"><a>Connect</a></Link></h2>
                <h2 className={styles.interactive}><Link href="/bio"><a>Bio</a></Link></h2>
                <h2 className={styles.interactive}><Link href="/media"><a>Media</a></Link></h2>
            </div>
        </div>
    );
}