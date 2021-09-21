import React from "react";
import { Link, useHistory } from "react-router-dom";

import classnames from "classnames";
import "./CharacterCard.scss";

export default function CharacterCard(props) {
  const history = useHistory();

  // Open the Detail Component of selected character
  function getCharacterDetail(id) {
    history.push("/detail/" + id);
  }

  return (
    <div
      className="card"
      acardid={props.id}
      onClick={() => getCharacterDetail(props.id)}
    >
      <img src={props.image} alt={props.name} />
      <div className="card-info">
        <div className="section">
          <span className="detail-btn">
            <h2>{props.name}</h2>
          </span>

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
