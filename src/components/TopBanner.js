import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./TopBanner.module.css";

const TopBanner1 = () => {
  return (
    <header className={styles.topBanner}>
      <img
        className={styles.topBannerChild}
        loading="eager"
        alt=""
        src="/star-223.svg"
      />
      <img className={styles.topBannerItem} alt="" src="/star-234.svg" />
      <img className={styles.topBannerInner} alt="" src="/star-241.svg" />
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
                src="/star-283.svg"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.sParent}>
                    <div className={styles.s}>S</div>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/star-254.svg"
                    />
                  </div>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild1} />
                </div>
              </div>
              <div className={styles.subtractParent}>
                <img
                  className={styles.subtractIcon}
                  alt=""
                  src="/subtract1.svg"
                />
                <img
                  className={styles.vectorPairIcon}
                  loading="eager"
                  alt=""
                  src="/vector-31.svg"
                />
                <img
                  className={styles.vectorPairIcon1}
                  loading="eager"
                  alt=""
                  src="/vector-41.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="eager"
                  alt=""
                  src="/star-211.svg"
                />
                <img
                  className={styles.frameChild2}
                  alt=""
                  src="/star-264.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.simpleTextFrame}>
            <div className={styles.mealGroupFrame}>
              <div className={styles.rectangleGroupFrame}>
                <div className={styles.simple}>SIMPLE</div>
                <div className={styles.rectangleRectangleFrame} />
                <div className={styles.rectangleRectangleFrame1} />
              </div>
            </div>
            <div className={styles.mealTextFrame}>
              <div className={styles.meal}>MEAL</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundFrame}>
        <img
          className={styles.backgroundFrameChild}
          loading="eager"
          alt=""
          src="/group-270431.svg"
        />
        <img
          className={styles.backgroundFrameItem}
          loading="eager"
          alt=""
          src="/group-4901.svg"
        />
        <div className={styles.imageRectangle}>
          <img
            className={styles.image39Icon}
            loading="eager"
            alt=""
            src="/image-39@2x.png"
          />
          <div className={styles.ciciLiuTextFrame}>
            <Form.Select className={styles.viconVectorFormselect} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBanner1;
