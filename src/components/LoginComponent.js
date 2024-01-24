import React, { useState } from "react";
import styles from "./LoginComponent.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to your server to authenticate the user
      const response = await axios.post("/api/login", { email, password });
      // Handle successful login, e.g., store user token in localStorage and redirect
      console.log("User logged in:", response.data);
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
          <div className={styles.email}>Email</div>
          <input
            className={styles.usernameText}
            placeholder=""
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
