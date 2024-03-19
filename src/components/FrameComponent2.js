import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";
import TopBanner2 from "../components/TopBanner2";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.signUpLogInButtonWrapper}>
      <nav className={styles.signUpLogInButton}>
        <TopBanner2 />
        
        <div className={styles.text}>
          <div className={styles.tabsissuerdealTeamdefault}>
            <div className={styles.tabsissuerdealTeamdefaultChild} />
            <div className={styles.tabs}>
              <div className={styles.tab1}>
                <div className={styles.ourTeam}>Our Team</div>
              </div>
              <div className={styles.tab2}>
                <div className={styles.ourProduct}>Our Product</div>
              </div>
              <div className={styles.tab3}>
                <div className={styles.qas}>{`Q&As`}</div>
              </div>
              <div className={styles.tab4}>
                <div className={styles.contactUs}>Contact Us</div>
              </div>
              <div className={styles.tab5}>
                <div className={styles.documents}>Documents</div>
              </div>
              <div className={styles.tab6}>
                <div className={styles.media}>Media</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.loginButtonParent}>
          <button className={styles.loginButton} onClick={() => navigate('log-in')}>
            <b className={styles.login}>Login</b>
          </button>
          <button className={styles.signUpButton} onClick={() => navigate('sign-up')}>
            <b className={styles.signUp}>Sign Up</b>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default FrameComponent2;
