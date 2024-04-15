import React, { useState } from "react";
import "../styles/Signup.css"; // Import your CSS file here

import axios from "axios";
// import { REFRESH_TOKEN,ACCESS_TOKEN } from "./constants";
// import { EMAIL, USERNAME } from "../../constants";


const Signup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const toggleRightPanel = () => {
    setIsRightPanelActive((prevState) => !prevState);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    // Validate signup data
    const { username, email, password, confirmPassword } = signupData;
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Make Axios POST request for signup
    try {
      const response = await axios.post(
        "http://localhost:8000/register/",
        signupData
      );
      const { message, accessToken, refreshToken } = response.data;
      console.log(message);
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      localStorage.setItem(EMAIL, email);
      localStorage.setItem(USERNAME, username);
      window.location.href = "/";
    } catch (error) {
      setError("Failed to create account. Please try again.");
    }
  };

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    // Validate sign in data
    const { email, password } = signInData;
    console.log("sign-in",signInData);
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Make Axios POST request for sign in
    try {
      const response = await axios.post(
        "http://localhost:8000/login/",
        signInData
      );
      const { username, accessToken, refreshToken } = response.data;

    
      console.log(username);
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      localStorage.setItem(EMAIL, email);
      localStorage.setItem(USERNAME, username);

      // window.location.href = "/";
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="main">
      <div className="signup-div">
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form onSubmit={handleSubmitSignup}>
              <h1>Create Account</h1>
              {error && <p className="error">{error}</p>}
              <div className="infield">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={signupData.name}
                  onChange={handleSignupChange}
                />
                <label></label>
              </div>
              <div className="infield">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
                <label></label>
              </div>
              <div className="infield">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
                <label></label>
              </div>
              <div className="infield">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                />
                <label></label>
              </div>
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleSubmitSignIn}>
              <h1>Sign in</h1>
              {error && <p className="error">{error} style=</p>}
              <div className="infield">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signInData.email}
                  onChange={handleSignInChange}
                />
                <label></label>
              </div>
              <div className="infield">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                />
                <label></label>
              </div>

              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container" id="overlayCon">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Already A User?</h1>
                <p>To access your account please login with your credentials</p>
                <button>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>New Here?</h1>
                <p>Create an account and start the journey!!!</p>
                <button>Sign Up</button>
              </div>
            </div>
            <button id="overlayBtn" onClick={toggleRightPanel}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
