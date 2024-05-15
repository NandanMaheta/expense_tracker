import React, { useState } from "react";
import Modal from "react-modal";

const ModalAdd = ({ isOpen, onClose, updateBalance }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#FFFFFFC4",
    },
    content: {
      width: "90%", // Set width to 90% for smaller screens
      maxWidth: "538px", // Max width for larger screens
      height: "auto", // Auto height to fit content
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
      maxWidth: "178px", // Max width for larger screens
      fontFamily: "Ubuntu",
      fontSize: "5vw", // Font size responsive to viewport width
      fontWeight: "700",
      lineHeight: "1.2em", // Adjusted line height
      textAlign: "left",
      color: "#000000",
      marginBottom: "20px", // Margin bottom for spacing
    },
    FormContainer: {
      width: "100%",
      maxWidth: "510px", // Max width for larger screens
      display: "flex",
      flexDirection: "column", // Stack inputs vertically on smaller screens
      alignItems: "center",
    },
    input: {
      width: "100%",
      maxWidth: "217px", // Max width for larger screens
      height: "51px",
      borderRadius: "15px",
      background: "linear-gradient(0deg, #D9D9D9, #D9D9D9)",
      boxShadow: "0px 4px 4px 0px #00000040",
      border: "0px",
      color: "#919191",
      fontFamily: "Open Sans",
      fontSize: "4vw", // Font size responsive to viewport width
      fontWeight: "400",
      lineHeight: "1.2em", // Adjusted line height
      marginBottom: "10px", // Margin bottom for spacing
    },
    CancelButton: {
      width: "100%",
      maxWidth: "112px", // Max width for larger screens
      height: "51px",
      borderRadius: "15px",
      border: "0px",
      background: "linear-gradient(0deg, #D9D9D9, #D9D9D9)",
      boxShadow: "0px 4px 4px 0px #00000040",
      fontFamily: "Open Sans",
      fontSize: "4vw", // Font size responsive to viewport width
      fontWeight: "400",
      lineHeight: "1.2em", // Adjusted line height
      color: "#000000",
      marginLeft: "10px",
      marginTop: "10px", // Margin top for spacing
    },
    AddButton: {
      width: "100%",
      maxWidth: "145px", // Max width for larger screens
      height: "51px",
      border: "0px",
      borderRadius: "15px",
      backgroundColor: "#F4BB4A",
      boxShadow: "0px 4px 4px 0px #00000040",
      fontFamily: "Open Sans",
      fontSize: "4vw", // Font size responsive to viewport width
      fontWeight: "700",
      lineHeight: "1.2em", // Adjusted line height
      color: "#FFFFFF",
      marginTop: "10px", // Margin top for spacing
    },
  };

  const [currentAdd, setCurrentAdd] = useState("");
  const [total, setTotal] = useState(5000);

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentAdd(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAdd) {
      setTotal((prevTotal) => {
        const newTotal = Number(prevTotal) + Number(currentAdd);
        localStorage.setItem("balance", JSON.stringify(newTotal));
        updateBalance(newTotal); // Update balance in CardContainer
        onClose();
        return newTotal;
      });
    }
    setCurrentAdd("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <p style={customStyles.HeadingText}>Add Balance</p>
      <div style={customStyles.FormContainer}>
        <form onSubmit={handleSubmit}>
          <input
            style={customStyles.input}
            type="number"
            placeholder="Income Amount"
            value={currentAdd}
            onChange={handleChange}
          />
          <button type="submit" style={customStyles.AddButton}>
            Add Balance
          </button>
          <button type="button" onClick={onClose} style={customStyles.CancelButton}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAdd;
