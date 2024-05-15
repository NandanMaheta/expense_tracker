import styles from "../../Common.module.css";
import { PiPizzaLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { CiRollingSuitcase } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 3;

export default function TranscationCard() {
  const [array, setArray] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const getData = () => {
    let cardData = localStorage.getItem("expenses");
    if (cardData) {
      setArray(JSON.parse(cardData));
    }
  };

  const handleDelete = (index) => {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
    localStorage.setItem("expenses", JSON.stringify(newArray));
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditedItem(array[index]);
  };

  const handleSave = () => {
    const newArray = array.map((item, index) =>
      index === isEditing ? editedItem : item
    );
    setArray(newArray);
    localStorage.setItem("expenses", JSON.stringify(newArray));
    setIsEditing(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(array.length / ITEMS_PER_PAGE)) setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = array.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className={styles.TranscationCardContainer}>
      {currentItems.map((item, index) => (
        <div key={startIndex + index} className={styles.TranscationCard}>
          <div className={styles.CardLeft}>
            <div className={styles.IconBackGround}>
              {item.category === "food" && (
                <PiPizzaLight
                  style={{ width: "24px", height: "24px", alignItems: "center" }}
                />
              )}
              {item.category === "entertainment" && (
                <PiGiftLight
                  style={{ width: "24px", height: "24px", alignItems: "center" }}
                />
              )}
              {item.category === "travel" && (
                <CiRollingSuitcase
                  style={{ width: "24px", height: "24px", alignItems: "center" }}
                />
              )}
            </div>
            <div className={styles.ItemList}>
              {isEditing === startIndex + index ? (
                <>
                  <input
                    type="text"
                    name="title"
                    value={editedItem.title}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="date"
                    value={editedItem.date}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <span>{item.title}</span>
                  <span style={{ color: "#9B9B9B" }}>{item.date}</span>
                </>
              )}
            </div>
          </div>
          <div className={styles.CardRight}>
            <div className={styles.ItemPrice}>
              <FaRupeeSign />
              {isEditing === startIndex + index ? (
                <input
                  type="text"
                  name="price"
                  value={editedItem.price}
                  onChange={handleChange}
                />
              ) : (
                <span>{item.price}</span>
              )}
            </div>
            <div className={styles.ListButtons}>
              {isEditing === startIndex + index ? (
                <button
                  style={{
                    width: "37px",
                    height: "37px",
                    border: "#FFFFFF",
                    borderRadius: "15px",
                    backgroundColor: "#4CAF50",
                    boxShadow: "0px 4px 4px 0px #00000040",
                    opacity: "1",
                  }}
                  onClick={handleSave}
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    style={{
                      width: "37px",
                      height: "37px",
                      border: "#FFFFFF",
                      borderRadius: "15px",
                      backgroundColor: "#FF3E3E",
                      boxShadow: "0px 4px 4px 0px #00000040",
                      opacity: "1",
                    }}
                    onClick={() => handleDelete(startIndex + index)}
                  >
                    <MdOutlineCancel />
                  </button>
                  <button
                    style={{
                      width: "37px",
                      height: "37px",
                      border: "#FFFFFF",
                      borderRadius: "15px",
                      backgroundColor: "#F4BB4A",
                      boxShadow: "0px 4px 4px 0px #00000040",
                      opacity: "1",
                    }}
                    onClick={() => handleEdit(startIndex + index)}
                  >
                    <CiEdit />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className={styles.Pagecent}>
        <div className={styles.PaginationContainer}>
        <button onClick={handlePrevPage} className={styles.paginationbuttons}disabled={currentPage === 1}>
          {"<"}
        </button>
        <div className={styles.PageNum}><span >{currentPage}</span></div>
        <button onClick={handleNextPage} className={styles.paginationbuttons} disabled={currentPage === Math.ceil(array.length / ITEMS_PER_PAGE)}>
          {">"}
        </button>
      </div></div>
      
    </div>
  );
}
