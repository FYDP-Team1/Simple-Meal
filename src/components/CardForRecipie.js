import styles from "./CreateGroceryList.module.css";
import { useMemo } from "react";

const CardForRecipie = ({ items }) => {
  let propPadding1 = 3;
  const butterChickenRiceFrameStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.frameWrapper6}>
      <div className={styles.frameWrapper7}>
        <div className={styles.frameParent7}>
          {items &&
            items.map((item) => (
              <div className={styles.potatoRectangleParent} key={item.id}>
                <div className={styles.potatoRectangle} />
                <div className={styles.swapImageFrame}>
                  <img
                    className={styles.image9Icon1}
                    alt=""
                    src="/image-9@2x.png"
                  />
                  {/* <img className={styles.swapIcon6} alt="" /> */}
                </div>
                <div
                  className={styles.butterChickenRiceFrame}
                  style={butterChickenRiceFrameStyle}
                >
                  <div className={styles.recipeFrame}>
                    <div className={styles.potatoSalad1}>{item.name}</div>
                    <div className={styles.recipe6}>{(item.cost).toFixed(2)}/meal</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CardForRecipie;
