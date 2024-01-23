import styles from "./Youtube.module.css";

const Youtube = () => {
  return (
    <section className={styles.youtube}>
      <div className={styles.preferenceQuiz}>
        <div className={styles.frameLineParent}>
          <div className={styles.frameLine}>1</div>
          <div className={styles.budgetFriendlyMealPlanningContainer}>
            <span>
              <p className={styles.budgetFriendlyMealPlanning}>
                <b>Budget-Friendly Meal Planning</b>
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.simplemealIsTailorMade}>
                SimpleMeal is tailor-made for budget-conscious individuals. We
                understand the importance of stretching your dollar, and our app
                is designed to make it happen.
              </p>
            </span>
          </div>
        </div>
        <div className={styles.icbaselineplusParent}>
          <div className={styles.icbaselineplus}>2</div>
          <div className={styles.reduceGroceryBillsContainer}>
            <span>
              <p className={styles.reduceGroceryBills}>
                <b>Reduce Grocery Bills</b>
              </p>
              <p className={styles.blankLine1}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.withSimplemealYoullLearn}>
                <span>
                  <span>
                    With SimpleMeal, you'll learn how to plan meals that won't
                    break the bank. Say goodbye to overspending on groceries,
                    and hello to extra savings in your wallet.
                  </span>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div className={styles.onceyoucreateParent}>
          <div className={styles.onceyoucreate}>3</div>
          <div className={styles.initialStageSupportContainer}>
            <span>
              <p className={styles.initialStageSupport}>
                <b>Initial Stage Support</b>
              </p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.weSpecializeIn}>
                We specialize in guiding you through the initial stages of meal
                planning. Whether you're a beginner or a seasoned cook looking
                to cut costs, SimpleMeal has your back.
              </p>
            </span>
          </div>
        </div>
        <div className={styles.easyAndFunWhileWeFocusOnParent}>
          <div className={styles.easyAndFunContainer}>
            <span className={styles.easyAndFunContainer1}>
              <p className={styles.easyAndFun}>
                <b>Easy and Fun</b>
              </p>
              <p className={styles.blankLine3}>
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className={styles.whileWeFocusOnBudgetSavin}>
                <span>
                  <span>
                    While we focus on budget savings, we also make meal planning
                    efficient, easy, and fun. Say goodbye to the stress of
                    cooking on a budget and hello to a more enjoyable meal prep
                    experience.
                  </span>
                </span>
              </p>
            </span>
          </div>
          <div className={styles.whatifpreferencechanges}>4</div>
        </div>
        <div className={styles.deliciousRecipesOnABudgetParent}>
          <div className={styles.deliciousRecipesOnContainer}>
            <span className={styles.deliciousRecipesOnContainer1}>
              <p className={styles.deliciousRecipesOnABudget}>
                <b>Delicious Recipes on a Budget</b>
              </p>
              <p className={styles.blankLine4}>&nbsp;</p>
              <p className={styles.ourAppIs}>
                Our app is filled with a wide array of delicious and
                budget-friendly recipes. You don't have to sacrifice taste to
                save money!
              </p>
            </span>
          </div>
          <div className={styles.checkprevioushistory}>5</div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
