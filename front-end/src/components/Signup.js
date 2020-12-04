import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Signup.css";

function Signup() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [numberReg, setNumberReg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("api/users/", {
      username: usernameReg,
      name: nameReg,
      password: passwordReg,
      email: emailReg,
      phone: numberReg,
    })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        document.getElementById("form").reset();
      })
      .then(() => {
        <Link to="/Successful"></Link>;
      });
  };

  return (
    <>
      <div className="formWrap">
        <h1>Registration</h1>
        <div className="formContainer">
          <form className="form" id="form" action="#">
            <h5>Username</h5>
            <input
              type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
            <h5>Name</h5>
            <input
              type="text"
              onChange={(e) => {
                setNameReg(e.target.value);
              }}
            />
            <h5>Email</h5>
            <input
              type="email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
            <h5>Phone Number</h5>
            <input
              type="tel"
              onChange={(e) => {
                setNumberReg(e.target.value);
              }}
            />
            <h5>Password</h5>
            <input
              type="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <h5>Repeat password</h5>
            <input type="password" />
          </form>
        </div>
        <button onClick={register}>SIGN UP</button>
      </div>
    </>
  );
}

export default Signup;
