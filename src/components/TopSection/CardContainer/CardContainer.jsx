import styles from "../../Common.module.css";
import Card from "./Card";
import {ModalExp} from "../../Modal/ModalExp";
import ModalAdd from "../../Modal/ModalAdd";
import { useState, useEffect } from "react";

export function CardContainer() {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [balance, setBalance] = useState(5000); // Initialize balance state
  const [totalExp, setTotalExp] = useState(0);
  
 
  useEffect(() => {
    const intervalId = setInterval(() => {
      showBalance();
    calculateTotalExpenses();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
    
 

  const showBalance = () => {
    // Fetch balance from localStorage when the component mounts or when balance changes
    const storedBalance = localStorage.getItem("balance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance)); // Update balance state
    }
  };

  const calculateTotalExpenses = () => {
    const data = localStorage.getItem("expenses");
    let price = [];
    if (data) {
      
      const expenses = JSON.parse(data); // Parse the JSON string into an array
      price = expenses.map((item) => Number(item.price));
    }
    const res = price.reduce((total, n) => n + total, 0);
    setTotalExp(res);
  };

  const handleUpdateBalance = (newBalance) => {
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance); // Update balance in localStorage
  };

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
    calculateTotalExpenses(); // Recalculate expenses when modal closes
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
    showBalance(); // Update balance when modal closes
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
          value={totalExp}
          button={"+Add Expense"}
          buttonColor="#FF9595"
          onClick={handleOpenModal1}
        />
      </div>
      <ModalAdd className={styles.ModalAdd}isOpen={isModalOpen2} onClose={handleCloseModal2} updateBalance={handleUpdateBalance} />
      <ModalExp
        isOpen={isModalOpen1}
        onClose={handleCloseModal1}
        calculateTotalExpenses={calculateTotalExpenses}
        balance={balance}
        updateBalance={handleUpdateBalance}
      />
    </div>
  );
}
