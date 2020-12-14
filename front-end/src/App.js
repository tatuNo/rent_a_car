import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Renting from "./components/pages/Renting";
import About from "./components/pages/About";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Mycars from "./components/pages/MycarsP";
import Successful from "./components/pages/SuccessfulP";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
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
              <Route path="/mycars" component={Mycars} />
            </Switch>
          </Router>
        </>
      </Provider>
    );
  }
}

export default App;
