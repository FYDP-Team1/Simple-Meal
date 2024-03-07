import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./CreateGroceryList.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import axios from "axios";

const CardForRecipie = ({ items }) => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [details, setDetails] = useState(null);
  const URL = process.env.REACT_APP_API_URL;

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    getRecipieDetails(item.id);
    setSelectedItem(item);
    setShow(true);
  };

  const getRecipieDetails = async (recipieId) => {
    const res = await axios.post(`${URL}/api/getRecipies`, { recipieId });
    setDetails(res.data);
  };

  return (
    <>
      <div className={styles.frameWrapper6}>
        <div className={styles.frameWrapper7}>
          <div className={styles.frameParent7}>
            {items &&
              items.map((item) => (
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
            <p><b>Price: </b> {selectedItem.cost.toFixed(2)}/meal</p>
            <p><b>Ingredients:</b></p>
            {details &&
              details.recipe.map((det) => (
                <div>
                  {det?.quantity} ({det?.unit}) : {det?.label}
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
