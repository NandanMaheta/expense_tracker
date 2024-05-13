import styles from "../../Common.module.css";
import TranscationCard from "./Card";

export default function BottomLeft() {
  return (
    <div className={styles.BottomLeft}>

      <div className={styles.BottomHeadingContainer}>
        <p className={styles.BottomHeading}>Recent Transactions</p>
      </div>

      <TranscationCard />
    </div>
  );
}
