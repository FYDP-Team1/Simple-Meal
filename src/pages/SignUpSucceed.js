import { useCallback } from "react";
import GroupComponent from "../components/SignUpComponent";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpSucceed.module.css";

const SignUpSucceed = () => {
  const navigate = useNavigate();

  const onSuccessiveShapeClick = useCallback(() => {
    navigate("/preferences-1");
  }, [navigate]);

  return (
    <div className={styles.signUpSucceed} >
      <main className={styles.bannerFrame}>
        <img
          className={styles.burgerIcon}
          loading="eager"
          alt=""
          src="/burger@2x.png"
        />
        <section className={styles.topBanner}>
          <img
            className={styles.burgerIcon1}
            loading="eager"
            alt=""
            src="/burger-1@2x.png"
          />
          <img
            className={styles.eggIcon}
            loading="eager"
            alt=""
            src="/egg@2x.png"
          />
          <h1 className={styles.simpleMeal}>
            <span className={styles.simpleMealTxtContainer}>
              <span className={styles.simple}>{`Simple `}</span>
              <span className={styles.m}>M</span>
              <span className={styles.eal}>eal</span>
            </span>
          </h1>
          <div className={styles.allRightsReserved}>
            © 2023 All rights reserved
          </div>
          <GroupComponent />
          <img
            className={styles.faceBookIcon}
            loading="eager"
            alt=""
            src="/face-book@2x.png"
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
            <button className={styles.nextButtonFrame}>
              <div
                className={styles.successiveShape}
                onClick={onSuccessiveShapeClick}
              />
              <b className={styles.letsGo}>Let’s go!</b>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUpSucceed;
