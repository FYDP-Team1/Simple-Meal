import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences1.module.css";
import "../global1.css";
import TopBanner from "../components/TopBanner";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const Preferences1 = () => {
  const navigate = useNavigate();

  const [hasDietaryRestrictions, setHasDietaryRestrictions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [availableOptions] = useState([
    "No-shellfish",
    "Vegan",
    "Vegetarian",
    "Healthy",
    "Dairy-free",
    "Low-sodium",
    "Gluten-free",
    "Diabetic",
    "Low-carb",
    "High-calcium",
    "Egg-free",
    "Low-calorie",
    "Low-fat",
    "Nut-free",
  ]);

  useEffect(()=>{
    localStorage.setItem("dietary", JSON.stringify(selectedOptions.map(m=>m.value)));
  }, [selectedOptions]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/preferences-2");
  }, [navigate]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      // If option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If option is not selected, add it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className={styles.preferences7}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <TopBanner />
      <main className={styles.preferenceFrame}>
        <section className={styles.learnAboutYouFrame}>
          <div className={styles.preferencesGroup}>
            <h1 className={styles.forUsTo}>For us to learn about you</h1>
            <h3 className={styles.pleaseProvideYour}>
              Please provide your meal preferences for us to create a customized
              meal plan and enable the account for you.
            </h3>
          </div>
          <div className={styles.cuisineFramework}>
            <div className={styles.sizeFrequencyFrame}>
              <div className={styles.budgetText1}>
                <div className={styles.dietary}>
                  <div className={styles.groupEllipseLine}>
                    <div className={styles.cuisineDietary}>
                      <div className={styles.groupFrameParent}>
                        <div className={styles.groupFrame}>1</div>
                        <div className={styles.cuisineFrame} />
                      </div>
                      <img
                        className={styles.groupDietaryIcon}
                        loading="eager"
                        alt=""
                        src="/line-21.svg"
                      />
                      <div className={styles.parent}>
                        <div className={styles.div}>2</div>
                        <div className={styles.frameChild} />
                      </div>
                      <div className={styles.sizeFrequencyTime} />
                      <div className={styles.group}>
                        <div className={styles.div1}>3</div>
                        <div className={styles.frameItem} />
                      </div>
                      <div className={styles.sizeFrequencyTime1} />
                      <div className={styles.container}>
                        <div className={styles.div2}>4</div>
                        <div className={styles.frameInner} />
                      </div>
                      <div className={styles.sizeFrequencyTime2} />
                      <div className={styles.groupDiv}>
                        <div className={styles.div3}>5</div>
                        <div className={styles.ellipseDiv} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.budgetGroup}>
                    <div className={styles.frameFrame}>
                      <div className={styles.cuisineWrapper}>
                        <div className={styles.cuisine}>Cuisine</div>
                      </div>
                    </div>
                    <div className={styles.frameFrame1}>
                      <div className={styles.dietaryWrapper}>
                        <div className={styles.dietary1}>Dietary</div>
                      </div>
                    </div>
                    <div className={styles.timeComplexity}>
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
                          className={styles.timeComplexity1}
                        >{`Time & Complexity`}</div>
                      </div>
                    </div>
                    <div className={styles.budgetWrapper}>
                      <div className={styles.budget}>Budget</div>
                    </div>
                  </div>
                </div>
                <h3 className={styles.doYouHave}>
                  Do you have any dietary restrictions or allergies that we
                  should consider when planning your meals?
                </h3>
                <div className={styles.loginbuttons}>
                  <BootstrapSwitchButton
                    size="xs"
                    onlabel="Yes"
                    offlabel="No"
                    checked={hasDietaryRestrictions}
                    onChange={(checked) => {
                      setHasDietaryRestrictions(checked);
                    }}
                  />
                  <div className={styles.iHaveA}>
                    I have a diet restriction as selected below.
                  </div>
                </div>
                {hasDietaryRestrictions && (
                  <div className={styles.formElements}>
                    <p>Select one or more options:</p>
                    {availableOptions.map((option) => (
                      <div key={option}>
                        <input
                          type="checkbox"
                          id={option}
                          name="formElement"
                          value={option}
                          checked={selectedOptions.includes(option)}
                          onChange={() => handleOptionChange(option)}
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                    
                  </div>
                )}
              </div>
              <div className={styles.loginbuttonFrame}>
                <button
                  className={styles.loginButton}
                  onClick={() => navigate("/preferences")}
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

export default Preferences1;
