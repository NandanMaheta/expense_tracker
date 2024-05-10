import styles from "./Common.module.css"
import Heading from "./Heading/Heading";
import TopSection from "./TopSection/TopSection";
function Home(){
    return(
        <div>
            <Heading text={"Expense Tracker"}/>
            <TopSection/>
        </div>
    )
}

export default Home;