import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpComponent.module.css";
import axios from "axios"; // Import Axios for making HTTP requests

const SignUpComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const resetPasswordError = () => {
    setPasswordError(null);
    setConfirmPasswordError(null);
  };


  const onSignUpButtonClick = useCallback(async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    let valid = true;
  
    if (username.trim().length < 3) {
      setUsernameError("Username must be at least 3 characters.");
      valid = false;
    } else {
      setUsernameError("");
    }
  
    if (password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      try {
        // Make a POST request to your signup endpoint on the server
        let res = await axios.post("http://localhost:3001/api/signup", {
          username,
          password,
        });
        console.log(res);
        if (res.status === 200){
          navigate("/sign-up-succeed");
        }
      } catch (error) {
        console.error(error);
        // Handle the error (e.g., show an error message to the user)
      }
    }
  }, [navigate, password, username, confirmPassword]);

  // Use useEffect to check if the form is valid on every change
  useEffect(() => {
    const formIsValid = !usernameError && !passwordError && !confirmPasswordError;
    setIsFormValid(formIsValid);
  }, [usernameError, password,passwordError, confirmPasswordError]);

  // Use useEffect to check if the username is valid and remove the red outline
  useEffect(() => {
    if (usernameError) {
      // Check if the username is now valid
      if (username.trim().length >= 3) {
        setUsernameError("");
      }
    }
  }, [username, usernameError]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <form className={styles.usernameInputLabel}>
        <h1 className={styles.signUp}>Sign up</h1>
        <input
          className={`${styles.usernameInputLabelChild} ${
            usernameError && styles.errorInput
          }`}
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <div className={styles.error}>{usernameError}</div>}
        <div className={styles.pricingCard}>
          <input
            className={`${styles.pricingCardChild} ${
              passwordError && styles.errorInput
            }`}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              resetPasswordError(); // Reset password error on change
              setPassword(e.target.value);
            }}
          />
          {passwordError && <div className={styles.error}>{passwordError}</div>}

          <input
            className={`${styles.pricingCardChild} ${
              confirmPasswordError && styles.errorInput
            }`}
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (
            <div className={styles.error}>{confirmPasswordError}</div>
          )}

          <div className={styles.pricingCardPrice}>
            <div className={styles.signupCardPrice}>
              <img
                className={styles.richeckboxFillIcon}
                loading="eager"
                alt=""
                src="/richeckboxfill.svg"
              />
              <div className={styles.rememberMe}>Remember me</div>
            </div>
            <div className={styles.forgot}>Forgot?</div>
          </div>
        </div>
        <div className={styles.featureImage}>
          <button
            className={styles.signUpButton}
            onClick={onSignUpButtonClick}
            disabled={!isFormValid} // Disable button when form is not valid
          >
            <b className={styles.signUp1}>Next</b>
          </button>
          <div className={styles.alreadyAMemberContainer}>
            <span
              className={styles.alreadyAMember}
            >{`Already a member? `}</span>
            <span className={styles.logIn} onClick={() => navigate('/log-in')}>Log in</span>
          </div>
        </div>
      </form>
      <div className={styles.pricingFrame}>
        <div className={styles.pricing}>Terms</div>
        <div className={styles.pricing1}>Privacy</div>
        <div className={styles.pricing2}>Cookies</div>
      </div>
    </div>
  );
};

export default SignUpComponent;
