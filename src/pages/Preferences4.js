import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./Preferences4.module.css";
import '../global1.css';
import { useNavigate } from "react-router-dom";

const Preferences2 = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.preferences10}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <header className={styles.topBanner}>
        <img
          className={styles.topBannerChild}
          loading="eager"
          alt=""
          src="/star-222.svg"
        />
        <img className={styles.topBannerItem} alt="" src="/star-233.svg" />
        <img className={styles.topBannerInner} alt="" src="/star-241.svg" />
        <div className={styles.rectangleFrameWrapper}>
          <div className={styles.rectangleFrame}>
            <div className={styles.shape}>
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
                  src="/star-282.svg"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangle}>
                  <div className={styles.text}>
                    <div className={styles.text1}>
                      <div className={styles.s}>S</div>
                      <img
                        className={styles.textChild}
                        alt=""
                        src="/star-253.svg"
                      />
                    </div>
                    <div className={styles.textItem} />
                    <div className={styles.textInner} />
                  </div>
                </div>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.subtractIcon}
                    alt=""
                    src="/subtract1.svg"
                  />
                  <img
                    className={styles.vectorFrameChild}
                    loading="eager"
                    alt=""
                    src="/vector-31.svg"
                  />
                  <img
                    className={styles.vectorFrameItem}
                    loading="eager"
                    alt=""
                    src="/vector-41.svg"
                  />
                  <img
                    className={styles.vectorFrameInner}
                    loading="eager"
                    alt=""
                    src="/star-211.svg"
                  />
                  <img className={styles.starIcon} alt="" src="/star-263.svg" />
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.simpleParent}>
                  <div className={styles.simple}>SIMPLE</div>
                  <div className={styles.frameInner} />
                  <div className={styles.rectangleDiv} />
                </div>
              </div>
              <div className={styles.mealWrapper}>
                <div className={styles.meal}>MEAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group-270431.svg"
          />
          <img
            className={styles.frameChild1}
            loading="eager"
            alt=""
            src="/group-4901.svg"
          />
          <div className={styles.image39Parent}>
            <img
              className={styles.image39Icon}
              loading="eager"
              alt=""
              src="/image-39@2x.png"
            />
            <div className={styles.frameContainer}>
              <Form.Select className={styles.frameFormselect} />
            </div>
          </div>
        </div>
      </header>
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
              <div className={styles.dot} />
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
                <div className={styles.pleaseProvideInfoParent}>
                  <div className={styles.pleaseProvideInfoContainer}>
                    <span className={styles.pleaseProvideInfoContainer1}>
                      <span>$</span>
                      <span className={styles.span}>120</span>
                    </span>
                  </div>
                  <div className={styles.dotCircleParent}>
                    <div className={styles.dotCircle}>$10</div>
                    <div className={styles.progressWrapper}>
                      <div className={styles.progress}>
                        <div className={styles.progressChild} />
                        <div className={styles.progressItem} />
                      </div>
                    </div>
                    <div className={styles.dotCircle1}>$500</div>
                  </div>
                </div>
              </div>
              <div className={styles.loginPreviousSubmit}>
                <button onClick={()=>navigate('/preferences-3')} className={styles.loginButton}>
                  <div className={styles.previous}>Previous</div>
                </button>
                <button className={styles.loginButton1}>
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
