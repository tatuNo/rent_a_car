import React, { useState } from "react";
import "./Login.css";
import loginService from "../services/login";
import carService from "../services/cars";
import {useSelector, useDispatch} from "react-redux";
import { userLogin } from "../reducers/user";

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [kayttaja, setKayttaja] = useState(null);
  
  const handleLogin = async event => {
    event.preventDefault();
    
    try {
      const user = await loginService.login({
        username, password
      });
      // window.localStorage.setItem (
      //   'loggedUser', JSON.stringify(user)
      // )
      dispatch(userLogin(user));
      carService.setToken(user.token);
      //setKayttaja(user);
      setUsername('');
      setPassword('');   
    } catch (error) {
      // Oikea error message
      console.log(error.response.data.error);
    }
}

    return (
      <>
        <div className="formWrap">
          <img src={process.env.PUBLIC_URL + "/images/login.svg"} alt="" />
          <h1>Login</h1>
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
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </form>
          </div>
          <div></div>
          <button onClick={handleLogin}>LOGIN</button>
        </div>
      </>
    );
  }

export default Login;
