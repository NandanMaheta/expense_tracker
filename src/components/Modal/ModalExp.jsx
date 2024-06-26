import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const customStyles = {
  overlay: {
    backgroundColor: "#FFFFFFC4",
  },
  content: {
    width: "75%",
    height: "65%",
    borderRadius: "15px",
    backgroundColor: "#EFEFEFD9",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    border: "none",
    boxShadow: "0px 4px 4px 0px #00000040",
  },
  HeadingText: {
    width: "180px",
    height: "34px",
    font: "Ubuntu",
    fontFamily: "Ubuntu",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "34.47px",
    textAlign: "left",
    color: "#000000",
  },
  InputContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    height: "178px",
  },
  input: {
    width: "100%",
    height: "51px",
    borderRadius: "15px",
    background:
      "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #FBFBFB, #FBFBFB)",
    boxShadow: "0px 4px 4px 0px #00000040",
    border: "0px",
    margin:"5px"
  },
  AddButton: {
    width: "100%",
    height: "51px",
    border: "0px",
    borderRadius: "15px",
    backgroundColor: "#F4BB4A",
    boxShadow: "0px 4px 4px 0px #00000040",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "21.79px",
    color: "#FFFFFF",
    marginRight: "10px",
  },
  CancelButton: {
    width: "100%",
    height: "51px",
    borderRadius: "15px",
    border: "0px",
    background:
      "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #E3E3E3, #E3E3E3)",
    boxShadow: "0px 4px 4px 0px #00000040",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21.79px",
    color: "#000000",
    marginLeft: "10px",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  mainCont:{
    alignItems:"center",  }
};

export const ModalExp = ({ isOpen, onClose, calculateTotalExpenses, balance, updateBalance }) => {
  const [currentExpense, setCurrentExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let arr = JSON.parse(localStorage.getItem("expenses"));
    if (expenses.length > 0) {
      if (arr && arr.length > 0) {
        localStorage.setItem("expenses", JSON.stringify([...arr, ...expenses]));
        setExpenses([]);
      } else {
        localStorage.setItem("expenses", JSON.stringify([...expenses]));
        setExpenses([]);
      }
      calculateTotalExpenses();
    }}, 500);

    return () => clearInterval(intervalId);
  }, [expenses]);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(currentExpense).length !== 0) {
      const expenseAmount = parseFloat(currentExpense.price);
      if (expenseAmount > balance) {
        enqueueSnackbar("Expense exceeds the available balance!");
        return;
      }

      setExpenses((prevExpenses) => [...prevExpenses, currentExpense]);
      updateBalance(balance - expenseAmount); // Subtract expense from balance
      setCurrentExpense({});
    }
    onClose();
  };

  return (
    <SnackbarProvider>
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <p style={customStyles.HeadingText}>Add Expense</p>
      <div style={customStyles.mainCont}>
        
      <form onSubmit={handleSubmit}>
        <div style={customStyles.InputContainer}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            style={customStyles.input}
            value={currentExpense.title || ""}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            style={customStyles.input}
            value={currentExpense.price || ""}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            style={customStyles.input}
            value={currentExpense.category || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <input
            type="date"
            name="date"
            style={customStyles.input}
            value={currentExpense.date || ""}
            onChange={handleChange}
            required
          />
        </div>
<br /><br />
        <div style={customStyles.ButtonContainer}>
          <button type="submit" style={customStyles.AddButton}>
            Add Expense
          </button>

          <button
            type="button"
            style={customStyles.CancelButton}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form></div>
    </Modal>
    </SnackbarProvider>
  );
};


