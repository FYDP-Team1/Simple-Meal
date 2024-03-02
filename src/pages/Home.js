import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import CreateGroceryList from "../components/CreateGroceryList";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onSwapIconClick = useCallback(() => {
    navigate("/home-swap-function-1");
  }, [navigate]);

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
                <div className={styles.thursdayFrame}>
                  <div className={styles.widget}>
                    <div className={styles.saturdayFrame}>
                      <div className={styles.content}>
                        <div className={styles.text}>
                          <div className={styles.text1}>
                            Average Cost Per Meal
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.content1}>
                      <div className={styles.text2}>
                        <div className={styles.frameFrame}>$70.5</div>
                      </div>
                      <div className={styles.icontext}>
                        <div className={styles.text3}>
                          <div className={styles.text4}>+11.01%</div>
                        </div>
                        <div className={styles.iconset}>
                          <img
                            className={styles.arrowriseIcon}
                            loading="eager"
                            alt=""
                            src="/arrowrise.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.group}>
                        <div className={styles.wrapperGroup27019}>
                          <img
                            className={styles.wrapperGroup27019Child}
                            loading="eager"
                            alt=""
                            src="/group-27019.svg"
                          />
                        </div>
                        <div className={styles.component2}>
                          <div className={styles.swap}>?</div>
                          <div className={styles.frame} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.widget1}>
                    <div className={styles.widgetInner}>
                      <div className={styles.contentParent}>
                        <div className={styles.content2}>
                          <div className={styles.text5}>
                            <div className={styles.text6}>
                              Average Savings Per Meal
                              Compared to Eat Out
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.wrapperGroup27018Parent}>
                    <div className={styles.content3}>
                      <div className={styles.wrapperGroup27018}>
                        <img
                          className={styles.wrapperGroup27018Child}
                          loading="eager"
                          alt=""
                          src="/group-27019.svg"
                        />
                      </div>
                      <div className={styles.text7}>
                        <div className={styles.text8}>$30.4</div>
                      </div>
                      <div className={styles.icontext1}>
                        <div className={styles.text9}>
                          <div className={styles.mondayFrame1}>-0.03%</div>
                        </div>
                        <div className={styles.iconset1}>
                          <img
                            className={styles.arrowfallIcon}
                            loading="eager"
                            alt=""
                            src="/arrowfall.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.group22}>
 
                    <div className={styles.component2Wrapper}>
                      <div className={styles.component21}>
                        <div className={styles.div}>?</div>
                        <div className={styles.component2Child} />
                      </div>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
                  <div className={styles.widget2}>
                    <div className={styles.widgetChild}>
                      <div className={styles.contentGroup}>
                        <div className={styles.content4}>
                          <div className={styles.text10}>
                            <div className={styles.text11}>
                              Weekly Grovery List Cost
                            </div>
                          </div>
                        </div>
                        <div className={styles.component22}>
                          <div className={styles.div1}>?</div>
                          <div className={styles.component2Item} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent}>
                      <img
                        className={styles.frameChild}
                        loading="eager"
                        alt=""
                        src="/group-27020@2x.png"
                      />
                      <div className={styles.content5}>
                        <div className={styles.text12}>
                          <div className={styles.text13}>$70.5</div>
                        </div>
                        <div className={styles.icontext2}>
                          <div className={styles.text14}>
                            <div className={styles.text15}>+17.12%</div>
                          </div>
                          <div className={styles.iconset2}>
                            <img
                              className={styles.arrowriseIcon1}
                              alt=""
                              src="/arrowrise.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.widget3}>
                    <div className={styles.frameDiv}>
                      <div className={styles.contentContainer}>
                        <div className={styles.content6}>
                          <div className={styles.text16}>
                            <div className={styles.text17}>
                              Budget Usage
                            </div>
                          </div>
                        </div>
                        <div className={styles.component23}>
                          <div className={styles.div2}>?</div>
                          <div className={styles.component2Inner} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.widgetInner1}>
                      <div className={styles.frameGroup}>
                        <img
                          className={styles.frameItem}
                          loading="eager"
                          alt=""
                          src="/group-27021@2x.png"
                        />
                        <div className={styles.content7}>
                          <div className={styles.text18}>
                            <div className={styles.text19}>100%</div>
                          </div>
                          <div className={styles.icontext3}>
                            <div className={styles.text20}>
                              <div className={styles.text21}>+6.08%</div>
                            </div>
                            <div className={styles.iconset3}>
                              <img
                                className={styles.arrowriseIcon2}
                                alt=""
                                src="/arrowrise.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CreateGroceryList
              image10="/image-10-4@2x.png"
              swap="/swap.svg"
              cheesePizza="cheese pizza"
              recipe="$3.50/recipe"
              image9="/image-9@2x.png"
              swap1="/swap.svg"
              potatoSalad="potato salad"
              recipe1="$5.00/recipe"
              swap2="/swap.svg"
              swap3="/swap.svg"
              swap4="/swap.svg"
              swap5="/swap.svg"
              swap6="/swap.svg"
              swap7="/swap.svg"
              swap8="/swap.svg"
              swap9="/swap.svg"
              swap10="/swap.svg"
              swap11="/swap.svg"
              image101="/image-10@2x.png"
              swap12="/swap.svg"
              vegetarianBurger="vegetarian burger "
              recipe2="$6.00/recipe"
              swap13="/swap.svg"
              rectangleDivPadding="0px var(--padding-11xs)"
              frameDivPadding="0px var(--padding-11xs)"
              frameDivPadding1="0px var(--padding-12xl) 0px var(--padding-11xs)"
              saturdayPadding="0px var(--padding-11xs)"
              image10IconPadding="0px var(--padding-16xl) 0px var(--padding-11xs)"
              swapIconFlex="1"
              vegetarianBurgerPadding="var(--padding-xs) var(--padding-smi) var(--padding-lg) var(--padding-2xs)"
              propFlex="1"
              propPadding1="0px var(--padding-11xs)"
              propPadding2="0px var(--padding-12xl) 0px var(--padding-11xs)"
              propPadding3="0px var(--padding-11xs)"
              propFlex1="1"
              propPadding4="0px var(--padding-11xs)"
              propFlex2="1"
              propPadding5="0px var(--padding-11xs)"
              propPadding6="0px var(--padding-12xl) 0px var(--padding-11xs)"
              propPadding7="0px var(--padding-16xl) 0px var(--padding-11xs)"
              propFlex3="1"
              propPadding8="0px var(--padding-16xl) 0px var(--padding-11xs)"
              propFlex4="1"
              onSwapIconClick={onSwapIconClick}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
