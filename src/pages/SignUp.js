import SignUpComponent from "../components/SignUpComponent";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <div className={styles.burgerIconWrapper}>
        <div className={styles.burgerIcon1}>
          <div className={styles.simpleMealLabel}>
            <div className={styles.signupText}>
              <div className={styles.eggShape}>
                <img
                  className={styles.eggIcon}
                  loading="eager"
                  alt=""
                  src="/egg@2x.png"
                />
                <h1 className={styles.simpleMeal}>
                  <span>
                    <span className={styles.simple}>{`Simple `}</span>
                    <span className={styles.m}>M</span>
                    <span className={styles.eal}>eal</span>
                  </span>
                </h1>
              </div>
              <div className={styles.checkboxContainer}>
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
          <div className={styles.allRightsReserved}>
            © 2023 All rights reserved
          </div>
        </div>
      </div>
      <div className={styles.burgerParent}>
        <img
          className={styles.burgerIcon2}
          loading="eager"
          alt=""
          src="/burger-1@2x.png"
        />
        <SignUpComponent />
      </div>
    </div>
  );
};

export default SignUp;
