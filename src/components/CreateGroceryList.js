import { useMemo } from "react";
import styles from "./CreateGroceryList.module.css";

const CreateGroceryList = ({
  image10,
  swap,
  cheesePizza,
  recipe,
  image9,
  swap1,
  potatoSalad,
  recipe1,
  swap2,
  swap3,
  swap4,
  swap5,
  swap6,
  swap7,
  swap8,
  swap9,
  swap10,
  swap11,
  image101,
  swap12,
  vegetarianBurger,
  recipe2,
  swap13,
  rectangleDivPadding,
  frameDivPadding,
  rectangleDivFlex,
  frameDivPadding1,
  saturdayPadding,
  image10IconPadding,
  swapIconFlex,
  vegetarianBurgerPadding,
  propPadding,
  propFlex,
  propPadding1,
  propPadding2,
  propPadding3,
  propFlex1,
  propPadding4,
  propFlex2,
  propPadding5,
  propPadding6,
  propPadding7,
  propFlex3,
  propPadding8,
  propFlex4,
  onLoginButtonClick,
  onSwapIconClick,
  onGroupContainer1Click,
}) => {
  const dishFrameGroupStyle = useMemo(() => {
    return {
      padding: rectangleDivPadding,
    };
  }, [rectangleDivPadding]);

  const cheesePizzaFrameGroupStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const dishFrameTripleStyle = useMemo(() => {
    return {
      flex: rectangleDivFlex,
    };
  }, [rectangleDivFlex]);

  const frameDiv20Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const frameDiv21Style = useMemo(() => {
    return {
      padding: saturdayPadding,
    };
  }, [saturdayPadding]);

  const vegetarianBurgerFrameStyle = useMemo(() => {
    return {
      padding: image10IconPadding,
    };
  }, [image10IconPadding]);

  const mushroomSoupFrameStyle = useMemo(() => {
    return {
      flex: swapIconFlex,
    };
  }, [swapIconFlex]);

  const groupDiv9Style = useMemo(() => {
    return {
      padding: vegetarianBurgerPadding,
    };
  }, [vegetarianBurgerPadding]);

  const frameDiv22Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const cheesePizzaFrameStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

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

  const frameDiv24Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const frameDiv25Style = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const frameDiv26Style = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const frameDiv27Style = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const frameDiv28Style = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const frameDiv29Style = useMemo(() => {
    return {
      padding: propPadding6,
    };
  }, [propPadding6]);

  const frameDiv30Style = useMemo(() => {
    return {
      padding: propPadding7,
    };
  }, [propPadding7]);

  const frameDiv31Style = useMemo(() => {
    return {
      flex: propFlex3,
    };
  }, [propFlex3]);

  const frameDiv32Style = useMemo(() => {
    return {
      padding: propPadding8,
    };
  }, [propPadding8]);

  const frameDiv33Style = useMemo(() => {
    return {
      flex: propFlex4,
    };
  }, [propFlex4]);

  return (
    <div className={styles.createGroceryList}>
      <div className={styles.textWrapper}>
        <div className={styles.text}>
          <div className={styles.july2023Parent}>
            <b className={styles.july2023}>July 2023</b>
            <h2 className={styles.frames}>{`<  >`}</h2>
          </div>
          <button className={styles.loginButton} onClick={onLoginButtonClick}>
            <img className={styles.groupIcon} alt="" src="/vector.svg" />
            <div className={styles.createGroceryList1}>Create Grocery List</div>
          </button>
        </div>
      </div>
      <div className={styles.instanceParent}>
        <div className={styles.sundayToMondayParent}>
          <div className={styles.sundayToMonday}>
            <div className={styles.sundayToMondayChild} />
            <div className={styles.weekdays}>
              <div className={styles.sunday}> Sunday</div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <div className={styles.group}>
              <div className={styles.rectangle}>
                <b className={styles.rectangle1}>23</b>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.frame} />
                  <div className={styles.cheesePizzaFrame}>
                    <img className={styles.image10Icon} alt="" src={image10} />
                    <img
                      className={styles.swapIcon}
                      loading="eager"
                      alt=""
                      src={swap}
                      onClick={onSwapIconClick}
                    />
                  </div>
                  <div
                    className={styles.dishFrameGroup}
                    style={dishFrameGroupStyle}
                  >
                    <div className={styles.imageSwapFrame}>
                      <div className={styles.cheesePizza}>{cheesePizza}</div>
                      <div className={styles.recipe}>{recipe}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.image9Parent}>
                    <img className={styles.image9Icon} alt="" src={image9} />
                    <img className={styles.swapIcon1} alt="" src={swap1} />
                  </div>
                  <div
                    className={styles.cheesePizzaFrameGroup}
                    style={cheesePizzaFrameGroupStyle}
                  >
                    <div
                      className={styles.dishFrameTriple}
                      style={dishFrameTripleStyle}
                    >
                      <div className={styles.potatoSalad}>{potatoSalad}</div>
                      <div className={styles.recipe1}>{recipe1}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.mondayWrapper}>
              <div className={styles.monday}> Monday</div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.wrapper}>
                <b className={styles.b}>24</b>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleContainer}>
                  <div className={styles.frameInner} />
                  <div className={styles.image10Parent}>
                    <img
                      className={styles.image10Icon1}
                      alt=""
                      src="/image-10-1@2x.png"
                    />
                    <img className={styles.swapIcon2} alt="" src={swap2} />
                  </div>
                  <div className={styles.frameWrapper1} style={frameDiv20Style}>
                    <div className={styles.butterChickenRiceParent}>
                      <div className={styles.butterChickenRice}>
                        butter chicken rice
                      </div>
                      <div className={styles.recipe2}>$5.50/recipe</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.singleRecipeBoxParent}>
                    <div className={styles.singleRecipeBox} />
                    <div className={styles.image8Parent}>
                      <img
                        className={styles.image8Icon}
                        alt=""
                        src="/image-8@2x.png"
                      />
                      <img className={styles.swapIcon3} alt="" src={swap3} />
                    </div>
                    <div
                      className={styles.recipeFrameSingleWrapper}
                      style={frameDiv21Style}
                    >
                      <div className={styles.recipeFrameSingle}>
                        <div className={styles.mushroomSoup}>mushroom soup</div>
                        <div className={styles.recipe3}>$5.50/recipe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.rectangleParent1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.tuesday}> Tuesday</div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent3}>
              <div className={styles.container}>
                <b className={styles.b1}>25</b>
              </div>
              <div className={styles.frameWrapper4}>
                <div className={styles.frameParent4}>
                  <div className={styles.vegetableContainerParent}>
                    <div className={styles.vegetableContainer} />
                    <div className={styles.image10Group}>
                      <img
                        className={styles.image10Icon2}
                        alt=""
                        src="/image-10@2x.png"
                      />
                      <img className={styles.swapIcon4} alt="" src={swap4} />
                    </div>
                    <div
                      className={styles.vegetarianBurgerFrame}
                      style={vegetarianBurgerFrameStyle}
                    >
                      <div
                        className={styles.mushroomSoupFrame}
                        style={mushroomSoupFrameStyle}
                      >
                        <div
                          className={styles.vegetarianBurger}
                        >{`vegetarian burger `}</div>
                        <div className={styles.recipe4}>$6.00/recipe</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.groupDiv}
                    style={groupDiv9Style}
                    onClick={onGroupContainer1Click}
                  >
                    <div className={styles.frameChild1} />
                    <div
                      className={styles.image16Parent}
                      style={frameDiv22Style}
                    >
                      <img
                        className={styles.image16Icon}
                        alt=""
                        src="/image-16@2x.png"
                      />
                      <img className={styles.swapIcon5} alt="" src={swap5} />
                    </div>
                    <div className={styles.groupFrame}>
                      <div
                        className={styles.cheesePizzaFrame1}
                        style={cheesePizzaFrameStyle}
                      >
                        <div className={styles.cheesePizza1}>cheese pizza</div>
                        <div className={styles.recipe5}>$3.50/recipe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.wednesday}> Wednesday</div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameParent6}>
              <div className={styles.wrapper1}>
                <b className={styles.b2}>26</b>
              </div>
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
                        <img className={styles.swapIcon6} alt="" src={swap6} />
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
                        <img className={styles.swapIcon7} alt="" src={swap7} />
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
            </div>
          </div>
        </div>
        <div className={styles.frameParent8}>
          <div className={styles.rectangleParent4}>
            <div className={styles.frameChild4} />
            <div className={styles.thursday}> Thursday</div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.frameParent9}>
              <div className={styles.wrapper2}>
                <b className={styles.b3}>27</b>
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.frameWrapper10}>
                  <div className={styles.rectangleParent5}>
                    <div className={styles.frameChild5} />
                    <div className={styles.image8Group}>
                      <img
                        className={styles.image8Icon1}
                        alt=""
                        src="/image-8@2x.png"
                      />
                      <img className={styles.swapIcon8} alt="" src={swap8} />
                    </div>
                    <div
                      className={styles.frameWrapper11}
                      style={frameDiv24Style}
                    >
                      <div
                        className={styles.mushroomSoupParent}
                        style={frameDiv25Style}
                      >
                        <div className={styles.mushroomSoup1}>
                          mushroom soup
                        </div>
                        <div className={styles.recipe8}>$5.50/recipe</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild6} />
                  <div className={styles.image10Parent1}>
                    <img
                      className={styles.image10Icon4}
                      alt=""
                      src="/image-10-4@2x.png"
                    />
                    <img className={styles.swapIcon9} alt="" src={swap9} />
                  </div>
                  <div
                    className={styles.frameWrapper12}
                    style={frameDiv26Style}
                  >
                    <div
                      className={styles.cheesePizzaParent}
                      style={frameDiv27Style}
                    >
                      <div className={styles.cheesePizza2}>cheese pizza</div>
                      <div className={styles.recipe9}>$3.50/recipe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent11}>
          <div className={styles.rectangleParent7}>
            <div className={styles.frameChild7} />
            <div className={styles.friday}> Friday</div>
          </div>
          <div className={styles.frameWrapper13}>
            <div className={styles.frameParent12}>
              <div className={styles.wrapper3}>
                <b className={styles.b4}>28</b>
              </div>
              <div className={styles.frameParent13}>
                <div className={styles.rectangleParent8}>
                  <div className={styles.frameChild8} />
                  <div className={styles.image10Parent2}>
                    <img
                      className={styles.image10Icon5}
                      alt=""
                      src="/image-10-4@2x.png"
                    />
                    <img className={styles.swapIcon10} alt="" src={swap10} />
                  </div>
                  <div
                    className={styles.frameWrapper14}
                    style={frameDiv28Style}
                  >
                    <div className={styles.cheesePizzaGroup}>
                      <div className={styles.cheesePizza3}>cheese pizza</div>
                      <div className={styles.recipe10}>$3.50/recipe</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleParent9}>
                  <div className={styles.frameChild9} />
                  <div className={styles.image10Parent3}>
                    <img
                      className={styles.image10Icon6}
                      alt=""
                      src="/image-10-1@2x.png"
                    />
                    <img className={styles.swapIcon11} alt="" src={swap11} />
                  </div>
                  <div
                    className={styles.frameWrapper15}
                    style={frameDiv29Style}
                  >
                    <div className={styles.butterChickenRiceContainer}>
                      <div className={styles.butterChickenRice2}>
                        butter chicken rice
                      </div>
                      <div className={styles.recipe11}>$5.50/recipe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent14}>
          <div className={styles.rectangleParent10}>
            <div className={styles.frameChild10} />
            <div className={styles.saturday}> Saturday</div>
          </div>
          <div className={styles.frameWrapper16}>
            <div className={styles.frameParent15}>
              <div className={styles.wrapper4}>
                <b className={styles.b5}>29</b>
              </div>
              <div className={styles.frameWrapper17}>
                <div className={styles.frameParent16}>
                  <div className={styles.rectangleParent11}>
                    <div className={styles.frameChild11} />
                    <div className={styles.image10Parent4}>
                      <img
                        className={styles.image10Icon7}
                        alt=""
                        src={image101}
                      />
                      <img className={styles.swapIcon12} alt="" src={swap12} />
                    </div>
                    <div
                      className={styles.frameWrapper18}
                      style={frameDiv30Style}
                    >
                      <div
                        className={styles.vegetarianBurgerParent}
                        style={frameDiv31Style}
                      >
                        <div className={styles.vegetarianBurger1}>
                          {vegetarianBurger}
                        </div>
                        <div className={styles.recipe12}>{recipe2}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent12}>
                    <div className={styles.frameChild12} />
                    <div className={styles.image10Parent5}>
                      <img
                        className={styles.image10Icon8}
                        alt=""
                        src="/image-10@2x.png"
                      />
                      <img className={styles.swapIcon13} alt="" src={swap13} />
                    </div>
                    <div
                      className={styles.frameWrapper19}
                      style={frameDiv32Style}
                    >
                      <div
                        className={styles.vegetarianBurgerGroup}
                        style={frameDiv33Style}
                      >
                        <div
                          className={styles.vegetarianBurger2}
                        >{`vegetarian burger `}</div>
                        <div className={styles.recipe13}>$6.00/recipe</div>
                      </div>
                    </div>
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

export default CreateGroceryList;
