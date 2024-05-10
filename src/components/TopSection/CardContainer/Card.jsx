import { FaRupeeSign } from "react-icons/fa";
import styles from "../../Common.module.css"

export default function Card({ text, value, button,buttonColor }) {
  return (
    <div className={styles.Card}>
      <div>
        <span className={styles.CardText}>{text}</span>

        <span className={styles.CardTextValue}>
          <FaRupeeSign />
          {value}
        </span>
      </div>
      <button className={styles.CardButton} style={{ backgroundColor: buttonColor }}>{button}</button>
    </div>
  );
}
