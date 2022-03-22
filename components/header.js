import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function Header() {
    return <div className={styles.header}>
        <h2><Link href="/live"><a>Live</a></Link></h2>
        <h2>Connect</h2>
        <h1>Alan Acosta</h1>
        <h2>Bio</h2>
        <h2>Media</h2>
    </div>
    
}