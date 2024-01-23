import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/home-create-grocery-list-1");
  }, [navigate]);

  return (
    <form className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.cheesePizza350recipeParent}>
        <h2 className={styles.cheesePizza350recipeContainer}>
          <span className={styles.cheesePizza350recipeContainer1}>
            <span
              className={styles.cheesePizza}
            >{`Cheese Pizza                                                    `}</span>
            <span className={styles.recipe}>{` $3.50/recipe `}</span>
          </span>
        </h2>
        <div className={styles.prepTime10Container}>
          <span className={styles.prepTime10Container1}>
            <span className={styles.prepTime}>{`Prep time: `}</span>
            <b className={styles.mins}>{`10 mins `}</b>
            <span
              className={styles.cookingTine}
            >{`       Cooking tine: `}</span>
            <b className={styles.mins1}>{`8 mins `}</b>
            <span
              className={styles.levelOfDifficulty}
            >{`       Level of difficulty: `}</span>
            <b className={styles.medium}>Medium</b>
          </span>
        </div>
        <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
        <img className={styles.frameItem} loading="eager" alt="" />
        <b className={styles.ingredients}>Ingredients</b>
        <div className={styles.ingredients1}>
          <div className={styles.ingredients2}>
            <div className={styles.table}>
              <div className={styles.cell}>
                <div className={styles.content}>
                  <div className={styles.text}>Yeast</div>
                </div>
              </div>
              <div className={styles.cell1}>
                <div className={styles.content1}>
                  <div className={styles.text1}>Water</div>
                </div>
              </div>
              <div className={styles.cell2}>
                <div className={styles.content2}>
                  <div className={styles.text2}>1 tea spoon</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content3}>
                  <div className={styles.text3}>150 ml</div>
                </div>
              </div>
              <div className={styles.cell4}>
                <div className={styles.content4}>
                  <div className={styles.text4}>$ 0.10</div>
                </div>
              </div>
              <div className={styles.cell5}>
                <div className={styles.content5}>
                  <div className={styles.text5}>$ 0.10</div>
                </div>
              </div>
              <div className={styles.cell6}>
                <div className={styles.content6}>
                  <div className={styles.text6}>Flour</div>
                </div>
              </div>
              <div className={styles.cell7}>
                <div className={styles.content7}>
                  <div className={styles.text7}>Oil</div>
                </div>
              </div>
              <div className={styles.cell8}>
                <div className={styles.content8}>
                  <div className={styles.text8}>200 g</div>
                </div>
              </div>
              <div className={styles.cell9}>
                <div className={styles.content9}>
                  <div className={styles.text9}>30 ml</div>
                </div>
              </div>
              <div className={styles.cell10}>
                <div className={styles.content10}>
                  <div className={styles.text10}>$ 0.20</div>
                </div>
              </div>
              <div className={styles.cell11}>
                <div className={styles.content11}>
                  <div className={styles.text11}>$ 0.10</div>
                </div>
              </div>
              <div className={styles.cell12}>
                <div className={styles.content12}>
                  <div className={styles.text12}>Salt</div>
                </div>
              </div>
              <div className={styles.cell13}>
                <div className={styles.content13}>
                  <div className={styles.text13}>Cheese</div>
                </div>
              </div>
              <div className={styles.cell14}>
                <div className={styles.content14}>
                  <div className={styles.text14}>1 g</div>
                </div>
              </div>
              <div className={styles.cell15}>
                <div className={styles.content15}>
                  <div className={styles.text15}>10 g</div>
                </div>
              </div>
              <div className={styles.cell16}>
                <div className={styles.content16}>
                  <div className={styles.text16}>$ 0.10</div>
                </div>
              </div>
              <div className={styles.cell17}>
                <div className={styles.content17}>
                  <div className={styles.text17}>$ 2.80</div>
                </div>
              </div>
              <div className={styles.cell18}>
                <div className={styles.content18}>
                  <div className={styles.text18}>Cornmeal</div>
                </div>
              </div>
              <div className={styles.cell19}>
                <div className={styles.content19}>
                  <div className={styles.text19}>1 tea spoon</div>
                </div>
              </div>
              <div className={styles.cell20}>
                <div className={styles.content20}>
                  <div className={styles.text20}>$ 0.10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameInner} loading="eager" alt="" />
        <b className={styles.procedures}>Procedures</b>
        <div className={styles.preheatYourOvenContainer}>
          <span className={styles.preheatYourOvenContainer1}>
            <ul className={styles.preheatYourOvenPreheatYou}>
              <li className={styles.preheatYourOven}>
                Preheat your oven: Preheat your oven to the recommended
                temperature for pizza (usually around 475°F or as per the dough
                instructions).
              </li>
              <li className={styles.rollOutThe}>
                Roll out the dough: Roll out your pizza dough on a lightly
                floured surface to your desired thickness. You can use a rolling
                pin to shape it into a circle or rectangle.
              </li>
              <li className={styles.prepareThePizza}>
                Prepare the pizza pan: Grease a pizza pan or baking sheet with a
                little olive oil. You can also use a pizza stone if you have
                one, but be sure to preheat it in the oven.
              </li>
              <li className={styles.transferTheDough}>
                Transfer the dough: Carefully transfer the rolled-out dough to
                the prepared pizza pan. If you're using a pizza peel or baking
                stone, you can assemble the pizza on a piece of parchment paper
                for easy transfer.
              </li>
              <li className={styles.addTheSauce}>
                Add the sauce: Spoon pizza sauce onto the dough and use the back
                of the spoon to spread it evenly, leaving a small border around
                the edges for the crust.
              </li>
              <li className={styles.sprinkleWithCheese}>
                Sprinkle with cheese: Generously sprinkle the shredded
                mozzarella cheese over the sauce. You can use as much or as
                little cheese as you like, depending on your preference.
              </li>
              <li className={styles.seasonAndDrizzle}>
                Season and drizzle: Optionally, sprinkle a pinch of dried
                oregano, salt, and pepper over the cheese. Drizzle a little
                olive oil over the top for extra flavor.
              </li>
              <li className={styles.bakeThePizza}>
                Bake the pizza: Place the pizza in the preheated oven and bake
                for about 12-15 minutes, or until the crust is golden and the
                cheese is bubbly and slightly browned.
              </li>
              <li className={styles.sliceAndServe}>
                Slice and serve: Once your cheese pizza is done, remove it from
                the oven, let it cool for a minute, then slice it into wedges or
                squares. Enjoy your homemade cheese pizza!
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.feelFreeTo}>
              Feel free to customize your cheese pizza with additional toppings
              like pepperoni, mushrooms, onions, or bell peppers if you like.
              Just add these ingredients after the sauce and before the cheese.
            </p>
          </span>
        </div>
      </div>
      <div className={styles.loginButtonWithArrow}>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          <img
            className={styles.loginButtonChild}
            alt=""
            src="/group-93@2x.png"
          />
          <div className={styles.backToMeal}>Back to meal plan</div>
        </button>
        <div className={styles.loginButton1}>
          <img
            className={styles.arrowArrowReloadOuntercl}
            alt=""
            src="/arrow--arrow-reload-ounterclockwise.svg"
          />
          <input
            className={styles.swapToOther}
            placeholder="Swap to other recipes"
            type="text"
          />
        </div>
      </div>
    </form>
  );
};

export default FrameComponent1;
