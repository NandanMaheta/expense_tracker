import styles from "../../Common.module.css";
import Card from "./Card";
import ModalExp from "../../Modal/ModalExp";
import { useState } from "react";
import ModalAdd from "../../Modal/ModalAdd";
import { useEffect } from "react";

export default function CardContainer() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
 

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

  return (
    <div className={styles.CardContainer}>
      <div>
        <Card
          text={"Wallet Balance: "}
          value={5000}
          button={"+Add Income"}
          buttonColor="#B5DC52"
          onClick={handleOpenModal2}
        />
      </div>
      <div>
        <Card
          text={"Expenses: "}
          value={0}
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
