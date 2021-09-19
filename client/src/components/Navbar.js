import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authentication";
import { withRouter } from "react-router";

import "./Navbar.scss";

class Navbar extends Component {

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={this.onLogout.bind(this)}>
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="avatar"
              style={{ width: "25px", marginRight: "5px" }}
            />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className="nav-links">
        <li className="nav-item">
          {
          this.props.location.pathname !== '/login' ?
          <Link className="nav-link" to="/login"> Sign In</Link> :
          <Link className="nav-link" to="/register"> Sign Up</Link>
          }
        </li>
      </ul>
    )

    return (
      <nav className="navbar">
          <img className="logo"
            src="https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-26.png"
            alt="rick and morty app icon"
          />
        <h3>Rick and morty app</h3>
          {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));
