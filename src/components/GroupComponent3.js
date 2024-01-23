import { useMemo } from "react";
import styles from "./GroupComponent3.module.css";

const GroupComponent3 = ({
  water,
  ml,
  flour,
  oil,
  g,
  salt,
  g1,
  cheese,
  g2,
  cornmeal,
  teaSpoon,
  potato,
  chicken,
  g3,
  total72,
  simpleMealTextBorder,
  cornmealPadding,
  groupDivWidth,
  rectangleDivHeight,
  rectangleDivDisplay,
  rectangleDivAlignSelf,
  frameDivPadding,
  frameDivPadding1,
  propPadding,
  propHeight,
  propDisplay,
  propPadding1,
  propPadding2,
  propPadding3,
  propDisplay1,
  propHeight1,
  propPadding4,
  onEditButtonContainerClick,
  showBackgroundRect,
}) => {
  const editButtonStyle = useMemo(() => {
    return {
      border: simpleMealTextBorder,
    };
  }, [simpleMealTextBorder]);

  const groupDiv2Style = useMemo(() => {
    return {
      padding: cornmealPadding,
    };
  }, [cornmealPadding]);

  const gStyle = useMemo(() => {
    return {
      width: groupDivWidth,
    };
  }, [groupDivWidth]);

  const mlStyle = useMemo(() => {
    return {
      height: rectangleDivHeight,
      display: rectangleDivDisplay,
      alignSelf: rectangleDivAlignSelf,
    };
  }, [rectangleDivHeight, rectangleDivDisplay, rectangleDivAlignSelf]);

  const groupDiv3Style = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const groupDiv4Style = useMemo(() => {
    return {
      padding: frameDivPadding1,
    };
  }, [frameDivPadding1]);

  const groupDiv5Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const saltStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const groupDiv6Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const groupDiv7Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const groupDiv8Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const potatoStyle = useMemo(() => {
    return {
      display: propDisplay1,
      height: propHeight1,
    };
  }, [propDisplay1, propHeight1]);

  const totalStyle = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.groceryList}>
        <div className={styles.input}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.new}>New</div>
          </div>
        </div>
        <div className={styles.topBanner}>
          <h2 className={styles.groceryList01}>Grocery List 01</h2>
          <div
            className={styles.editButton}
            onClick={onEditButtonContainerClick}
            style={editButtonStyle}
          >
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <img
                className={styles.vectorIcon}
                loading="eager"
                alt=""
                src="/vector1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.myGroceryList}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.mL}>
            <b className={styles.yeast}>yeast</b>
          </div>
          <div className={styles.teaSpoon}>1 tea spoon</div>
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group-27027.svg"
          />
        </div>
        <div className={styles.rectangleParent1} style={groupDiv2Style}>
          <div className={styles.frameChild1} />
          <div className={styles.oil}>
            <b className={styles.water}>{water}</b>
          </div>
          <div className={styles.gParent}>
            <div className={styles.g} style={gStyle}>
              <div className={styles.ml} style={mlStyle}>
                {ml}
              </div>
            </div>
            <img className={styles.frameChild2} alt="" src="/group-27027.svg" />
          </div>
        </div>
        <div className={styles.rectangleParent2} style={groupDiv3Style}>
          <div className={styles.frameChild3} />
          <b className={styles.flour}>{flour}</b>
          <div className={styles.gGroup}>
            <div className={styles.g1}>200 g</div>
            <img className={styles.frameChild4} alt="" src="/group-27027.svg" />
          </div>
        </div>
        <div className={styles.rectangleParent3} style={groupDiv4Style}>
          <div className={styles.frameChild5} />
          <b className={styles.oil1}>{oil}</b>
          <div className={styles.oilGroup}>
            <div className={styles.g2}>{g}</div>
            <img
              className={styles.oilGroupChild}
              alt=""
              src="/group-27027-3.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent4} style={groupDiv5Style}>
          <div className={styles.frameChild6} />
          <b className={styles.salt} style={saltStyle}>
            {salt}
          </b>
          <div className={styles.topBannerText}>
            <div className={styles.simpleMealText}>
              <div className={styles.g3}>{g1}</div>
            </div>
            <img
              className={styles.topBannerTextChild}
              alt=""
              src="/group-27027.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent5} style={groupDiv6Style}>
          <div className={styles.frameChild7} />
          <b className={styles.cheese}>{cheese}</b>
          <div className={styles.mLFrame}>
            <div className={styles.g4}>{g2}</div>
            <img
              className={styles.mLFrameChild}
              alt=""
              src="/group-27027-5.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleParent6} style={groupDiv7Style}>
          <div className={styles.frameChild8} />
          <b className={styles.cornmeal}>{cornmeal}</b>
          <div className={styles.teaSpoonParent}>
            <div className={styles.teaSpoon1}>{teaSpoon}</div>
            <img className={styles.frameChild9} alt="" src="/group-27027.svg" />
          </div>
        </div>
        <div className={styles.potato}>
          <div className={styles.rectangleParent7} style={groupDiv8Style}>
            <div className={styles.frameChild10} />
            <b className={styles.potato1} style={potatoStyle}>
              {potato}
            </b>
            <div className={styles.gContainer}>
              <div className={styles.g5}>100 g</div>
              <img
                className={styles.frameChild11}
                alt=""
                src="/group-27027.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.total} style={totalStyle}>
          <div className={styles.totalChild} />
          <b className={styles.chicken}>{chicken}</b>
          <div className={styles.chickenFrameWrapper}>
            <div className={styles.chickenFrame}>
              <div className={styles.g6}>{g3}</div>
              <img
                className={styles.chickenFrameChild}
                alt=""
                src="/group-27027-8.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className={styles.total72}>{total72}</h2>
    </div>
  );
};

export default GroupComponent3;
