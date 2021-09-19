import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authentication";
import classnames from "classnames";

import "./Register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO ripasso controlled components https://it.reactjs.org/docs/forms.html#controlled-components
  /**
   * Set into State imput value change
   * @param {} e
   */
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm,
    };
    this.props.registerUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div
          className="register-container"
          style={{ marginTop: "50px", width: "700px" }}
        >
          <h2 className="head"> Registration </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <input
                className={classnames("form-input", {
                  "is-invalid": errors.name,
                })}
                type="text"
                placeholder="Name"
                name="name"
                onChange={this.handleInputChange}
                value={this.state.name}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="form-field">
              <input
                className={classnames("form-input", {
                  "is-invalid": errors.email,
                })}
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="form-field">
              <input
                className={classnames("form-input", {
                  "is-invalid": errors.password,
                })}
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <div className="form-field">
              <input
                className={classnames("form-input", {
                  "is-invalid": errors.password_confirm,
                })}
                type="password"
                placeholder="Confirm Password"
                name="password_confirm"
                onChange={this.handleInputChange}
                value={this.state.password_confirm}
              />
              {errors.password_confirm && (
                <div className="invalid-feedback">
                  {errors.password_confirm}
                </div>
              )}
            </div>
            <div className="form-field">
              <button type="submit" className="btn btn-primary">
                Register User
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
