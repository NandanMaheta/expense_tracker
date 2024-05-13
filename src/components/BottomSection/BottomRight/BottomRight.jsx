import styles from "../../Common.module.css";
import BarChartComponent from "./BarChartComponent.jsx";


export default function BottomLeft() {
  return (
    <div className={styles.BottomRight}>

      <div className={styles.BottomHeadingContainer}>
        <p className={styles.BottomHeading}>Top Expenses</p>
      </div>

      <BarChartComponent />
    </div>
  );
}
