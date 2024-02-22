
import styles from "./CreateGroceryList.module.css";
import { useMemo } from "react";

const CardForRecipie = () =>{
    let propPadding1 = 3;
    let propPadding2 = 3;
    const butterChickenRiceFrameStyle = useMemo(() => {
        return {
          padding: propPadding1,
        };
      }, [propPadding1]);
    const frameDiv23Style = useMemo(() => {
        return {
          padding: propPadding2,
        };
      }, [propPadding2]);

    return(
        <div className={styles.frameWrapper6}>
        <div className={styles.frameWrapper7}>
          <div className={styles.frameParent7}>
            <div className={styles.potatoRectangleParent}>
              <div className={styles.potatoRectangle} />
              <div className={styles.swapImageFrame}>
                <img
                  className={styles.image9Icon1}
                  alt=""
                  src="/image-9@2x.png"
                />
                <img className={styles.swapIcon6} alt="" />
              </div>
              <div
                className={styles.butterChickenRiceFrame}
                style={butterChickenRiceFrameStyle}
              >
                <div className={styles.recipeFrame}>
                  <div className={styles.potatoSalad1}>
                    potato salad
                  </div>
                  <div className={styles.recipe6}>$5.00/recipe</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild3} />
              <div className={styles.image10Container}>
                <img
                  className={styles.image10Icon3}
                  alt=""
                  src="/image-10-1@2x.png"
                />
                <img className={styles.swapIcon7} alt="" />
              </div>
              <div
                className={styles.frameWrapper8}
                style={frameDiv23Style}
              >
                <div className={styles.butterChickenRiceGroup}>
                  <div className={styles.butterChickenRice1}>
                    butter chicken rice
                  </div>
                  <div className={styles.recipe7}>$5.50/recipe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
};
export default CardForRecipie;