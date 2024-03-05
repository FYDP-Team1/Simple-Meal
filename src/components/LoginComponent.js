import React, { useEffect, useState } from "react";
import styles from "./LoginComponent.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_URL + ":"+process.env.REACT_APP_API_PORT;
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to your server to authenticate the user
      const res = await axios.post(`${URL}/api/login`, { username, password });
      const userId = await axios.post(`${URL}/api/getUserId`, {username})
      // Handle successful login, e.g., store user token in localStorage and redirect
      console.log("User logged in:", res.data);
      if (res.status === 200 && userId.status === 200){
        localStorage.setItem("username", username);
        localStorage.setItem("user_id", userId.data.id);
        navigate("/home");
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <form className={styles.login}>
      <div className={styles.loginChild} />
      <h1 className={styles.LoginComponent}>Login</h1>
      <div className={styles.forgetPasswordLink}>
        <div className={styles.rememberMeCheckbox}>
          <div className={styles.username}>Username</div>
          <input
            className={styles.usernameText}
            placeholder=""
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.rememberMeCheckbox1}>
          <div className={styles.password}>Password</div>
          <input
            className={styles.rememberMeCheckboxChild}
            placeholder="•••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {error && <div className={styles.error}>{error}</div>}
      </div>
      
      <div className={styles.loginInputContainer}>
        <div className={styles.starIconsFrame}>
          <div className={styles.starFrame}>
            <input
              type="checkbox"
              className={styles.richeckboxFillIcon}
              id="rememberMeCheckbox"
            />
            <label htmlFor="rememberMeCheckbox" className={styles.rememberMe}>
              Remember me
            </label>
          </div>
          <div className={styles.forgot}>Forgot?</div>
        </div>
        <button className={styles.signUpButton} onClick={handleLogin}>
          <b className={styles.signUp}>Let’s go</b>
        </button>
        <div className={styles.notAMemberContainer}>
          <span className={styles.notAMember}>{`Not a member?  `}</span>
          <span className={styles.signUp1} onClick={() => navigate("/sign-up")}>
            Sign Up
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginComponent;
