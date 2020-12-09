import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";

class Login extends Component {
  state = {
    username: "",
    password: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };
  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.clearErrors();
    const { username, password } = this.state;

    const user = {
      username,
      password,
    };

    this.props.login(user);
  };

  render() {
    return (
      <>
        <div className="formWrap">
          <img src={process.env.PUBLIC_URL + "/images/login.svg"} alt="" />
          <h1>Login</h1>
          {this.state.msg ? <p>{this.state.msg}</p> : null}

          <div className="formContainer">
            <form className="form" id="form" action="#">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                onChange={this.onChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onChange}
              />
            </form>
          </div>
          <div></div>
          <button onClick={this.onSubmit}>LOGIN</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
