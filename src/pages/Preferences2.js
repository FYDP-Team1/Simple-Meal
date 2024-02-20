import { useCallback, useEffect, useState } from "react";
import TopBanner from "../components/TopBanner";
import SizeFrequency from "../components/SizeFrequency";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences2.module.css";
import "../global1.css";

const Preferences = () => {
  const navigate = useNavigate();
  const [mealsPerDayOptions, setMealsPerDayOptions] = useState({
    "1 meal": false,
    "2 meals": true,
    "3 meals": false,
    "4 meals": false,
  });

  const [servingsPerRecipeOptions, setServingsPerRecipeOptions] = useState({
    "1 person": false,
    "2 people": true,
    "3 people": false,
    "4 people": false,
    "5 people": false,
    "6 people": false,
    "7 people": false,
    "8 people": false,
  });

  useEffect(()=>{
    let selectedMeal = null;

    for (const key in mealsPerDayOptions) {
      if (mealsPerDayOptions[key] === true) {
        selectedMeal = key;
        break; // Stop the loop once a true value is found
      }
    }
    let splitSelectedMeal = selectedMeal.split(' ')[0];
    localStorage.setItem('size', splitSelectedMeal);
  },[mealsPerDayOptions]);

  useEffect(()=>{
    let selectedFreq = null;

    for (const key in servingsPerRecipeOptions) {
      if (servingsPerRecipeOptions[key] === true) {
        selectedFreq = key;
        break; // Stop the loop once a true value is found
      }
    }
    
    let splitselectedFreq = selectedFreq.split(' ')[0];
    localStorage.setItem('freq', splitselectedFreq);
  },[servingsPerRecipeOptions]);

  const onGroupButtonClick = useCallback(() => {  
    navigate("/preferences-3");
  }, [navigate]);

  const handleMealsPerDayChange = (option) => {
    setMealsPerDayOptions((prevOptions) => ({
      ...Object.keys(prevOptions).reduce((acc, key) => {
        acc[key] = key === option;
        return acc;
      }, {}),
    }));
  };

  const handleServingsPerRecipeChange = (option) => {
    setServingsPerRecipeOptions((prevOptions) => ({
      ...Object.keys(prevOptions).reduce((acc, key) => {
        acc[key] = key === option;
        return acc;
      }, {}),
    }));
  };

  return (
    <div className={styles.preferences8}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <TopBanner />
      <main className={styles.preferenceFrame}>
        <section className={styles.inputFrame}>
          <div className={styles.preferenceGroup}>
            <h1 className={styles.forUsTo}>For us to learn about you</h1>
            <h3 className={styles.pleaseProvideYour}>
              Please provide your meal preferences for us to create a customized
              meal plan and enable the account for you.
            </h3>
          </div>
          <div className={styles.textFrameWrapper}>
            <div className={styles.textFrame}>
              <div className={styles.sizeFrequencyParent}>
                <SizeFrequency />
                <div className={styles.containerFrame}>
                  <div className={styles.frameParent}>
                    <div className={styles.howManyMealsPerDayDoYouWrapper}>
                      <h3 className={styles.howManyMeals}>
                        How many meals per day do you typically eat?
                      </h3>
                    </div>
                    <div className={styles.matInputSelectionControlsGParent}>
                      {Object.keys(mealsPerDayOptions).map((option) => (
                        <div
                          key={option}
                          className={styles.matInputSelectionControlsG}
                          onClick={() => handleMealsPerDayChange(option)}
                        >
                          <h2 className={styles.vIcon}>
                            {mealsPerDayOptions[option]
                              ? "radio_button_checked"
                              : "radio_button_unchecked"}
                          </h2>
                          <label className={styles.meal21} htmlFor={option}>{option} = {parseInt(option.split(" ")[0]) * 7} meals/week </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.howManyServingsPerRecipeWrapper}>
                      <h3 className={styles.howManyMeals}>
                        How many servings per recipe would you like to prepare?
                      </h3>
                    </div>
                    <div className={styles.matInputSelectionControlsGParent}>
                      {Object.keys(servingsPerRecipeOptions).map((option) => (
                        <div
                          key={option}
                          className={styles.matInputSelectionControlsG}
                          onClick={() => handleServingsPerRecipeChange(option)}
                        >
                          <h2 className={styles.vIcon}>
                            {servingsPerRecipeOptions[option]
                              ? "radio_button_checked"
                              : "radio_button_unchecked"}
                          </h2>
                          <label className={styles.meal21} htmlFor={option}>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.loginbuttonGroup}>
                <button
                  onClick={() => navigate("/preferences-1")}
                  className={styles.loginButton}
                >
                  <div className={styles.previous}>Previous</div>
                </button>
                <button
                  className={styles.loginButtonWrapper}
                  onClick={onGroupButtonClick}
                >
                  <div className={styles.loginButton1}>
                    <div className={styles.next}>Next</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Preferences;
