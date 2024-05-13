
import styles from "../../Common.module.css";

export default function BarChartComponent(){
    return(
        <div className={styles.BarChartContainer}>
            <div className={styles.BarChartData}>
                <div className={styles.ChartHeading}>Entertainment</div>
                <div className={styles.Bar1}></div>
            </div>
            <div className={styles.BarChartData}>
                <div className={styles.ChartHeading}>Food</div>
                <div className={styles.Bar2}></div>
            </div>
            <div className={styles.BarChartData}>
                <div className={styles.ChartHeading}>Travel</div>
                <div className={styles.Bar3}></div>
            </div>
        </div>
    )
}
