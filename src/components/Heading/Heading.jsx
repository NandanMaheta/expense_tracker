import styles from "../Common.module.css";

export default function Heading({ text }) {
  return (
    <div className={styles.HeadingContainer}>
      <p className={styles.Heading}>{text}</p>
    </div>
  );
}
