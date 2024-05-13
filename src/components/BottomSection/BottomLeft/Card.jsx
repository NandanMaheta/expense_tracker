import styles from "../../Common.module.css";
import { PiPizzaLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { CiRollingSuitcase } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function TranscationCard() {
  return (
    <div className={styles.TranscationCardContainer}>
      <div className={styles.TranscationCard}>
        <div className={styles.CardLeft}>
          <div className={styles.IconBackGround}>
            <PiPizzaLight
              style={{ width: "24px", height: "24px", alignItems: "center" }}
            />
          </div>

          <div className={styles.ItemList}>
            <span>Samosa</span>

            <span style={{color:"#9B9B9B",}}>March 20, 2024</span>
          </div>
        </div>

        <div className={styles.CardRight}>
          <div className={styles.ItemPrice}>
            <FaRupeeSign />
            <span>150</span>
          </div>

          <div className={styles.ListButtons}>
            <div>
              <button style={{width:"37px",height:"37px",border:"#FFFFFF",
borderRadius:"15px",backgroundColor:"#FF3E3E",boxShadow:"0px 4px 4px 0px #00000040",opacity:"0px",}}>
                <MdOutlineCancel />
              </button>
            </div>
            <div>
              <button style={{width:"37px",height:"37px",border:"#FFFFFF",
borderRadius:"15px",backgroundColor:"#F4BB4A",boxShadow:"0px 4px 4px 0px #00000040",opacity:"0px"}}>
                <CiEdit />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.HorizontalLine}></div>
    </div>
  );
}

{
  /* <PiGiftLight />
<CiRollingSuitcase /> */
}

