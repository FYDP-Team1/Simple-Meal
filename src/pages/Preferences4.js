import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Preferences4.module.css";
import "../global1.css";
import { useNavigate } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import React, { useState, useCallback, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider"; // Import
import axios from "axios";

const Preferences2 = () => {
  let navigate = useNavigate();

  const [budget, setBudget] = useState(120); // Initial budget value
  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  const onSubmitClick = useCallback(async () => {
    try {
      const userId = localStorage.getItem("user_id");
      if (userId == null) {
        navigate("/log-in");
      }

      navigate("/home");
      const dietaryRestrictions = localStorage.getItem("dietary");
      const cuisines = localStorage.getItem("cuisines");
      const mealsPerDay = localStorage.getItem("size");
      const servingsPerMeal = localStorage.getItem("freq");
      const maxCookingMinutes = localStorage.getItem("preptime");
      const weeklyBudget = localStorage.getItem("budget");

      await axios.post("/api/savePreferences", {
        userId,
        dietaryRestrictions,
        cuisines,
        mealsPerDay,
        servingsPerMeal,
        maxCookingMinutes,
        weeklyBudget,
      });

    } catch (error) {
      console.error("Error saving preferences:", error);
      // Handle error, e.g., show an error message to the user
    }
  }, [navigate]);

  return (
    <div className={styles.preferences10}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <TopBanner />
      <main className={styles.preferences10Inner}>
        <section className={styles.frameSection}>
          <div className={styles.forUsToLearnAboutYouParent}>
            <h2 className={styles.forUsTo}>For us to learn about you</h2>
            <div className={styles.pleaseProvideYour}>
              Please provide your meal preferences for us to create a customized
              meal plan and enable the account for you.
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.dotParent}>
              <div className={styles.budgetParent}>
                <div className={styles.budget}>
                  <div className={styles.budgetInner}>
                    <div className={styles.frameParent1}>
                      <div className={styles.parent}>
                        <div className={styles.div}>1</div>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <img
                        className={styles.lineIcon}
                        loading="eager"
                        alt=""
                        src="/line-212.svg"
                      />
                      <div className={styles.group}>
                        <div className={styles.div1}>2</div>
                        <div className={styles.frameChild2} />
                      </div>
                      <div className={styles.lineDiv} />
                      <div className={styles.container}>
                        <div className={styles.div2}>3</div>
                        <div className={styles.frameChild3} />
                      </div>
                      <div className={styles.frameChild4} />
                      <div className={styles.groupDiv}>
                        <div className={styles.div3}>4</div>
                        <div className={styles.frameChild5} />
                      </div>
                      <div className={styles.frameChild6} />
                      <div className={styles.parent1}>
                        <div className={styles.div4}>5</div>
                        <div className={styles.frameChild7} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.cuisineWrapper}>
                        <div className={styles.cuisine}>Cuisine</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.dietaryWrapper}>
                        <div className={styles.dietary}>Dietary</div>
                      </div>
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.sizeFrequencyWrapper}>
                        <div className={styles.sizeFrequencyContainer}>
                          <span>
                            <p className={styles.size}>{`Size &`}</p>
                            <p className={styles.frequency}>Frequency</p>
                          </span>
                        </div>
                      </div>
                      <div className={styles.timeComplexityWrapper}>
                        <div
                          className={styles.timeComplexity}
                        >{`Time & Complexity`}</div>
                      </div>
                    </div>
                    <div className={styles.budgetWrapper}>
                      <div className={styles.budget1}>Budget</div>
                    </div>
                  </div>
                </div>
                <div className={styles.whatIsYour}>
                  What is your weekly budget for groceries? 
                </div>
                <div className={styles.whatIsYour}>${budget}</div>

                <div className={styles.slider}>
                  <div className={styles.sliderContainer}>
                    <RangeSlider
                      min={10}
                      max={500}
                      tooltip={"auto"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.loginPreviousSubmit}>
                <button
                  onClick={() => navigate("/preferences-3")}
                  className={styles.loginButton}
                >
                  <div className={styles.previous}>Previous</div>
                </button>
                <button className={styles.loginButton1} onClick={onSubmitClick}>
                  <div className={styles.submit}>Submit</div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Preferences2;
