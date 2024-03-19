import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./TopBanner.module.css";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();
  const [selectedAction, setSelectedAction] = useState('');

  const handleSelectChange = (event) => {
    const action = event.target.value;
    setSelectedAction(action);
    if (action === 'logout') {
      handleLogout();
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className={styles.topBanner}>
      <img
        className={styles.logo}
        loading="eager"
        alt=""
        src="/logo.png"
        onClick={()=> navigate('/home')}
      />
      <div className={styles.frameGroup}>
        <img
          className={styles.groupIcon}
          loading="eager"
          alt=""
          src="/group-27043.svg"
        />
        <img
          className={styles.frameChild3}
          loading="eager"
          alt=""
          src="/group-490.svg"
        />
        <div className={styles.image39Parent}>
          <img
            className={styles.image39Icon}
            loading="eager"
            alt=""
            src="/image-39@2x.png"
          />
          <div className={styles.frameContainer}>
          <Form.Select 
              className={styles.frameFormselect} 
              value={selectedAction} 
              onChange={handleSelectChange}
            >
              
              <option value=""></option>
              <option value="home">Home</option>
              <option value="logout">Logout</option>
              {/* Add other options as needed */}
            </Form.Select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBanner;
