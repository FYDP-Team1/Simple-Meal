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
                <img
                  className={styles.logo}
                  loading="eager"
                  alt=""
                  src="/logo.png"
                />
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
