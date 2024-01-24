import styles from "./StarsFrame.module.css";

const StarsFrame = () => {
  return (
    <div className={styles.starsFrame}>
      <img className={styles.starsFrameChild} alt="" src="/star-24.svg" />
      <img
        className={styles.starsFrameItem}
        loading="eager"
        alt=""
        src="/star-27.svg"
      />
      <div className={styles.loginFrame}>
        <img className={styles.burgerIcon} alt="" src="/burger-1@2x.png" />
        <img
          className={styles.loginFrameChild}
          loading="eager"
          alt=""
          src="/star-22.svg"
        />
        <img
          className={styles.loginFrameItem}
          loading="eager"
          alt=""
          src="/star-23.svg"
        />
        <img className={styles.loginFrameInner} alt="" src="/star-25.svg" />
        <img
          className={styles.starIcon}
          loading="eager"
          alt=""
          src="/star-28.svg"
        />
        <img
          className={styles.loginFrameChild1}
          loading="eager"
          alt=""
          src="/star-26.svg"
        />
      </div>
    </div>
  );
};

export default StarsFrame;
