import styles from '../styles/Home.module.css'
import { Metadata } from "./metadata";

export function PageBody(props) {
    return (
        <div className={styles.text}>
            <Metadata/>
            {props.children}
        </div>
    );
}