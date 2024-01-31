import styles from "./TimeComplexity.module.css";

const TimeComplexity = () => {
  return (
    <div className={styles.timeComplexity}>
      <div className={styles.ellipseGroup}>
        <div className={styles.lineGroup}>
          <div className={styles.cuisineInstanceParent}>
            <div className={styles.cuisineInstance}>1</div>
            <div className={styles.dietaryInstance} />
          </div>
          <img
            className={styles.sizeFrequencyInstance}
            loading="eager"
            alt=""
            src="/line-213.svg"
          />
          <div className={styles.parent}>
            <div className={styles.div}>2</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.groupInstance} />
          <div className={styles.group}>
            <div className={styles.div1}>3</div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.groupInstance1} />
          <div className={styles.container}>
            <div className={styles.div2}>4</div>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.groupInstance2} />
          <div className={styles.groupDiv}>
            <div className={styles.div3}>5</div>
            <div className={styles.ellipseDiv} />
          </div>
        </div>
      </div>
      <div className={styles.timeComplexityInstance}>
        <div className={styles.timeComplexityInstanceInner}>
          <div className={styles.cuisineWrapper}>
            <div className={styles.cuisine}>Cuisine</div>
          </div>
        </div>
        <div className={styles.timeComplexityInstanceChild}>
          <div className={styles.dietaryWrapper}>
            <div className={styles.dietary}>Dietary</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.sizeFrequencyWrapper}>
            <div className={styles.sizeFrequencyContainer}>
              <span>
                <p className={styles.size}>{`Size &`}</p>
                <p className={styles.frequency}>Frequency</p>
              </span>
            </div>
          </div>
          <div className={styles.timeComplexityWrapper}>
            <div className={styles.timeComplexity1}>{`Time & Complexity`}</div>
          </div>
        </div>
        <div className={styles.budgetWrapper}>
          <div className={styles.budget}>Budget</div>
        </div>
      </div>
    </div>
  );
};

export default TimeComplexity;
