import React, { Component } from "react";
import "./Signup.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";

class Signup extends Component {
  state = {
    username: "",
    name: "",
    password: "",
    email: "",
    phone: "",
    msg: null,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "REGISTER_FAIL") {
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
    const { username, name, email, phone, password } = this.state;

    const newUser = {
      username,
      name,
      email,
      phone,
      password,
    };

    this.props.register(newUser);
  };

  render() {
    return (
      <>
        <div className="formWrap">
          <h1>Registration</h1>
          {this.state.msg ? <p>{this.state.msg}</p> : null}
          <img src={process.env.PUBLIC_URL + "/images/login.svg"} alt="" />

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
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={this.onChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={this.onChange}
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone number"
                onChange={this.onChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={this.onChange}
              />
              <input
                type="password"
                name="password"
                id="password-repeat"
                placeholder="Password again"
                onChange={this.onChange}
              />
            </form>
          </div>
          <div></div>
          <button onClick={this.onSubmit}>SIGN UP</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Signup);
