import React, { Component } from "react";
import { Link } from "react-router-dom";
import './NotFound.scss'

class NotFound extends Component {
  render() {
    return (
      <div className="background-img">
        <div className="space"></div>
        <div className="notfound-wrapper">
          <div className="img-wrapper">
            <span>44</span>
          </div>
          <p>The page you are trying to search has been <br /> moved to another universe.</p>
          {/* <button type="button">GET ME HOME</button> */}
          <Link className="get-home" to="/"> GET ME HOME</Link>
        </div>
      </div>
    )
  }
}

export default NotFound;