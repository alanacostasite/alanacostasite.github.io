import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../components/header.js'
import { PageBody } from '../components/pageBody'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageBody>
      <div className={styles.backdropLight}>
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
        <div className={`${styles.section} ${styles.main}`}>
          <Header />
        </div>
      </div>
      <div id="connect" className={`${styles.section} ${styles.backdropDark}`}>
        <h2 className={styles.text}>Connect with Alan on</h2>
        <div className={styles.row}>
          <a href={"http://www.instagram.com/alanacosta_22/"}>
            <FontAwesomeIcon icon={faInstagram} size="sm" />
          </a>
          <a href={"http://www.instagram.com/alanacosta_22/"}>
            <FontAwesomeIcon icon={faTwitter} size="sm" />
          </a>
          <a href={"http://www.instagram.com/alanacosta_22/"}>
            <FontAwesomeIcon icon={faFacebook} size="sm" style={{ fontSize: 10 }} />
          </a>
        </div>
        <h2 className={styles.text}>Send bussiness inquiries to: <a href='mailto:alanemail@gmail.com'>alanemail@gmail.com</a></h2>
      </div>
    </PageBody>
  )
}



