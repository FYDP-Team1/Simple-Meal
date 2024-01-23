import styles from "./NA.module.css";

const NA = () => {
  return (
    <section className={styles.nA}>
      <div className={styles.nA1}>
        <h1 className={styles.faq}>FAQ</h1>
        <div className={styles.fAQDetails}>
          <div className={styles.nA2}>
            <img
              className={styles.icbaselinePlusIcon}
              alt=""
              src="/icbaselineplus.svg"
            />
            <b className={styles.howDoesThe}>
              How does the recipe price estimation work?
            </b>
          </div>
          <div className={styles.accountOptions}>
            <div className={styles.frameline}>
              <div className={styles.framelineChild} />
            </div>
            <div className={styles.userHistory}>
              <div className={styles.preferenceChange}>
                <img
                  className={styles.gridiconscross}
                  alt=""
                  src="/gridiconscross.svg"
                />
                <b className={styles.whatIfMy}>
                  What if my preference changes?
                </b>
              </div>
              <div className={styles.onceYouCreateAccount}>
                <div
                  className={styles.onceYouCreate}
                >{`Once you create an account, you can always redo the preference quiz from home page to adjust your expectations. `}</div>
              </div>
            </div>
            <div className={styles.frameline1}>
              <div className={styles.framelineItem} />
            </div>
            <div className={styles.frameline2}>
              <div className={styles.skipIcon}>
                <img
                  className={styles.icbaselinePlusIcon1}
                  alt=""
                  src="/icbaselineplus-1.svg"
                />
                <b className={styles.canIChoose}>
                  Can I choose to not do the preference quiz?
                </b>
              </div>
              <div className={styles.informationalLine}>
                <div className={styles.preferenceQuizInfo} />
                <div className={styles.preferenceQuizInfo1} />
              </div>
              <div className={styles.skipIcon1}>
                <img
                  className={styles.icbaselinePlusIcon2}
                  alt=""
                  src="/icbaselineplus-2.svg"
                />
                <b className={styles.wouldIHave}>
                  Would I have an option to see all the recipes SimpleMeal have?
                </b>
              </div>
              <div className={styles.createAccount} />
            </div>
            <div className={styles.previousHistory}>
              <img
                className={styles.icbaselinePlusIcon3}
                alt=""
                src="/icbaselineplus-3.svg"
              />
              <b className={styles.whereCanI}>
                Where can I check my previous history of the budgets I inputed?
              </b>
            </div>
            <div className={styles.iCBaselinePlusQ} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NA;
