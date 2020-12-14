import React, { Component, Fragment, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./Buttons";
import "./Navbar.css";
import Menu from "./Menu";
import { logout } from "../actions/authActions";
import { connect, Provider } from "react-redux";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import { userLogout } from "../reducers/user";
import carService from "../services/cars";
  
  function Navbar() {
    const dispatch = useDispatch();

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener("resize", showButton);
    
    const userstate = useSelector(state => state.user);
    let isAuthenticated = userstate.logged;
    

    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(userLogout());
      carService.setToken(null);
    }
  
    const authLinks = (
      <Fragment>
        <Button
          onClick={handleLogout}
          className="button-mobile"
          buttonStyle="btn--primary"
        >
          LOGOUT
        </Button>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link to="/Login">
          <button className="button-mobile">LOGIN</button>
        </Link>
        <Link to="/Signup">
          <button className="button-mobile">REGISTER</button>
        </Link>
      </Fragment>
    );

    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <NavLink exact to="/" className="navbar-logo">
              RECAR <i className="fas fa-car" />
            </NavLink>
            <Menu
              right
              width={"100%"}
              customBurgerIcon={<i className="fas fa-bars" />}
              customCrossIcon={<i className="fas fa-times" />}
            ></Menu>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="main-nav-active"
                  className="nav-links"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/renting"
                  activeClassName="main-nav-active"
                  className="nav-links"
                >
                  Renting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="main-nav-active"
                  className="nav-links"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-links-btn">
                {isAuthenticated ? authLinks : guestLinks}
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }



export default Navbar;
