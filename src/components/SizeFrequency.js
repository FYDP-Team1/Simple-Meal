import styles from "./SizeFrequency.module.css";

const SizeFrequency = () => {
  return (
    <div className={styles.sizeFrequency}>
      <div className={styles.line}>
        <div className={styles.groupFrame}>
          <div className={styles.frameParent}>
            <div className={styles.frame}>1</div>
            <div className={styles.textFrame} />
          </div>
          <img
            className={styles.groupFrameIcon}
            loading="eager"
            alt=""
            src="/line-211.svg"
          />
          <div className={styles.parent}>
            <div className={styles.div}>2</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.ellipse} />
          <div className={styles.group}>
            <div className={styles.div1}>3</div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.ellipse1} />
          <div className={styles.container}>
            <div className={styles.div2}>4</div>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.ellipse2} />
          <div className={styles.groupDiv}>
            <div className={styles.div3}>5</div>
            <div className={styles.ellipseDiv} />
          </div>
        </div>
      </div>
      <div className={styles.textFrame1}>
        <div className={styles.textFrameInner}>
          <div className={styles.cuisineWrapper}>
            <div className={styles.cuisine}>Cuisine</div>
          </div>
        </div>
        <div className={styles.textFrameChild}>
          <div className={styles.dietaryWrapper}>
            <div className={styles.dietary}>Dietary</div>
          </div>
        </div>
        <div className={styles.textFrame2}>
          <div className={styles.sizeFrequencyWrapper}>
            <div className={styles.sizeFrequencyContainer}>
              <span>
                <p className={styles.size}>{`Size &`}</p>
                <p className={styles.frequency}>Frequency</p>
              </span>
            </div>
          </div>
          <div className={styles.timeComplexityWrapper}>
            <div className={styles.timeComplexity}>{`Time & Complexity`}</div>
          </div>
        </div>
        <div className={styles.budgetWrapper}>
          <div className={styles.budget}>Budget</div>
        </div>
      </div>
    </div>
  );
};

export default SizeFrequency;
