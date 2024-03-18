import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TopBanner2.module.css";
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
    </header>
  );
};

export default TopBanner;
