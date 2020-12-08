import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Renting from "./components/pages/Renting";
import About from "./components/pages/About";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Successful from "./components/pages/SuccessfulP";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/renting" component={Renting} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="successful" component={Successful} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
