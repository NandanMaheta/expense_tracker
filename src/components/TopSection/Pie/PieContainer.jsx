import PieComponent from "./PieChart";
import styles from "../../Common.module.css";

export default function PieContainer() {
  return (
    <div className={styles.PieContainer}>
      <PieComponent />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px", // Adjust margin top as needed
        }}
      >
        <div className={styles.PieBelow}>
        <div style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
          <div style={{ width: "26px", height: "8px", backgroundColor: "#A000FF", marginRight: "5px" }}></div>
          <span style={{font:"Open Sans",fontFamily:"Open Sans",fontSize:"12px",fontWeight:"400",height:"16.34px",textAlign:"left",color:"#FFFFFF"}}>Food</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
          <div style={{ width: "26px", height: "8px", backgroundColor: "#FF9304", marginRight: "5px" }}></div>
          <span style={{font:"Open Sans",fontFamily:"Open Sans",fontSize:"12px",fontWeight:"400",height:"16.34px",textAlign:"left",color:"#FFFFFF"}}>Entertainment</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "26px", height: "8px", backgroundColor: "#FDE006", marginRight: "5px" }}></div>
          <span style={{font:"Open Sans",fontFamily:"Open Sans",fontSize:"12px",fontWeight:"400",height:"16.34px",textAlign:"left",color:"#FFFFFF"}}>Travel</span>
        </div>
      </div>
      </div>
    </div>
  );
}

