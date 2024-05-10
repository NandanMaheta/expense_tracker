import styles from "../Common.module.css"
import CardContainer from "./CardContainer/CardContainer"
import PieContainer from "./Pie/PieContainer"

export default function TopSection(){
    return(
        <div className={styles.SectionTop}>
            <CardContainer/>
            <PieContainer />
        </div>
    )

}