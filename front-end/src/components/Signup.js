import React, { useState } from "react";
import "./Signup.css";
import regService from "../services/register"


function Signup () {
    
  const [username, setUsername] = useState ("");
  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const [phone, setPhone] = useState ("");
  const [password, setPassword] = useState ("");
  const [passwordRep, setPasswordRep] = useState ("");
  
  const handleRegister = async event => {
  event.preventDefault()
  try {
   const user = await regService.register({
     username, name, email, phone, password
   });
  console.log(user)
  } catch (error) {
    // Error message
    console.log(error.response.data.error);
    }
  }
    return (
      <>
        <div className="formWrap">
          <h1>Registration</h1>
          <img src={process.env.PUBLIC_URL + "/images/login.svg"} alt="" />
          <div className="formContainer">
            <form className="form" id="form" action="#">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <input
                type="password"
                name="password"
                id="password-repeat"
                placeholder="Password again"
                value={passwordRep}
                onChange={({ target }) => setPasswordRep(target.value)}
              />
            </form>
          </div>
          <div></div>
          <button onClick={handleRegister}>SIGN UP</button>
        </div>
      </>
    );
  }

export default Signup;
