import styles from "./Common.module.css"
import {Heading} from "./Heading/Heading";
import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";
function Home(){
    return(
        <div className={styles.Home}>
            <Heading text={"Expense Tracker"}/>
            <TopSection/>
            <BottomSection/>
        </div>
    )
}

export default Home;