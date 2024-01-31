import { useCallback } from "react";
import TopBanner from "../components/TopBanner1";
import SizeFrequency from "../components/SizeFrequency";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences2.module.css";
import '../global1.css';

const Preferences = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/preferences-3");
  }, [navigate]);

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
                      <div className={styles.matInputSelectionControlsG}>
                        <div className={styles.matInputSelectionControls}>
                          <h2 className={styles.vIcon}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.meal7}>
                          1 meal = 7 meals/week
                        </div>
                      </div>
                      <div className={styles.matInputSelectionControlsG1}>
                        <div className={styles.matInputSelectionControls1}>
                          <h2 className={styles.vIcon1}>
                            radio_button_checked
                          </h2>
                        </div>
                        <div className={styles.meal14}>
                          2 meal = 14 meals/week
                        </div>
                      </div>
                      <div className={styles.matInputSelectionControlsG2}>
                        <div className={styles.matInputSelectionControls2}>
                          <h2 className={styles.vIcon2}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.meal21}>
                          3 meal = 21 meals/week
                        </div>
                      </div>
                      <div className={styles.matInputSelectionControlsG3}>
                        <div className={styles.matInputSelectionControls3}>
                          <h2 className={styles.vIcon3}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.meal28}>
                          4 meal = 28 meals/week
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.howManyServingsPerRecipeWWrapper}>
                      <h3 className={styles.howManyServings}>
                        How many servings per recipe would you like to prepare?
                      </h3>
                    </div>
                    <div className={styles.loginContainerFrame}>
                      <div className={styles.matInputSelectionControlsParent}>
                        <div className={styles.matInputSelectionControls4}>
                          <h2 className={styles.vIcon4}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.person}>1 person</div>
                      </div>
                      <div className={styles.matInputSelectionControlsGroup}>
                        <div className={styles.matInputSelectionControls5}>
                          <h2 className={styles.vIcon5}>
                            radio_button_checked
                          </h2>
                        </div>
                        <div className={styles.people}>2 people</div>
                      </div>
                      <div
                        className={styles.matInputSelectionControlsContainer}
                      >
                        <div className={styles.matInputSelectionControls6}>
                          <h2 className={styles.vIcon6}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.people1}>3 people</div>
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.matInputSelectionControls7}>
                          <h2 className={styles.vIcon7}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.people2}>4 people</div>
                      </div>
                      <div className={styles.matInputSelectionControlsParent1}>
                        <div className={styles.matInputSelectionControls8}>
                          <h2 className={styles.vIcon8}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.people3}>5 people</div>
                      </div>
                      <div className={styles.matInputSelectionControlsParent2}>
                        <div className={styles.matInputSelectionControls9}>
                          <h2 className={styles.vIcon9}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.people4}>6 people</div>
                      </div>
                      <div className={styles.matInputSelectionControlsParent3}>
                        <div className={styles.matInputSelectionControls10}>
                          <h2 className={styles.vIcon10}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.people5}>7 people</div>
                      </div>
                      <div className={styles.matInputSelectionControlsParent4}>
                        <div className={styles.matInputSelectionControls11}>
                          <h2 className={styles.vIcon11}>
                            radio_button_unchecked
                          </h2>
                        </div>
                        <div className={styles.people6}>8 people</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.loginbuttonGroup}>
                <button onClick={()=>navigate('/preferences-1')} className={styles.loginButton} >
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
