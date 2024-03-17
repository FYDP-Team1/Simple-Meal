import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./TopBanner3.module.css";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState('');

  const handleSelectChange = (event) => {
    const action = event.target.value;
    setSelectedAction(action);
    if (action === 'logout') {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className={styles.topBanner}>
      <img
        className={styles.topBannerChild}
        loading="eager"
        alt=""
        src="/star-224.svg"
      />
      <img className={styles.topBannerItem} alt="" src="/star-23.svg" />
      <img className={styles.topBannerInner} alt="" src="/star-24.svg" />
      <div className={styles.rectangleWrapper} onClick={()=> navigate('/')}>
        <div className={styles.rectangle}>
          <div className={styles.text}>
            <div className={styles.vectorParent}>
              <img
                className={styles.frameChild}
                loading="eager"
                alt=""
                src="/star-27.svg"
              />
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/star-284.svg"
              />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangle1}>
                <div className={styles.rectangle2}>
                  <div className={styles.text1}>
                    <div className={styles.s}>S</div>
                    <img
                      className={styles.textChild}
                      alt=""
                      src="/star-25.svg"
                    />
                  </div>
                  <div className={styles.rectangleChild} />
                  <div className={styles.rectangleItem} />
                </div>
              </div>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className={styles.frameInner}
                  loading="eager"
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.vectorIcon}
                  loading="eager"
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="eager"
                  alt=""
                  src="/star-21.svg"
                />
                <img className={styles.frameChild1} alt="" src="/star-26.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frameParent} 
            onClick={()=> navigate('/')}>
            <div className={styles.frameWrapper}>
              <div className={styles.simpleParent}>
                <h2 className={styles.simple}>SIMPLE</h2>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameChild2} />
              </div>
            </div>
            <div className={styles.mealWrapper}>
              <h2 className={styles.meal}>MEAL</h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBanner;
