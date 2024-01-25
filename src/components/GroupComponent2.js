import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = () => {
  const navigate = useNavigate();

  const onEditButtonContainerClick = useCallback(() => {
    navigate("/grocery-lists-3");
  }, [navigate]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.groceryListFrame}>
        <div className={styles.cancelButtonFrame}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.new}>New</div>
          </div>
        </div>
        <div className={styles.inputGroupFrame}>
          <h2 className={styles.groceryList01}>Grocery List 01</h2>
          <div className={styles.groceryItemText}>
            <div className={styles.backButton}>
              <img
                className={styles.backButtonChild}
                loading="eager"
                alt=""
                src="/group-435.svg"
              />
            </div>
            <div className={styles.cancelButton}>
              <img
                className={styles.cancelButtonChild}
                loading="eager"
                alt=""
                src="/group-477.svg"
              />
            </div>
            <div
              className={styles.editButton}
              onClick={onEditButtonContainerClick}
            >
              <img
                className={styles.profileFrameIcon}
                loading="eager"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.userNameText}>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.foodItemFrame}>
            <div className={styles.foodNameText}>
              <b className={styles.x}>X</b>
              <img
                className={styles.foodNameTextChild}
                loading="eager"
                alt=""
                src="/group-507.svg"
              />
            </div>
            <b className={styles.yeast}>yeast</b>
          </div>
          <div className={styles.flourFrame}>
            <div className={styles.teaSpoon}>1 tea spoon</div>
            <img
              className={styles.flourFrameChild}
              loading="eager"
              alt=""
              src="/group-27027.svg"
            />
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.potatoGroupFrame}>
            <img
              className={styles.potatoGroupFrameChild}
              alt=""
              src="/group-507-1.svg"
            />
            <b className={styles.flour}>flour</b>
          </div>
          <div className={styles.topBanner}>
            <div className={styles.groceryItem}>
              <div className={styles.g}>200 g</div>
            </div>
            <img
              className={styles.topBannerChild}
              alt=""
              src="/group-27027.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <div className={styles.potatoes}>
            <img
              className={styles.potatoesChild}
              alt=""
              src="/group-507-1.svg"
            />
            <b className={styles.cheese}>cheese</b>
          </div>
          <div className={styles.breadItems}>
            <div className={styles.g1}>200 g</div>
            <img
              className={styles.breadItemsChild}
              alt=""
              src="/group-27027.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameChild2} />
          <div className={styles.cornmeal}>
            <img
              className={styles.cornmealChild}
              alt=""
              src="/group-507-3.svg"
            />
            <b className={styles.cornmeal1}>cornmeal</b>
          </div>
          <div className={styles.teaSpoon1}>1 tea spoon</div>
          <img className={styles.groupIcon} alt="" src="/group-27027-3.svg" />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild3} />
          <div className={styles.chickenItem}>
            <img
              className={styles.chickenItemChild}
              alt=""
              src="/group-507-4.svg"
            />
            <b className={styles.potato}>potato</b>
          </div>
          <div className={styles.groceriesList}>
            <div className={styles.backbutton}>
              <div className={styles.g2}>100 g</div>
            </div>
            <img
              className={styles.groceriesListChild}
              alt=""
              src="/group-27027.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.frameChild4} />
          <div className={styles.meatGroup}>
            <img
              className={styles.meatGroupChild}
              alt=""
              src="/group-507-5.svg"
            />
            <b className={styles.chicken}>chicken</b>
          </div>
          <div className={styles.cheeseItem}>
            <div className={styles.g3}>350 g</div>
            <img
              className={styles.cheeseItemChild}
              alt=""
              src="/group-27027-5.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild5} />
          <div className={styles.potatoFrame}>
            <img
              className={styles.potatoFrameChild}
              alt=""
              src="/group-507-6.svg"
            />
            <b className={styles.mushroom}>mushroom</b>
          </div>
          <div className={styles.gParent}>
            <div className={styles.g4}>100 g</div>
            <img className={styles.frameChild6} alt="" src="/group-27027.svg" />
          </div>
        </div>
        <div className={styles.bakeryItems}>
          <div className={styles.rectangleParent6}>
            <div className={styles.frameChild7} />
            <div className={styles.frameParent}>
              <img
                className={styles.frameChild8}
                alt=""
                src="/group-507-7.svg"
              />
              <b className={styles.bread}>bread</b>
            </div>
            <div className={styles.gGroup}>
              <div className={styles.g5}>100 g</div>
              <img
                className={styles.frameChild9}
                alt=""
                src="/group-27027.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.ingredientFrame}>
          <div className={styles.ingredientFrameChild} />
          <div className={styles.vegetableFrame}>
            <img
              className={styles.vegetableFrameChild}
              alt=""
              src="/group-507-8.svg"
            />
            <b className={styles.onion}>onion</b>
          </div>
          <div className={styles.cancelButton1}>
            <div className={styles.editButton1}>
              <div className={styles.g6}>30 g</div>
              <img
                className={styles.editButtonChild}
                alt=""
                src="/group-27027-8.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.total717}>Total $71.7</h2>
    </div>
  );
};

export default GroupComponent2;
