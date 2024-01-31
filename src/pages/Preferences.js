import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences.module.css";
import '../global1.css';

const Preferences = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/preferences-1");
  }, [navigate]);

  return (
    <div className={styles.preferences6}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <header className={styles.topBanner}>
        <img
          className={styles.topBannerChild}
          loading="eager"
          alt=""
          src="/star-221.svg"
        />
        <img className={styles.topBannerItem} alt="" src="/star-232.svg" />
        <img className={styles.topBannerInner} alt="" src="/star-24.svg" />
        <div className={styles.frameDiv}>
          <div className={styles.rectangleFramePairParent}>
            <div className={styles.rectangleFramePair}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  loading="eager"
                  alt=""
                  src="/star-27.svg"
                />
                <img
                  className={styles.frameItem}
                  loading="eager"
                  alt=""
                  src="/star-281.svg"
                />
              </div>
              <div className={styles.outerFrame}>
                <div className={styles.rectanglePair}>
                  <div className={styles.sLabel}>
                    <div className={styles.textLabelS}>
                      <div className={styles.s}>S</div>
                      <img
                        className={styles.textLabelSChild}
                        alt=""
                        src="/star-252.svg"
                      />
                    </div>
                    <div className={styles.rectangleRectangle} />
                    <div className={styles.rectangleRectangle1} />
                  </div>
                </div>
                <div className={styles.mealFrame}>
                  <img
                    className={styles.subtractIcon}
                    alt=""
                    src="/subtract.svg"
                  />
                  <img
                    className={styles.vectorPairIcon}
                    loading="eager"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={styles.vectorPairIcon1}
                    loading="eager"
                    alt=""
                    src="/vector-4.svg"
                  />
                  <img
                    className={styles.mealFrameChild}
                    loading="eager"
                    alt=""
                    src="/star-21.svg"
                  />
                  <img
                    className={styles.mealFrameItem}
                    alt=""
                    src="/star-262.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.groupMealPreferences}>
                <div className={styles.groupMealChoices}>
                  <div className={styles.simple}>SIMPLE</div>
                  <div className={styles.cuisineInstance} />
                  <div className={styles.cuisineInstance1} />
                </div>
              </div>
              <div className={styles.sizeFrequencyFrame}>
                <div className={styles.meal}>MEAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.budgetFrame}>
          <img
            className={styles.budgetFrameChild}
            loading="eager"
            alt=""
            src="/group-27043.svg"
          />
          <img
            className={styles.budgetFrameItem}
            loading="eager"
            alt=""
            src="/group-490.svg"
          />
          <div className={styles.imageRectangle}>
            <img
              className={styles.image39Icon}
              loading="eager"
              alt=""
              src="/image-39@2x.png"
            />
            <div className={styles.viconRectangle}>
              <Form.Select className={styles.frameInformationFormselect} />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.budgetFrame1}>
        <section className={styles.preferencesFrame}>
          <div className={styles.forUsToLearnAboutYouParent}>
            <h3 className={styles.forUsTo}>For us to learn about you</h3>
            <div className={styles.pleaseProvideYour}>
              Please provide your meal preferences for us to create a customized
              meal plan and enable the account for you.
            </div>
          </div>
          <div className={styles.sizeFrequencyTimeComplexity}>
            <div className={styles.budgetText}>
              <div className={styles.cuisineInstanceWrapper}>
                <div className={styles.cuisineInstance2}>
                  <div className={styles.cuisine}>
                    <div className={styles.sizeFrequencyTimeComplexity1}>
                      <div className={styles.frameParent}>
                        <div className={styles.viconRectangleParent}>
                          <div className={styles.viconRectangle1}>1</div>
                          <div className={styles.italianGroup} />
                        </div>
                        <img
                          className={styles.japaneseGroupIcon}
                          loading="eager"
                          alt=""
                          src="/line-211.svg"
                        />
                        <div className={styles.parent}>
                          <div className={styles.div}>2</div>
                          <div className={styles.frameInner} />
                        </div>
                        <div className={styles.matinputselectioncontrols} />
                        <div className={styles.group}>
                          <div className={styles.div1}>3</div>
                          <div className={styles.ellipseDiv} />
                        </div>
                        <div className={styles.matinputselectioncontrols1} />
                        <div className={styles.container}>
                          <div className={styles.div2}>4</div>
                          <div className={styles.frameChild1} />
                        </div>
                        <div className={styles.matinputselectioncontrols2} />
                        <div className={styles.groupDiv}>
                          <div className={styles.div3}>5</div>
                          <div className={styles.frameChild2} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.cuisineWrapper}>
                          <div className={styles.cuisine1}>Cuisine</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.dietaryWrapper}>
                          <div className={styles.dietary}>Dietary</div>
                        </div>
                      </div>
                      <div className={styles.frameGroupCuisine}>
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
                        <div className={styles.budget}>Budget</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cuisineSelection}>
                    <div className={styles.whatCuisinesOr}>
                      What cuisines or types of food do you enjoy the most?
                    </div>
                    <div className={styles.matinputselectioncontrols3}>
                      <div className={styles.rectangleParent}>
                        <div className={styles.rectangleDiv} />
                        <button className={styles.cuisineOptions}>
                          <img
                            className={styles.image40Icon}
                            alt=""
                            src="/image-40@2x.png"
                          />
                          <div className={styles.cuisineOptions1}>
                            <div className={styles.matInputSelectionControls}>
                              <div className={styles.vIcon}>
                                check_box_outline_blank
                              </div>
                            </div>
                            <div className={styles.cuisineOptions2} />
                          </div>
                        </button>
                        <div className={styles.italianWrapper}>
                          <div className={styles.italian}>Italian</div>
                        </div>
                      </div>
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameChild3} />
                        <button className={styles.image41Parent}>
                          <img
                            className={styles.image41Icon}
                            alt=""
                            src="/image-41@2x.png"
                          />
                          <div
                            className={styles.matInputSelectionControlsParent}
                          >
                            <div className={styles.matInputSelectionControls1}>
                              <div className={styles.vIcon1}>
                                check_box_outline_blank
                              </div>
                            </div>
                            <div className={styles.frameChild4} />
                          </div>
                        </button>
                        <div className={styles.mexicanWrapper}>
                          <div className={styles.mexican}>Mexican</div>
                        </div>
                      </div>
                      <div className={styles.rectangleContainer}>
                        <div className={styles.frameChild5} />
                        <div className={styles.matInputSelectionControlsGroup}>
                          <div className={styles.matInputSelectionControls2}>
                            <div className={styles.vIcon2}>
                              check_box_outline_blank
                            </div>
                          </div>
                          <div className={styles.japaneseOption} />
                        </div>
                        <img
                          className={styles.image42Icon}
                          loading="eager"
                          alt=""
                          src="/image-42@2x.png"
                        />
                        <div className={styles.japanese}>Japanese</div>
                      </div>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild6} />
                        <button className={styles.image43Parent}>
                          <img
                            className={styles.image43Icon}
                            alt=""
                            src="/image-43@2x.png"
                          />
                          <div
                            className={
                              styles.matInputSelectionControlsContainer
                            }
                          >
                            <div className={styles.matInputSelectionControls3}>
                              <div className={styles.vIcon3}>check_box</div>
                            </div>
                            <div className={styles.frameChild7} />
                          </div>
                        </button>
                        <div className={styles.chineseWrapper}>
                          <div className={styles.chinese}>Chinese</div>
                        </div>
                      </div>
                      <div className={styles.rectangleParent2}>
                        <div className={styles.frameChild8} />
                        <div className={styles.image44Parent}>
                          <img
                            className={styles.image44Icon}
                            alt=""
                            src="/image-44@2x.png"
                          />
                          <div
                            className={styles.matInputSelectionControlsParent1}
                          >
                            <div className={styles.matInputSelectionControls4}>
                              <div className={styles.vIcon4}>check_box</div>
                            </div>
                            <div className={styles.frameChild9} />
                          </div>
                        </div>
                        <div className={styles.koreanWrapper}>
                          <div className={styles.korean}>Korean</div>
                        </div>
                      </div>
                      <div className={styles.rectangleParent3}>
                        <div className={styles.frameChild10} />
                        <div className={styles.image45Parent}>
                          <img
                            className={styles.image45Icon}
                            alt=""
                            src="/image-45@2x.png"
                          />
                          <div
                            className={styles.matInputSelectionControlsParent2}
                          >
                            <div className={styles.matInputSelectionControls5}>
                              <div className={styles.vIcon5}>
                                check_box_outline_blank
                              </div>
                            </div>
                            <div className={styles.frameChild11} />
                          </div>
                        </div>
                        <div className={styles.mediterraneanWrapper}>
                          <div className={styles.mediterranean}>
                            Mediterranean
                          </div>
                        </div>
                      </div>
                      <div className={styles.rectangleParent4}>
                        <div className={styles.frameChild12} />
                        <div className={styles.image46Parent}>
                          <img
                            className={styles.image46Icon}
                            alt=""
                            src="/image-46@2x.png"
                          />
                          <div
                            className={styles.matInputSelectionControlsParent3}
                          >
                            <div className={styles.matInputSelectionControls6}>
                              <div className={styles.vIcon6}>
                                check_box_outline_blank
                              </div>
                            </div>
                            <div className={styles.frameChild13} />
                          </div>
                        </div>
                        <div className={styles.americanWrapper}>
                          <div className={styles.american}>American</div>
                        </div>
                      </div>
                      <div className={styles.rectangleParent5}>
                        <div className={styles.frameChild14} />
                        <div className={styles.image47Parent}>
                          <img
                            className={styles.image47Icon}
                            alt=""
                            src="/image-47@2x.png"
                          />
                          <div
                            className={styles.matInputSelectionControlsParent4}
                          >
                            <div className={styles.matInputSelectionControls7}>
                              <div className={styles.vIcon7}>check_box</div>
                            </div>
                            <div className={styles.frameChild15} />
                          </div>
                        </div>
                        <div className={styles.indianWrapper}>
                          <div className={styles.indian}>Indian</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.viewAllOptions}>VIEW ALL OPTIONS</div>
                </div>
              </div>
              <div className={styles.allOptionsView}>
                <button
                  className={styles.loginButtonWrapper}
                  onClick={onGroupButtonClick}
                >
                  <div className={styles.loginButton}>
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
