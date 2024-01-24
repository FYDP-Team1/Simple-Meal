import React, { useState } from "react";
import styles from "./NA.module.css";

const NA = () => {
  const [isExpanded, setIsExpanded] = useState([
    false, // For "How does the recipe price estimation work?"
    false, // For "What if my preference changes?"
    false, // For "Can I choose to not do the preference quiz?"
    false, // For "Would I have an option to see all the recipes SimpleMeal have?"
    false, // For "Where can I check my previous history of the budgets I inputed?"
  ]);

  const toggleExpansion = (index) => {
    setIsExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className={styles.nA}>
      <div className={styles.nA1}>
        <h1 className={styles.faq}>FAQ</h1>
        <div className={styles.fAQDetails}>
          <div className={styles.nA2} onClick={() => toggleExpansion(0)}>
            <img
              className={`${styles.icbaselinePlusIcon} ${
                isExpanded[0] ? styles.expandedIcon : ""
              }`}
              alt=""
              src="/icbaselineplus.svg"
            />
            <b className={styles.howDoesThe}>
              How does the recipe price estimation work?
            </b>
          </div>
          {isExpanded[0] && (
            <div className={styles.accountOptions}>
              idk
            </div>
          )}

          <div className={styles.nA2} onClick={() => toggleExpansion(1)}>
            <img
              className={`${styles.icbaselinePlusIcon} ${
                isExpanded[1] ? styles.expandedIcon : ""
              }`}
              alt=""
              src="/icbaselineplus.svg"
            />
            <b className={styles.howDoesThe}>What if my preference changes?</b>
          </div>
          {isExpanded[1] && (
            <div className={styles.accountOptions}>
              
                Once you create an account, you can always redo the preference quiz from the home page to adjust your expectations.
              
            </div>
          )}

          <div className={styles.nA2} onClick={() => toggleExpansion(2)}>
            <img
              className={`${styles.icbaselinePlusIcon} ${
                isExpanded[2] ? styles.expandedIcon : ""
              }`}
              alt=""
              src="/icbaselineplus.svg"
            />
            <b className={styles.howDoesThe}>
              Can I choose to not do the preference quiz?
            </b>
          </div>
          {isExpanded[2] && (
            <div className={styles.accountOptions}>
             no
            </div>
          )}

          <div className={styles.nA2} onClick={() => toggleExpansion(3)}>
            <img
              className={`${styles.icbaselinePlusIcon} ${
                isExpanded[3] ? styles.expandedIcon : ""
              }`}
              alt=""
              src="/icbaselineplus.svg"
            />
            <b className={styles.howDoesThe}>
              Would I have an option to see all the recipes SimpleMeal have?
            </b>
          </div>
          {isExpanded[3] && (
            <div className={styles.accountOptions}>
              {/* Expanded content for "Would I have an option to see all the recipes SimpleMeal have?" */}
              {/* Add your content here */}
            </div>
          )}

          <div className={styles.nA2} onClick={() => toggleExpansion(4)}>
            <img
              className={`${styles.icbaselinePlusIcon} ${
                isExpanded[4] ? styles.expandedIcon : ""
              }`}
              alt=""
              src="/icbaselineplus.svg"
            />
            <b className={styles.howDoesThe}>
              Where can I check my previous history of the budgets I inputed?
            </b>
          </div>
          {isExpanded[4] && (
            <div className={styles.accountOptions}>
              {/* Expanded content for "Where can I check my previous history of the budgets I inputed?" */}
              {/* Add your content here */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NA;
