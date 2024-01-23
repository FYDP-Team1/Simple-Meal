import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBanner5 from "../components/TopBanner5";
import FrameGrid from "../components/FrameGrid";
import CreateGroceryList from "../components/CreateGroceryList";
import styles from "./UpdatedHome.module.css";

const UpdatedHome = () => {
  const navigate = useNavigate();

  const onGroupIcon1Click = useCallback(() => {
    navigate("/preferences-2");
  }, [navigate]);

  const onGroupIcon3Click = useCallback(() => {
    navigate("/finance");
  }, [navigate]);

  return (
    <div className={styles.updatedHome}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <TopBanner5
        onGroupIcon1Click={onGroupIcon1Click}
        onGroupIcon3Click={onGroupIcon3Click}
      />
      <main className={styles.vegetarianBurgerWrapper}>
        <section className={styles.vegetarianBurger}>
          <div className={styles.mushroomSoup}>
            <h1 className={styles.myWeeklyMeal}>My Weekly Meal Planner</h1>
          </div>
          <div className={styles.cheesePizza}>
            <FrameGrid
              text="$71.7"
              text1="+16.22%"
              text2="99.5%"
              text3="+6.01%"
            />
            <CreateGroceryList
              image10="/image-9@2x.png"
              swap="/swap.svg"
              cheesePizza="potato salad"
              recipe="$5.00/recipe"
              image9="/image-10@2x.png"
              swap1="/swap.svg"
              potatoSalad="vegetarian burger "
              recipe1="$6.00/recipe"
              swap2="/swap.svg"
              swap3="/swap.svg"
              swap4="/swap.svg"
              swap5="/swap.svg"
              swap6="/swap.svg"
              swap7="/swap.svg"
              swap8="/swap.svg"
              swap9="/swap.svg"
              swap10="/swap.svg"
              swap11="/swap.svg"
              image101="/image-9@2x.png"
              swap12="/swap.svg"
              vegetarianBurger="potato salad"
              recipe2="$5.00/recipe"
              swap13="/swap.svg"
              rectangleDivPadding="0px var(--padding-10xs)"
              frameDivPadding="0px var(--padding-15xl) 0px var(--padding-10xs)"
              rectangleDivFlex="1"
              frameDivPadding1="0px var(--padding-11xl) 0px var(--padding-10xs)"
              saturdayPadding="0px var(--padding-10xs)"
              image10IconPadding="0px var(--padding-15xl) 0px var(--padding-10xs)"
              swapIconFlex="unset"
              vegetarianBurgerPadding="var(--padding-xs) var(--padding-xs) var(--padding-lg) var(--padding-2xs)"
              propPadding="0px var(--padding-12xs) 0px 0px"
              propFlex="unset"
              propPadding1="0px var(--padding-10xs)"
              propPadding2="0px var(--padding-11xl) 0px var(--padding-10xs)"
              propPadding3="0px var(--padding-10xs)"
              propFlex1="unset"
              propPadding4="0px var(--padding-10xs)"
              propFlex2="unset"
              propPadding5="0px var(--padding-10xs)"
              propPadding6="0px var(--padding-11xl) 0px var(--padding-10xs)"
              propPadding7="0px var(--padding-10xs)"
              propFlex3="unset"
              propPadding8="0px var(--padding-15xl) 0px var(--padding-10xs)"
              propFlex4="unset"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default UpdatedHome;
