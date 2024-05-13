import BottomLeft from "./BottomLeft/BottomLeft";
import styles from "../Common.module.css"

export default function BottomSection (){
    return(
        <div className={styles.BottomSection}>
        <BottomLeft/>
        </div>
    )
}