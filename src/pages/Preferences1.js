import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences1.module.css";
import '../global1.css';

const Preferences1 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/preferences-2");
  }, [navigate]);

  return (
    <div className={styles.preferences7}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <header className={styles.topBanner}>
        <img
          className={styles.topBannerChild}
          loading="eager"
          alt=""
          src="/star-22.svg"
        />
        <img className={styles.topBannerItem} alt="" src="/star-231.svg" />
        <img className={styles.topBannerInner} alt="" src="/star-24.svg" />
        <div className={styles.sIMPLEText}>
          <div className={styles.rectangleFrame}>
            <div className={styles.rectangleIntersect}>
              <div className={styles.starVector}>
                <img
                  className={styles.starVectorChild}
                  loading="eager"
                  alt=""
                  src="/star-27.svg"
                />
                <img
                  className={styles.starVectorItem}
                  loading="eager"
                  alt=""
                  src="/star-28.svg"
                />
              </div>
              <div className={styles.cuisineAndDietary}>
                <div className={styles.sizeFrequencyTimeComplexity}>
                  <div className={styles.budgetText}>
                    <div className={styles.text}>
                      <div className={styles.s}>S</div>
                      <img
                        className={styles.textChild}
                        alt=""
                        src="/star-251.svg"
                      />
                    </div>
                    <div className={styles.rectangleIntersect1} />
                    <div className={styles.rectangleIntersect2} />
                  </div>
                </div>
                <div className={styles.imageContainer}>
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
                    className={styles.imageContainerChild}
                    loading="eager"
                    alt=""
                    src="/star-21.svg"
                  />
                  <img
                    className={styles.imageContainerItem}
                    alt=""
                    src="/star-261.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.backgroundFrame}>
              <div className={styles.frameGroup}>
                <div className={styles.frameNestedGroup}>
                  <h2 className={styles.simple}>SIMPLE</h2>
                  <div className={styles.rectangleRectangle} />
                  <div className={styles.rectangleRectangle1} />
                </div>
              </div>
              <div className={styles.mealText}>
                <h2 className={styles.meal}>MEAL</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameOuter}>
          <img
            className={styles.frameOuterChild}
            loading="eager"
            alt=""
            src="/group-27043.svg"
          />
          <img
            className={styles.frameOuterItem}
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
            <div className={styles.viconVector}>
              <Form.Select className={styles.parentFrameFormselect} />
            </div>
          </div>
        </div>
      </header>
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
                  <div className={styles.switch}>
                    <div className={styles.track} />
                    <div className={styles.thumb} />
                  </div>
                  <div className={styles.iHaveA}>
                    I have a diet restriction as selected below.
                  </div>
                </div>
              </div>
              <div className={styles.loginbuttonFrame}>
                <button className={styles.loginButton} 
                onClick={()=>navigate('/preferences')}>
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
