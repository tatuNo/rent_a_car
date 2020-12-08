import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginService from "../services/login";
import carsService from "../services/cars";
import "../App.css";
import "../components/Signup.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  // Tää pää komponenttiin ? const [user, setUser] = useState('')

  //
  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('loggedUser')
  //   if(loggedUserJSON) {
  //     const user = JSON.parse(loggedUserJSON)
  //     setUser(user)
  //     blogService.setToken(user.token)
  //   }
  // }, [])

  // const handleLogout = event => {
  //   event.preventDefault()
  //   window.localStorage.removeItem('loggedUser')
  //   blogService.setToken(null)
  //   setUser(null)
  // }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      carsService.setToken(user.token);
      console.log(user);
      // setUser(user)
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log(exception);
    }
    history.push("/");
  };

  return (
    <>
      <div className="formWrap">
        <h1>Log in</h1>
        <div className="formContainer">
          <form className="form" id="form" action="#">
            <h5>Username</h5>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <h5>Password</h5>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <h5>Repeat password</h5>
            <input type="password" />
          </form>
        </div>
        <button onClick={handleLogin}>LOG IN</button>
      </div>
    </>
  );
}

export default Login;
