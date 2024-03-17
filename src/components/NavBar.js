import styles from "./NavBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import TopBanner3 from "../components/TopBanner3";

function NavBar({ onGroupIcon1Click, onGroupIcon3Click }) {
  const username = localStorage.getItem("username");
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
      <TopBanner3 />
      <div className={styles.butterChickenRiceFrame}>
        <div className={styles.myMealPlan}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="eager"
              alt=""
              src="/group-286.svg" />
            <div className={styles.weekdayFrameQuintet} />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainerWrapper}>
              <div className={styles.frameContainer} />
            </div>
            <div className={styles.frameItem} />
          </div>
          <img
            className={styles.myMealPlanChild}
            loading="eager"
            alt=""
            src="/group-27032.svg"
            onClick={onGroupIcon1Click} />
          <img
            className={styles.myMealPlanItem}
            loading="eager"
            alt=""
            src="/group-27033.svg" />
          <img
            className={styles.myMealPlanInner}
            loading="eager"
            alt=""
            src="/group-4961.svg"
            onClick={onGroupIcon3Click} />
        </div>
      </div>
      <div className={styles.mealSelectionFrame}>
        <img
          className={styles.mealSelectionFrameChild}
          loading="eager"
          alt=""
          src="/group-27043.svg" />
        <img
          className={styles.mealSelectionFrameItem}
          loading="eager"
          alt=""
          src="/group-490.svg" />
        <div className={styles.userNameImage}>
          <img className={styles.usereNameImageIcon} alt="" src="/image-39@2x.png" />
          <div className={styles.recipePair}>
            <div className={styles.dishTriple}>
              <div className={styles.userName}>{username}</div>
              <div className={styles.imageDuo}>
                <img className={styles.vIcon} alt="" src="/vicon.svg" />
              </div>
            </div>
            <Form.Select
              className={styles.frameFormselect}
              value={selectedAction}
              onChange={handleSelectChange}
            >

              <option value=""></option>
              <option value="home">Home</option>
              <option value="logout">Logout</option>
              {/* Add other options as needed */}
            </Form.Select>
            {/* <div className={styles.weekdayFrameTrio}> */}
            {/* <div className={styles.vegan}>VEGAN</div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
