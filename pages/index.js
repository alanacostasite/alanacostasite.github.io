import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/header.js'

export default function Home() {
  return (
    <div>
      <div className={styles.backdropLight}>
        <Head>
          <title>Alan Acosta</title>
          <meta name="description" content="Alan Acosta - jazz saxophonist - jazz flute - live. connect. about. media. discography. contact." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.row}>
          <img
            alt="Alan Shredding the Saxaphone"
            src="./IMG_1444_small.jpg"
            className={styles.backgroundImage}
          />
          <img
            alt="Alan Shredding the Saxaphone"
            src="./IMG_1582.jpg"
            className={styles.backgroundImage}
          />
          <img
            alt="Alan Shredding the Saxaphone"
            src="./IMG_1641_small.jpg"
            className={styles.backgroundImage}
          />
        </div>
        <main className={styles.main}>
          <Header />
        </main>
      </div>
      <div className={styles.backdropDark}>
        footer
      </div>
    </div>
  )
}



