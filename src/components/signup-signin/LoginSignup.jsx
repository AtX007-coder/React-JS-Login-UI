import React, { useState } from "react";
import "./LoginSignup.css";
import { IMAGES } from "../../assets/images";

const LoginSignup = ({ onSignIn, onSignUp }) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const imageBackground = showSignIn
    ? IMAGES.LAKE_BACKGROUND
    : IMAGES.MOUNTAIN_BACKGROUND;

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (onSignIn) {
      onSignIn(e);
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (onSignUp) {
      onSignUp(e);
    }
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
  };

  const divStyle = {
    backgroundImage: `url(${imageBackground})`,
  };

  return (
    <div className='container' style={divStyle}>
      {showSignIn ? (
        <SignInForm
          onSignInSubmit={handleSignInSubmit}
          onSignUpClick={handleSignUpClick}
        />
      ) : (
        <SignUpForm
          onSignUpSubmit={handleSignUpSubmit}
          onSignInClick={handleSignInClick}
        />
      )}
    </div>
  );
};

const SignInForm = ({ onSignInSubmit, onSignUpClick }) => {
  const overlayStyle = {
    background: `linear-gradient(to bottom, #d58217,#cbc99f)`,
  };

  const buttonStyle = {
    backgroundColor: "#2f5556",
  };

  return (
    <div className='form-container sign-in-container'>
      <form className='form' onSubmit={onSignInSubmit}>
        <h1>Sign in</h1>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <a href='#'>Forgot your password?</a>
        <button type='submit' style={buttonStyle}>
          Sign In
        </button>
      </form>
      <div className='overlay' style={overlayStyle}>
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className='ghost' onClick={onSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

const SignUpForm = ({ onSignUpSubmit, onSignInClick }) => {
  const overlayStyle = {
    background: `linear-gradient(to right, #3f6b2c, #53a076)`,
  };

  const buttonStyle = {
    backgroundColor: "#2f4625",
  };

  return (
    <div className='form-container sign-up-container'>
      <div className='overlay' style={overlayStyle}>
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className='ghost' onClick={onSignInClick}>
          Sign In
        </button>
      </div>
      <form className='form' onSubmit={onSignUpSubmit}>
        <h1>Create Account</h1>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <button type='submit' style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export { LoginSignup };
