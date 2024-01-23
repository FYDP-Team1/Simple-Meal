import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  tuesday,
  prop,
  image10,
  vegetarianBurger,
  recipe,
  image16,
  cheesePizza,
  recipe1,
  propLeft,
  propPadding,
  propPadding1,
  propPadding2,
}) => {
  const tuesdayStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const comboContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.tuesday} style={tuesdayStyle}>
          {tuesday}
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <b className={styles.b}>{prop}</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.mushroomSoupText}>
                  <img className={styles.image10Icon} alt="" src={image10} />
                  <img className={styles.swapIcon} alt="" src="/swap.svg" />
                </div>
                <div
                  className={styles.comboContainer}
                  style={comboContainerStyle}
                >
                  <div className={styles.recipe}>
                    <div className={styles.vegetarianBurger}>
                      {vegetarianBurger}
                    </div>
                    <div className={styles.recipe1}>{recipe}</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleContainer} style={groupDivStyle}>
                <div className={styles.frameInner} />
                <div className={styles.image16Parent}>
                  <img className={styles.image16Icon} alt="" src={image16} />
                  <img className={styles.swapIcon1} alt="" src="/swap.svg" />
                </div>
                <div className={styles.frameWrapper1} style={frameDiv1Style}>
                  <div className={styles.cheesePizzaParent}>
                    <div className={styles.cheesePizza}>{cheesePizza}</div>
                    <div className={styles.recipe2}>{recipe1}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
