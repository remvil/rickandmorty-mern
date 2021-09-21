import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authentication";
import classnames from "classnames";

import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(user);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  /**
   * When the state must be update with new props value
   * This method will get called whenever any change happens to props value
   * @param {*} nextProps
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="login-container">
          <h2 className="head">Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <input
                className={classnames("form-input form-control-lg", {
                  "is-invalid": errors.email,
                })}
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </div>
            <div className="form-field">
              <input
                className={classnames("form-input form-control-lg", {
                  "is-invalid": errors.password,
                })}
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-field">
              <button type="submit">Login</button>
            </div>
            <div className="form-field">
              Don't have an account yet? <a href="/register">Sign in</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.PropTyes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
