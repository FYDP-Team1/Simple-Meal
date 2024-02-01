import React, { useCallback, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import styles from "./Preferences.module.css";
import "../global1.css";
import TopBanner from "../components/TopBanner";

const Preferences = () => {
  const navigate = useNavigate();
  // State to store selected cuisines
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/preferences-1");
  }, [navigate]);

  // Use useEffect to watch for changes in selectedCuisines and update localStorage
  useEffect(() => {
    localStorage.setItem("cuisines", JSON.stringify(selectedCuisines.map(m=>m.value)));
  }, [selectedCuisines]);
  
  // Define options for cuisine selection
  const cuisineOptions = [
    { value: "italian", label: "Italian" },
    { value: "mexican", label: "Mexican" },
    { value: "indian", label: "Indian" },
    { value: "japanese", label: "Japanese" },
    { value: "korean", label: "Korean" },
    { value: "mediterranean", label: "Mediterranean" },
    { value: "american", label: "American" },
    // Add more cuisines as needed
  ];

  // Function to handle cuisine option clicks
  const handleCuisineClick = (option) => {
    // Check if the clicked option is already selected
    const isOptionSelected = selectedCuisines.some(
      (selectedOption) => selectedOption.value === option.value
    );

    if (isOptionSelected) {
      // If already selected, remove it from the selectedCuisines state
      setSelectedCuisines((prevSelected) =>
        prevSelected.filter(
          (selectedOption) => selectedOption.value !== option.value
        )
      );
    } else {
      // If not selected, add it to the selectedCuisines state
      setSelectedCuisines((prevSelected) => [...prevSelected, option]);
    }
  };


  return (
    <div className={styles.preferences6}>
      <img className={styles.burgerIcon} alt="" src="/burger@2x.png" />
      <img className={styles.eggIcon} alt="" src="/egg@2x.png" />
      <TopBanner />
      <main className={styles.budgetFrame1}>
        <section className={styles.preferencesFrame}>
          <div className={styles.forUsToLearnAboutYouParent}>
            <h3 className={styles.forUsTo}>For us to learn about you</h3>
            <div className={styles.pleaseProvideYour}>
              Please provide your meal preferences for us to create a customized
              meal plan and enable the account for you.
            </div>
          </div>
          <div className={styles.sizeFrequencyTimeComplexity}>
            <div className={styles.budgetText}>
              <div className={styles.cuisineInstanceWrapper}>
                <div className={styles.cuisineInstance2}>
                  <div className={styles.cuisine}>
                    <div className={styles.sizeFrequencyTimeComplexity1}>
                      <div className={styles.frameParent}>
                        <div className={styles.viconRectangleParent}>
                          <div className={styles.viconRectangle1}>1</div>
                          <div className={styles.italianGroup} />
                        </div>
                        <div className={styles.matinputselectioncontrols} />
                        <div className={styles.parent}>
                          <div className={styles.div}>2</div>
                          <div className={styles.frameInner} />
                        </div>
                        <div className={styles.matinputselectioncontrols} />
                        <div className={styles.group}>
                          <div className={styles.div1}>3</div>
                          <div className={styles.ellipseDiv} />
                        </div>
                        <div className={styles.matinputselectioncontrols1} />
                        <div className={styles.container}>
                          <div className={styles.div2}>4</div>
                          <div className={styles.frameChild1} />
                        </div>
                        <div className={styles.matinputselectioncontrols2} />
                        <div className={styles.groupDiv}>
                          <div className={styles.div3}>5</div>
                          <div className={styles.frameChild2} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.cuisineWrapper}>
                          <div className={styles.cuisine1}>Cuisine</div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper1}>
                        <div className={styles.dietaryWrapper}>
                          <div className={styles.dietary}>Dietary</div>
                        </div>
                      </div>
                      <div className={styles.frameGroupCuisine}>
                        <div className={styles.sizeFrequencyWrapper}>
                          <div className={styles.sizeFrequencyContainer}>
                            <span>
                              <p className={styles.size}>{`Size &`}</p>
                              <p className={styles.frequency}>Frequency</p>
                            </span>
                          </div>
                        </div>
                        <div className={styles.timeComplexityWrapper}>
                          <div
                            className={styles.timeComplexity}
                          >{`Time & Complexity`}</div>
                        </div>
                      </div>
                      <div className={styles.budgetWrapper}>
                        <div className={styles.budget}>Budget</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cuisineSelection}>
                    <div className={styles.whatCuisinesOr}>
                      What cuisines or types of food do you enjoy the most?
                    </div>
                    <div className={styles.matinputselectioncontrols3}>
                      {/* Render cuisine options using a mapping */}
                      {cuisineOptions.map((option) => {
                        return (
                          <div
                            key={option.value}
                            className={`${styles.rectangleParent} ${
                              selectedCuisines.some(
                                (selectedOption) =>
                                  selectedOption.value === option.value
                              )
                                ? styles.highlighted
                                : ""
                            }`}
                          >
                            <div >
                              <img
                                className={styles.image40Icon}
                                alt=""
                                src={"/" + option.label + ".png"}
                                onClick={() => handleCuisineClick(option)}
                              />
                              <div className={styles.italianWrapper}>
                                <div className={styles.italian}>
                                  {option.label}
                                </div>
                              </div>
                              <div className={styles.cuisineOptions1}>
                                <div
                                  className={styles.matInputSelectionControls}
                                >
                                  {/* Add conditional class based on selection */}
                                  <div
                                    className={`${styles.vIcon} ${
                                      selectedCuisines.some(
                                        (selectedOption) =>
                                          selectedOption.value === option.value
                                      )
                                        ? styles.checked
                                        : ""
                                    }`}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.viewAllOptions}>VIEW ALL OPTIONS</div>
                </div>
              </div>
              <div className={styles.allOptionsView}>
                <button
                  className={styles.loginButtonWrapper}
                  onClick={onGroupButtonClick}
                >
                  <div className={styles.loginButton}>
                    <div className={styles.next}>Next</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Preferences;
