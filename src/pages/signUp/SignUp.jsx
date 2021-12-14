import React, { useRef, useState } from "react";
import "./signUp.scss";
import images from "../../assets/images";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log(password);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={images.logo1} alt="" />
        </div>
      </div>
      <div className="container">
        <h1>UNLIMITED MOVIES, TV SHOWS AND MORE.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready for the biggest video platform? Enter your email to create your
          account.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="signUp" onClick={handleStart}>
              GET STARTED
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="enter your password"
              ref={passwordRef}
            />
            <button className="signUp" onClick={handleFinish}>
              START
            </button>
          </form>
        )}
        <span>
          Already have an account? <b>Click here to Login!</b>
        </span>
      </div>
    </div>
  );
}

export default SignUp;
