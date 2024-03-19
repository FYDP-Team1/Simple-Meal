import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./MealSchedule.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import axios from "axios";

const CardForRecipie = ({ items }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const URL = process.env.REACT_APP_API_URL;

  const handleClose = () => setShow(false);
  const handleShow = async (item) => {
    // Change mouse pointer to loading type
    document.body.style.cursor = "wait"; 
    const res = await axios.post(`${URL}/api/getRecipeDetails`, { recipeId: item.id });
    setIngredients(res.data.ingredients);
    setInstructions(res.data.instructions);
    setSelectedItem(item);
    setShow(true);
    // Change mouse pointer back to default
    document.body.style.cursor = "default"; 
  };

  return (
    <>
      <div className={styles.frameWrapper6}>
        <div className={styles.frameWrapper7}>
          <div className={styles.frameParent7}>
            {items?.map((item) => (
                <div
                  className={styles.potatoRectangleParent}
                  key={item.id}
                  onClick={() => handleShow(item)} // Open the modal and set the selected item
                >
                  <div className={styles.potatoRectangle} />
                  <div className={styles.swapImageFrame}>
                    <img
                      className={styles.image9Icon1}
                      alt=""
                      src={"recipe_images/" + item.id + ".jpg"}
                      width ="300"
                      height="300"
                    />
                  </div>
                  <div className={styles.butterChickenRiceFrame}>
                    <div className={styles.recipeFrame}>
                      <div className={styles.potatoSalad1}>{item.name}</div>
                      <div className={styles.recipe6}>
                        {item.cost.toFixed(2)}/meal
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for Selected Item */}
      {selectedItem && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><b>Price: </b> ${selectedItem.cost.toFixed(2)}/meal</p>
            <p><b>Cooking Time: </b> {selectedItem.cooking_minutes.toFixed(0)} minutes</p>
            <p><b>Ingredients:</b></p>
            {ingredients?.map((ingr, index) => (
                <div key={index}>
                  <b>{parseFloat(ingr?.quantity).toFixed(2)}</b> {ingr?.label}
                </div>
              ))}
              <br></br>
            <p><b>Steps: </b></p>
            {instructions?.map((step,index)=>(
                <div key={index}>
                  <b>{index+1}.</b> {step}
                </div>
              ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary">
              Add to List
            </Button> */}
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CardForRecipie;
