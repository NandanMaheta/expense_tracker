import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const customStyles = {
  overlay: {
    backgroundColor: "#FFFFFFC4",
  },
  content: {
    width: "90%", // Default width for smaller screens
    maxWidth: "538px", // Maximum width for larger screens
    height: "auto", // Allow height to adjust based on content
    borderRadius: "15px",
    backgroundColor: "#EFEFEFD9",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    border: "none",
    boxShadow: "0px 4px 4px 0px #00000040",
    padding: "20px", // Added padding for better spacing
  },
  HeadingText: {
    width: "100%",
    maxWidth: "180px", // Maximum width for larger screens
    fontFamily: "Ubuntu",
    fontSize: "5vw", // Font size responsive to viewport width
    fontWeight: "700",
    textAlign: "left",
    color: "#000000",
  },
  InputContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%", // Full width for container
    gap: "10px", // Add gap between inputs
  },
  input: {
    width: "100%",
    maxWidth: "223px", // Maximum width for larger screens
    height: "51px",
    borderRadius: "15px",
    background: "linear-gradient(0deg, #D9D9D9, #D9D9D9)",
    boxShadow: "0px 4px 4px 0px #00000040",
    border: "0px",
  },
  AddButton: {
    width: "45%", // Responsive width for smaller screens
    height: "51px",
    border: "0px",
    borderRadius: "15px",
    backgroundColor: "#F4BB4A",
    boxShadow: "0px 4px 4px 0px #00000040",
    fontFamily: "Open Sans",
    fontSize: "4vw", // Font size responsive to viewport width
    fontWeight: "700",
    color: "#FFFFFF",
    marginRight: "10px",
  },
  CancelButton: {
    width: "45%", // Responsive width for smaller screens
    height: "51px",
    borderRadius: "15px",
    border: "0px",
    background: "linear-gradient(0deg, #D9D9D9, #D9D9D9)",
    boxShadow: "0px 4px 4px 0px #00000040",
    fontFamily: "Open Sans",
    fontSize: "4vw", // Font size responsive to viewport width
    fontWeight: "400",
    color: "#000000",
    marginLeft: "10px",
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
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
      }
    }, 500);

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
        </form>
      </Modal>
    </SnackbarProvider>
  );
};
