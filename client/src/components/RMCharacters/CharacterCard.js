import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import "./CharacterCard.scss";

export default function CharacterCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <div className="card-info">
        <div className="section">
          <Link className="detail-btn" to={`detail/${props.id}`}>
            <h2>{props.name}</h2>
          </Link>

          <div className="status">
            <span
              className={classnames("status-icon", {
                alive: props.status === "Alive",
                dead: props.status === "Dead",
                unknown: props.status === "unknown",
              })}
            ></span>
            {props.status} - {props.species}
          </div>
        </div>
        <div className="section">
          <span className="section-header">First seen in:</span>
          {props.origin}
        </div>

        <div className="section">
          <span className="section-header">Last known location:</span>
          {props.location}
        </div>
      </div>
    </div>
  );
}
