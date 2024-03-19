import styles from "./StarsFrame.module.css";

const StarsFrame = () => {
  return (
    <div className={styles.starsFrame}>
      <div className={styles.loginFrame}>
        <img className={styles.burgerIcon} alt="" src="/burger-1@2x.png" />
      </div>
    </div>
  );
};

export default StarsFrame;
