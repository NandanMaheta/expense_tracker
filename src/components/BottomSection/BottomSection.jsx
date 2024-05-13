import BottomLeft from "./BottomLeft/BottomLeft";
import styles from "../Common.module.css"
import BottomRight from "./BottomRight/BottomRight"
export default function BottomSection (){
    return(
        <div className={styles.BottomSection}>
        <BottomLeft/>
        <BottomRight/>
        </div>
    )
}