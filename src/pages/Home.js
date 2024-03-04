import {  useEffect, useState } from "react";
import BudgetDetails from "../components/BudgetDetails";
//import TopBanner from "../components/TopBanner";
import NavBar from "../components/NavBar";
import CreateGroceryList from "../components/CreateGroceryList";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  var URL = "";
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState(null);
  const DEBUG_URL = process.env.REACT_APP_DEBUG_URL;
  const PROD_URL = process.env.REACT_APP_PROD_URL;
  const IS_DEBUG = process.env.REACT_APP_IS_DEBUG;

  const populateSchedule = async (e) => {
    const userId = localStorage.getItem("user_id");
    
    const res = await axios.post(`${URL}/api/createWeeklySchedule`, { userId });
    setSchedule(res.data);
  };

  useEffect(()=>{
    const userId = localStorage.getItem('user_id');
    if (userId === null){
      navigate('./');
    }
    if (IS_DEBUG === 'TRUE'){
      URL = DEBUG_URL;
    }
    else{
      URL = PROD_URL;
    }
    
    populateSchedule();
  },[]);

  return (
    <div className={styles.home}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <NavBar />

      <main className={styles.mealSelectionQuartet}>
        <section className={styles.rectanglePair}>
          <div className={styles.shapeSwapQuintet}>
            <h1 className={styles.myWeeklyMeal}>My Weekly Meal Planner</h1>
          </div>
          <div className={styles.dishFrameSeptet}>
            <div className={styles.menuItemsFrame}>
              <div className={styles.sundayFrame}>
                <div className={styles.mondayFrame}>
                  <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
                  <div
                    className={styles.yourBudgetDetails}
                  >{`Your Budget Details -> `}</div>
                </div>
                <BudgetDetails />
              </div>
            </div>
            <CreateGroceryList weeklySchedule={schedule} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
