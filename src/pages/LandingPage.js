import FrameComponent2 from "../components/FrameComponent2";
import Youtube from "../components/Youtube";
import NA from "../components/NA";
import styles from "./LandingPage.module.css";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.LandingPage}>
      <FrameComponent2 />
      <div className={styles.line}>
        <main className={styles.frameParent}>
          <section className={styles.frameGroup}>
            <div className={styles.emailAddressWrapper}>
              <div className={styles.emailAddress}>
                <img
                  className={styles.tablesIcon}
                  alt=""
                  src="/tables@2x.png"
                />
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.information}>
                <h1 className={styles.yourBudgetDrivenMealPlanni}>
                  Your Budget-driven Meal-planning Companion
                </h1>
                <div className={styles.ourAppAims}>
                  Our app aims to provide you a weekly auto-customized meal plan
                  and price summaries based on your own preferences. Start your
                  budgeting on your meals now.
                </div>
              </div>
            </div>
          </section>
          <section className={styles.blog}>
            <div className={styles.support}>
              <div className={styles.footer}>
                <h1 className={styles.whySimplemeal}>Why SimpleMeal?</h1>
                <div className={styles.fRAME}>
                  <h3 className={styles.becauseSimplemealStandsContainer}>
                    <span>
                      <p className={styles.becauseSimplemealStands}>
                        Because SimpleMeal stands out in a sea of meal planning
                        apps and online resources. While others focus on making
                        grocery shopping a breeze, we prioritize helping you
                        save money from the get-go.
                      </p>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <img
              className={styles.image38Icon}
              loading="eager"
              alt=""
              src="/image-38@2x.png"
            />
          </section>
          <Youtube />
          <section className={styles.group}>
            <footer className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <h1 className={styles.joinTheSimplemeal}>
                Join the SimpleMeal community and start cooking smarter, saving
                more, and savoring every bite!
              </h1>
              <div className={styles.product1}>
                <div className={styles.information1}>
                  <div className={styles.loginButton} onClick={()=>navigate("/log-in")}>
                    <b className={styles.login}>Login</b>
                  </div>
                  <div className={styles.signUpButton} onClick={()=>navigate("/sign-up")}>
                    <b className={styles.signUp}>Sign Up</b>
                  </div>
                </div>
              </div>
            </footer>
            <div className={styles.blog1}>
              <div className={styles.support1}>
                <div className={styles.wrapperTest}>
                  <img className={styles.testIcon} alt="" src="/test@2x.png" />
                </div>
                <div className={styles.careers}>
                  <div className={styles.contactus}>
                    <h1 className={styles.plan}>Plan</h1>
                    <div className={styles.ifYouDont}>
                      If you don’t like some of the recipes we planned, you can
                      swap recipes anytime. One of our 1,000 options would fits
                      your budget!
                    </div>
                  </div>
                </div>
                <div className={styles.wrapperTest1}>
                  <img
                    className={styles.testIcon1}
                    alt=""
                    src="/test-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.preferences}>
                <div className={styles.frameline}>
                  <div className={styles.wrapperTest2}>
                    <img
                      className={styles.testIcon2}
                      alt=""
                      src="/test-2@2x.png"
                    />
                  </div>
                  <div className={styles.fAQ}>
                    <div className={styles.preferencesParent}>
                      <h1 className={styles.preferences1}>Preferences</h1>
                      <div className={styles.byEnteringYour}>
                        By entering your personal preferences on your meal (e.x.
                        budget, diet restrictions, No. of meals per day), we
                        would provide you a perfect meal plan that meets your
                        standards
                      </div>
                    </div>
                    <div className={styles.budgetParent}>
                      <h1 className={styles.budget}>Budget</h1>
                      <div
                        className={styles.weWouldProvide}
                      >{`We would provide summaries & insights of your food finance based on our estimation of your meal plan, which makes budgeting so much easier.`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <NA />
          <div className={styles.emailInput}>
            <div className={styles.emailInputInner}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameParent1}>
                      <div className={styles.stayInTheLoopWithOurNewsParent}>
                        <h3 className={styles.stayInThe}>
                          Stay in the loop with our newsletter!
                        </h3>
                        <div className={styles.deineEMailAdresseParent}>
                          <div className={styles.deineEMailAdresse}>
                            Deine E-Mail Adresse
                          </div>
                          <img
                            className={styles.frameInner}
                            alt=""
                            src="/group-6.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.lineParent}>
                        <div className={styles.lineDiv} />
                        <div className={styles.stayInThe1}>
                          Subscribe to our newsletter and unlock a world of
                          exclusive benefits. Be the first to know about our
                          latest products, special promotions, and exciting
                          updates. Join our community of like-minded individuals
                          who share a passion for [your niche/industry].
                        </div>
                      </div>
                    </div>
                    <div className={styles.socialMediaLinks}>
                      <div className={styles.social}>Facebook</div>
                      <div className={styles.social1}>Instagram</div>
                      <div className={styles.social2}>Linkedin</div>
                    </div>
                  </div>
                  <div className={styles.productInfoGroup}>
                    <div className={styles.productAndInfo}>
                      <div className={styles.product2}>Product</div>
                      <div className={styles.employeeDatabaseParent}>
                        <div className={styles.employeeDatabase}>database</div>
                        <div className={styles.timeTracking}>Time tracking</div>
                        <div className={styles.recruiting}>Recruiting</div>
                      </div>
                    </div>
                    <div className={styles.productAndInfo1}>
                      <div className={styles.information2}>Information</div>
                      <div className={styles.faqParent}>
                        <div className={styles.faq}>FAQ</div>
                        <div className={styles.blog2}>Blog</div>
                        <div className={styles.support2}>Support</div>
                      </div>
                    </div>
                    <div className={styles.companyContact}>
                      <div className={styles.company}>Company</div>
                      <div className={styles.footerInfo}>
                        <div className={styles.aboutUs}>About us</div>
                        <div className={styles.careers1}>Careers</div>
                        <div className={styles.contactUs}>Contact us</div>
                        <div className={styles.hutteio}>Lift Media</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footer1}>
                  <div className={styles.allRightsReserved}>
                    © 2023 All rights reserved
                  </div>
                  <div className={styles.pricing}>
                    <div className={styles.pricing1}>Terms</div>
                    <div className={styles.pricing2}>Privacy</div>
                    <div className={styles.pricing3}>Cookies</div>
                  </div>
                  <div className={styles.frameLine}>
                    <div className={styles.socialMediaIcons}>
                      <div className={styles.facebookTwitterYouTube}>
                        <img
                          className={styles.faceBookIcon}
                          alt=""
                          src="/face-book@2x.png"
                        />
                        <img
                          className={styles.twitterIcon}
                          alt=""
                          src="/twitter@2x.png"
                        />
                        <img
                          className={styles.twitterIcon1}
                          alt=""
                          src="/twitter-11@2x.png"
                        />
                        <img
                          className={styles.youtubIcon}
                          alt=""
                          src="/youtub@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
