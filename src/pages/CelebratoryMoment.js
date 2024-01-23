import styles from "./CelebratoryMoment.module.css";

const CelebratoryMoment = () => {
  return (
    <div className={styles.celebratoryMoment}>
      <div className={styles.celebratoryMomentChild} />
      <div className={styles.parent}>
        <h1 className={styles.h1}>🎉</h1>
        <div className={styles.welcomeOnBoardContainer}>
          <span>
            <p className={styles.welcomeOnBoard}>
              <b>Welcome on board!</b>
            </p>
            <p className={styles.readyToStart}>Ready to start meal planning?</p>
          </span>
        </div>
      </div>
      <button className={styles.welcomeFrame}>
        <div className={styles.welcomeFrameChild} />
        <b className={styles.letsGo}>Let’s go!</b>
      </button>
    </div>
  );
};

export default CelebratoryMoment;
