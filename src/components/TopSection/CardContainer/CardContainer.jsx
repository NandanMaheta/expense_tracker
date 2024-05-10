import styles from "../../Common.module.css";
import Card from "./Card";

export default function CardContainer() {
  return (
    <div className={styles.CardContainer}>
      <div><Card text={"Wallet Balance: "} value={5000} button={"+Add Income"} buttonColor="#B5DC52" /></div>
      <div><Card text={"Expenses: "} value={500} button={"+Add Expense"} buttonColor="#FF9595" /></div>
    </div>
  );
}
