import LoginComponent from "../components/LoginComponent";
import StarsFrame from "../components/StarsFrame";
import styles from "./LogIn.module.css";

const LogIn = () => {
  return (
    <div className={styles.logIn}>
      <div className={styles.fRAMEWrapper}>
        <div className={styles.fRAME}>
          <div className={styles.fRAMEInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.sParent}>
                      <div className={styles.s}>S</div>
                      <div className={styles.framesRow} />
                      <div className={styles.framesRow1} />
                    </div>
                  </div>
                  <div className={styles.subtractParent}>
                    <img
                      className={styles.subtractIcon}
                      alt=""
                      src="/subtract.svg"
                    />
                    <img
                      className={styles.vectorsPairIcon}
                      loading="eager"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className={styles.vectorsPairIcon1}
                      loading="eager"
                      alt=""
                      src="/vector-4.svg"
                    />
                    <img
                      className={styles.frameChild}
                      loading="eager"
                      alt=""
                      src="/star-21.svg"
                    />
                  </div>
                </div>
                <div className={styles.framesColumnWrapper}>
                  <div className={styles.framesColumn}>
                    <div className={styles.mealLabelWrapper}>
                      <div className={styles.mealLabel}>
                        <div className={styles.simple}>SIMPLE</div>
                        <div className={styles.rectanglesRow} />
                        <div className={styles.rectanglesRow1} />
                      </div>
                    </div>
                    <div className={styles.loginFrame}>
                      <div className={styles.facebookTwitterIconFrame}>
                        <img
                          className={styles.eggIcon}
                          loading="eager"
                          alt=""
                          src="/egg@2x.png"
                        />
                        <div className={styles.meal}>MEAL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copyrightSymbolFrame}>
                <div className={styles.loginFrames}>
                  <img
                    className={styles.faceBookIcon}
                    loading="eager"
                    alt=""
                    src="/face-book1@2x.png"
                  />
                  <img
                    className={styles.twitterIcon}
                    loading="eager"
                    alt=""
                    src="/twitter@2x.png"
                  />
                  <img
                    className={styles.twitterIcon1}
                    loading="eager"
                    alt=""
                    src="/twitter-1@2x.png"
                  />
                  <img
                    className={styles.youtubIcon}
                    loading="eager"
                    alt=""
                    src="/youtub@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.allRightsReserved}>
            © 2023 All rights reserved
          </div>
        </div>
      </div>
      <div className={styles.loginInputFrames}>
        <img
          className={styles.burgerIcon}
          loading="eager"
          alt=""
          src="/burger@2x.png"
        />
        <LoginComponent />
      </div>
      <StarsFrame />
    </div>
  );
};

export default LogIn;
