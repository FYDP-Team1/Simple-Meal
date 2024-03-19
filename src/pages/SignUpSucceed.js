import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpSucceed.module.css";
import SignUpComponent from "../components/SignUpComponent";

const SignUpSucceed = () => {
  const navigate = useNavigate();

  const onSuccessiveShapeClick = useCallback(
    (e) => {
      e.preventDefault(); // Prevent default form submission
      navigate("/preferences");
    },
    [navigate]
  );

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
                <div className={styles.logoGroup}>
                  <img
                    className={styles.logo}
                    loading="eager"
                    alt=""
                    src="/logo.png"
                  />
                </div>
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

      <div className={styles.topBannerChild} />
        <div className={styles.celebratoryMoment}>
          <div className={styles.celebratoryMomentChild} />
          <h1 className={styles.h1}>🎉</h1>
          <div className={styles.welcomeOnBoardContainer}>
            <span className={styles.welcomeOnBoardContainer1}>
               <p className={styles.welcomeOnBoard}>
                <b>Welcome on board!</b>
              </p>
              <p className={styles.readyToStart}>
                Ready to start meal planning?
              </p>
            </span>
          </div>
          <button
            className={styles.nextButtonFrame}
            onClick={onSuccessiveShapeClick}
           >
             <div className={styles.successiveShape} />
             <b className={styles.letsGo}>Let’s go!</b>
           </button>
         </div>
      </div>
    
  );
};

export default SignUpSucceed;
