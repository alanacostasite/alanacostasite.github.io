import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Header(props) {

    let backgroundStyle = styles.headerTransparentBackground;

    if(props?.isSolidBackground) {
        backgroundStyle = styles.headerSolidBackground;
    }

    return (
        <div className={`${styles.header} ${backgroundStyle}`}>
            <h2><Link href="/live"><a>Events</a></Link></h2>
            <h2><Link href="/#connect"><a>Connect</a></Link></h2>
            <h1><Link href="/"><a>Alan Acosta</a></Link></h1>
            <h2><Link href="/bio"><a>Bio</a></Link></h2>
            <h2><Link href="/media"><a>Media</a></Link></h2>
        </div>
    )
}