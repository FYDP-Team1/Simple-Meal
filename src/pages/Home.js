import {  useEffect, useState } from "react";
import BudgetDetails from "../components/BudgetDetails";
import NavBar from "../components/NavBar";
import MealSchedule from "../components/MealSchedule";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState(null);
  const URL = process.env.REACT_APP_API_URL;


  const populateSchedule = async (e) => {
    const userId = localStorage.getItem("user_id");
    if (userId === null){
      navigate('/');
      return;
    }
    try {
      const res = await axios.post(`${URL}/api/createWeeklySchedule`, { userId });
      setSchedule(res.data);
      if(!res.data.weeklySchedule?.Fri?.length){
        navigate('/preferences');
      }
    } catch (error) {
      if (error.response.status === 500) {
        navigate('/');
        return;
      }
    }
  };

  useEffect(()=>{
    const userId = localStorage.getItem('user_id');
    if (userId === null){
      navigate('/');
      return;
    }
  });

  useEffect(()=>{
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
            <MealSchedule weeklySchedule={schedule} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
