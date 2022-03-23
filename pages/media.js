import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";
import styles from '../styles/Home.module.css';
const photos = require('../media/photos.json');

export default function Media() {
    let renderedPhotos = photos.map((photo, i) => renderPhoto(photo, i));
    return (
        <PageBody>
            <Header isSolidBackground={true} />
            <div className={styles.contentContainer}>
                <h1>Press Photos</h1>
                <div className={styles.photosContainer}>
                    {renderedPhotos}
                </div>
            </div>
        </PageBody>
    );
}

function renderPhoto(photo, key) {
    return (
        <div className={styles.photo} key={key}>
            <img
                alt={photo.alt}
                src={`./${photo.thumbnail}`}
                className={styles.thumbnail}
                style={{ float: "right" }}
            />
            <a className={styles.button} href={`./press/${photo.download}`} style={{marginTop: 20}} download>Download</a>
        </div>)
}