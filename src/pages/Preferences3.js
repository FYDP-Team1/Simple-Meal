import { useCallback } from "react";
import TopBanner1 from "../components/TopBanner";
import TimeComplexity from "../components/TimeComplexity";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences3.module.css";
import '../global1.css';

const Preferences = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/preferences-4");
  }, [navigate]);

  return (
    <div className={styles.preferences9}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <TopBanner1 />
      <main className={styles.preferenceFrame}>
        <section className={styles.inputFieldFrame}>
          <div className={styles.timeComplexityFrame}>
            <h2 className={styles.forUsTo}>For us to learn about you</h2>
            <div className={styles.pleaseProvideYour}>
              Please provide your meal preferences for us to create a customized
              meal plan and enable the account for you.
            </div>
          </div>
          <div className={styles.budgetGroup}>
            <div className={styles.timeSpendingFrame}>
              <div className={styles.loginbuttonFrame}>
                <TimeComplexity />
                <div className={styles.timeWillingToSpendText}>
                  <div className={styles.forUsToLearnFrame}>
                    <div className={styles.cuisineDietaryGroup}>
                      <div className={styles.howMuchTime}>
                        How much time are you willing to spend on meal
                        preparation?
                      </div>
                    </div>
                  </div>
                </div>
                <GroupComponent />
              </div>
              <div className={styles.loginbuttonsGroup}>
                <button onClick={()=>navigate('/preferences-2')} className={styles.loginButton}>
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

export default Preferences;
