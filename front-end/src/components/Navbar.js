import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./Buttons";
import "./Navbar.css";
import Menu from "./Menu";
import { logout } from "../actions/authActions";
import { connect, Provider } from "react-redux";
import PropTypes from "prop-types";

class Navbar extends Component {
  state = {
    setClick: false,
    setButton: true,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.logout();
  };

  render() {
    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //   if (window.innerWidth <= 960) {
    //     setButton(false);
    //   } else {
    //     setButton(true);
    //   }
    // };

    // useEffect(() => {
    //   showButton();
    // }, []);

    // window.addEventListener("resize", showButton);

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Button
          onClick={this.onSubmit}
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
            <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
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
}

const mapStateToProps = (state) => ({
  isOpened: state.isOpened,
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
