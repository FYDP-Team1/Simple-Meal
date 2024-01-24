import { useCallback } from "react";
import styles from "./Preferences.module.css";

const Preferences = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Preferences 2" to the project
  }, []);

  return (
    <div className={styles.preferences1}>
      <div className={styles.frameParent}>
        <div className={styles.cuisineParent}>
          <div className={styles.cuisine}>
            <div className={styles.groupParent}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <div className={styles.div}>1</div>
              </div>
              <img className={styles.frameChild} alt="" src="/line-21.svg" />
              <div className={styles.ellipseGroup}>
                <div className={styles.groupItem} />
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.ellipseGroup}>
                <div className={styles.groupItem} />
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.ellipseGroup}>
                <div className={styles.groupItem} />
                <div className={styles.div}>4</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.ellipseGroup}>
                <div className={styles.groupItem} />
                <div className={styles.div}>5</div>
              </div>
            </div>
            <div className={styles.cuisineWrapper}>
              <div className={styles.cuisine1}>Cuisine</div>
            </div>
            <div className={styles.budgetWrapper}>
              <div className={styles.budget}>Budget</div>
            </div>
            <div className={styles.timeComplexityWrapper}>
              <div className={styles.budget}>{`Time & Complexity`}</div>
            </div>
            <div className={styles.sizeFrequencyWrapper}>
              <div className={styles.sizeFrequencyContainer}>
                <span className={styles.sizeFrequencyContainer1}>
                  <p className={styles.size}>{`Size &`}</p>
                  <p className={styles.size}>Frequency</p>
                </span>
              </div>
            </div>
            <div className={styles.dietaryWrapper}>
              <div className={styles.budget}>Dietary</div>
            </div>
          </div>
          <div className={styles.whatCuisinesOrTypesOfFoodParent}>
            <div className={styles.whatCuisinesOr}>
              What cuisines or types of food do you enjoy the most?
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.italian}>Italian</div>
                <img
                  className={styles.image40Icon}
                  alt=""
                  src="/image-40@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box_outline_blank</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.italian}>Mexican</div>
                <img
                  className={styles.image40Icon}
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box_outline_blank</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.italian}>Japanese</div>
                <img
                  className={styles.image42Icon}
                  alt=""
                  src="/image-42@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box_outline_blank</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild7} />
                <div className={styles.italian}>Chinese</div>
                <img
                  className={styles.image40Icon}
                  alt=""
                  src="/image-43@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild7} />
                <div className={styles.italian}>Korea</div>
                <img
                  className={styles.image44Icon}
                  alt=""
                  src="/image-44@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.italian}>Mediterranean</div>
                <img
                  className={styles.image44Icon}
                  alt=""
                  src="/image-45@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box_outline_blank</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.italian}>American</div>
                <img
                  className={styles.image44Icon}
                  alt=""
                  src="/image-46@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box_outline_blank</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild7} />
                <div className={styles.italian}>Indian</div>
                <img
                  className={styles.image44Icon}
                  alt=""
                  src="/image-47@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.groupChild2} />
                  <div className={styles.matInputSelectionControls}>
                    <div className={styles.vIcon}>check_box</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div
            className={styles.loginButtonWrapper}
            onClick={onGroupContainerClick}
          >
            <div className={styles.loginButton}>
              <div className={styles.next}>Next</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <div className={styles.topBanner}>
        <div className={styles.simplemealLogoDesign}>
          <div className={styles.simpleParent}>
            <div className={styles.simple}>SIMPLE</div>
            <div className={styles.meal}>MEAL</div>
          </div>
          <div className={styles.simplemealLogoDesignChild} />
          <div className={styles.simplemealLogoDesignItem} />
          <div className={styles.groupParent1}>
            <div className={styles.subtractParent}>
              <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
              <img className={styles.groupChild17} alt="" src="/vector-4.svg" />
              <div className={styles.groupParent2}>
                <div className={styles.sWrapper}>
                  <div className={styles.s}>S</div>
                </div>
                <div className={styles.groupChild18} />
                <div className={styles.groupChild19} />
              </div>
            </div>
            <img className={styles.starIcon} alt="" src="/star-21.svg" />
            <img className={styles.groupChild20} alt="" src="/star-22.svg" />
            <img className={styles.groupChild21} alt="" src="/star-23.svg" />
            <img className={styles.groupChild22} alt="" src="/star-24.svg" />
            <img className={styles.groupChild23} alt="" src="/star-25.svg" />
            <img className={styles.groupChild24} alt="" src="/star-27.svg" />
            <img className={styles.groupChild25} alt="" src="/star-28.svg" />
            <img className={styles.groupChild26} alt="" src="/star-26.svg" />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.image39Parent}>
            <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
            <div className={styles.frameWrapper}>
              <div className={styles.ciciLiuParent}>
                <div className={styles.ciciLiu}>Cici Liu</div>
                <div className={styles.vIconWrapper}>
                  <img className={styles.vIcon8} alt="" src="/vicon.svg" />
                </div>
              </div>
            </div>
          </div>
          <img className={styles.groupIcon} alt="" src="/group-27043.svg" />
          <img className={styles.groupChild27} alt="" src="/group-490.svg" />
        </div>
      </div>
      <b className={styles.forUsTo}>For us to learn about you</b>
      <div className={styles.pleaseProvideYour}>
        Please provide your meal preferences for us to create a customized meal
        plan and enable the account for you.
      </div>
    </div>
  );
};

export default Preferences;
