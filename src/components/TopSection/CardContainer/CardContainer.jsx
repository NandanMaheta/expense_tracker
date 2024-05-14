import styles from "../../Common.module.css";
import Card from "./Card";
import ModalExp from "../../Modal/ModalExp";
import { useState } from "react";
import ModalAdd from "../../Modal/ModalAdd";
import { useEffect } from "react";

export default function CardContainer() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [expense,setExpense] = useState(0);
  const [balance,setBalace] = useState(5000);

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpense(JSON.parse(storedExpenses));
    }
  }, []);

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };


  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  const getTotalExpense = () => {
    return expense.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className={styles.CardContainer}>
      <div>
        <Card
          text={"Wallet Balance: "}
          value={balance}
          button={"+Add Income"}
          buttonColor="#B5DC52"
          onClick={handleOpenModal2}
        />
      </div>
      <div>
        <Card
          text={"Expenses: "}
          value={getTotalExpense()}
          button={"+Add Expense"}
          buttonColor="#FF9595"
          onClick={handleOpenModal1}
        />
      </div>
      <ModalAdd isOpen={isModalOpen2} onClose={handleCloseModal2} />
      <ModalExp isOpen={isModalOpen1} onClose={handleCloseModal1} />
    </div>
  );
}
