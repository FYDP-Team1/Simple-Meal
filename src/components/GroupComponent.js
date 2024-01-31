import styles from "./GroupComponent.module.css";
import { useNavigate } from "react-router-dom";

const GroupComponent = () => {
  const navigate = useNavigate();

  return (
    <form className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rememberMe}>Remember me</div>
      <div className={styles.forgot}>Forgot?</div>
      <h1 className={styles.signUp}>Sign up</h1>
      <input className={styles.frameItem} placeholder="Username" type="text" />
      <input className={styles.frameInner} placeholder="Password" type="text" />
      <button className={styles.signUpButton}>
        <b className={styles.signUp1}>Next</b>
      </button>
      <div className={styles.alreadyAMemberContainer}>
        <span className={styles.alreadyAMemberContainer1}>
          <span className={styles.alreadyAMember} >{`Already a member? `}</span>
          <span className={styles.logIn} onClick={() => navigate('/log-in')}>Log in</span>
        </span>
      </div>
      <img
        className={styles.richeckboxFillIcon}
        loading="eager"
        alt=""
        src="/richeckboxfill.svg"
      />
      <div className={styles.pricing}>Terms</div>
      <div className={styles.pricing1}>Privacy</div>
      <div className={styles.pricing2}>Cookies</div>
    </form>
  );
};

export default GroupComponent;
