import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alan Acosta</title>
        <meta name="description" content="Curt's bar menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alan's site is currenlty under construction. Check back soon! :D
        </h1>

      </main>
    </div>
  ) 
}



