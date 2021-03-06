import { Header } from "../components/header";
import { PageBody } from "../components/pageBody";
import styles from '../styles/Home.module.css';

export default function Bio() {
    return (
        <PageBody>
            <Header isSolidBackground={true} />
            <div className={styles.contentContainer}>
                <h1>About Alan</h1>
                <div className={styles.aboutTextContainer}>
                    <img
                        alt="Alan Helping a Student with their instrument"
                        src="./FB_IMG_1590537248952.jpg"
                        className={styles.foregroundImage}
                        style={{ float: "right" }}
                    />
                    <p>
                        Alan shreds his saxaphone like a beast.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Cras pulvinar mattis nunc sed. Tellus integer feugiat scelerisque varius morbi enim. Suspendisse in est ante in nibh mauris cursus mattis molestie. Neque sodales ut etiam sit amet nisl purus in. Gravida quis blandit turpis cursus in. Tristique senectus et netus et malesuada fames. Et malesuada fames ac turpis egestas integer eget. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Suscipit adipiscing bibendum est ultricies integer quis auctor. Sed odio morbi quis commodo odio. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Dui vivamus arcu felis bibendum ut. Erat nam at lectus urna duis convallis. Et odio pellentesque diam volutpat commodo sed egestas. Lectus proin nibh nisl condimentum. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.
                    </p>
                    <p>
                        Arcu bibendum at varius vel pharetra. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Sed risus ultricies tristique nulla aliquet enim. Suspendisse interdum consectetur libero id. Molestie ac feugiat sed lectus vestibulum mattis. Elit eget gravida cum sociis natoque penatibus et magnis
                    </p>
                </div>
            </div>
        </PageBody>
    );
}