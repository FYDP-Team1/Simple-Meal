import styles from "./FrameGrid.module.css";

const FrameGrid = ({ text, text1, text2, text3 }) => {
  return (
    <div className={styles.frameGrid}>
      <div className={styles.containerFrame}>
        <div className={styles.imageFrame}>
          <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
          <div
            className={styles.yourBudgetDetails}
          >{`Your Budget Details -> `}</div>
        </div>
        <div className={styles.butterChickenRiceRecipe}>
          <div className={styles.widget}>
            <div className={styles.mushroomSoupRecipe}>
              <div className={styles.content}>
                <div className={styles.text}>
                  <div className={styles.rectangleFrame}>
                    Current Week Plan Spending
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content1}>
              <div className={styles.text1}>
                <div className={styles.text2}>$72</div>
              </div>
              <div className={styles.icontext}>
                <div className={styles.text3}>
                  <div className={styles.text4}>+12.44%</div>
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
              <div className={styles.subrecipeSectionFrame}>
                <div className={styles.wrapperGroup27019}>
                  <img
                    className={styles.wrapperGroup27019Child}
                    loading="eager"
                    alt=""
                    src="/group-27019.svg"
                  />
                </div>
                <div className={styles.component2}>
                  <div className={styles.contentContainerFrame}>?</div>
                  <div className={styles.sidebarFrameGroup} />
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
                      Savings Compared to Eat-out
                    </div>
                  </div>
                </div>
                <div className={styles.component21}>
                  <div className={styles.div}>?</div>
                  <div className={styles.group} />
                </div>
              </div>
            </div>
            <div className={styles.wrapperGroup27018Parent}>
              <div className={styles.wrapperGroup27018}>
                <img
                  className={styles.wrapperGroup27018Child}
                  loading="eager"
                  alt=""
                  src="/group-27019.svg"
                />
              </div>
              <div className={styles.content3}>
                <div className={styles.text7}>
                  <div className={styles.text8}>$31.7</div>
                </div>
                <div className={styles.icontext1}>
                  <div className={styles.text9}>
                    <div className={styles.text10}>-0.01%</div>
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
              </div>
            </div>
          </div>
          <div className={styles.widget2}>
            <div className={styles.widgetChild}>
              <div className={styles.contentGroup}>
                <div className={styles.content4}>
                  <div className={styles.text11}>
                    <div className={styles.text12}>
                      Current Grocery Item Cost
                    </div>
                  </div>
                </div>
                <div className={styles.component22}>
                  <div className={styles.div1}>?</div>
                  <div className={styles.component2Child} />
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
                <div className={styles.text13}>
                  <div className={styles.text14}>{text}</div>
                </div>
                <div className={styles.icontext2}>
                  <div className={styles.text15}>
                    <div className={styles.text16}>{text1}</div>
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
                  <div className={styles.text17}>
                    <div className={styles.text18}>Preference Budget Usage</div>
                  </div>
                </div>
                <div className={styles.component23}>
                  <div className={styles.div2}>?</div>
                  <div className={styles.component2Item} />
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
                  <div className={styles.text19}>
                    <div className={styles.text20}>{text2}</div>
                  </div>
                  <div className={styles.icontext3}>
                    <div className={styles.text21}>
                      <div className={styles.text22}>{text3}</div>
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
  );
};

export default FrameGrid;
