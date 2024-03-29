import styles from '../styles/Home.module.css'
import { Metadata } from "./metadata";

export function PageBody(props) {
    return (
        <div className={styles.text}>
            <Metadata/>
            <div style={{position: "absolute", height: "100%", width: "100%", backgroundColor: props.backgroundColor, zIndex: -10}}>

            </div>
            {props.children}
        </div>
    );
}