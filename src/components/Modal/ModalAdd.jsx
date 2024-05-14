import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const ModalAdd = ({ isOpen, onClose }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#FFFFFFC4",
    },
    content: {
      width: "538px",
      height: "165px",
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
      width: "178px",
      height: "34px",
      font: "Ubuntu",
      fontFamily: "Ubuntu",
      fontSize: "30px",
      fontWeight: "700",
      lineHeight: "34.47px",
      textAlign: "left",
      color: "#000000",
    },
    FormContainer: {
      width: "510px",
      height: "54px",
      border: "0px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-between",
    //   alignItems: "center",
      
    },
    input: {
      width: "217px",
      height: "51px",
      borderRadius: "15px",
      background:
        "linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #D9D9D9, #D9D9D9), linear-gradient(0deg, #FBFBFB, #FBFBFB)",
      boxShadow: "0px 4px 4px 0px #00000040",
      border: "0px",
      color: "#919191",
      font: "Open Sans",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "21.78px",
      marginRight:"10px"
    },
    CancelButton: {
      width: "112px",
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
      marginLeft:"10px"
    },
    AddButton: {
        width: "145px",
    height: "51px",
    border: "0px",
    borderRadius: "15px",
    backgroundColor:"#F4BB4A",
      
    boxShadow: "0px 4px 4px 0px #00000040",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "21.79px",
    
    color: "#FFFFFF",
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
        <form action="submit">
          <input
          style={customStyles.input}
            type="number"
            placeholder="Income Amount"
            value={currentAdd}
            onChange={(e) => handleChange(e)}
          />
          <button
            style={customStyles.AddButton}
            onClick={(e) => handleSubmit(e)}
          >
            Add Balance
          </button>
          <button onClick={onClose} style={customStyles.CancelButton}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalAdd;
