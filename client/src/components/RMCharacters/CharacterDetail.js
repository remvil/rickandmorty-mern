// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import "./CharacterDetail.scss";

export default function CharacterDetail(props) {
  const [details, setDetails] = useState([]);

  // const accountDetails = useSelector((state) => state.isAuthenticated);
  // const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((result) => {
        setDetails(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="detail-container">
      <article className="card-big">
        <div className="card-img-wrapper">
          <img src={details.image} alt={details.name} />
        </div>
        <div className="card-detail">
          <div className="section">
            <h2>{details.name}</h2>
            <div className="status">
              <span
                className={classnames("status-icon", {
                  alive: details.status === "Alive",
                  dead: details.status === "Dead",
                  unknown: details.status === "unknown",
                })}
              ></span>
              {details.status} - {details.species}
            </div>
          </div>
          <div className="section">
            <span className="text-gray">Last known location:</span>
            <a
              href="pippo"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk"
            >
              unknown
            </a>
          </div>
          <div className="section">
            <span className="text-gray">First seen in:</span>
            <a
              href="https://rickandmortyapi.com/api/episode/31"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk"
            >
              The Rickchurian Mortydate
            </a>
          </div>
          <div className="section text-center">
            <button type="submit">Login</button>
          </div>
        </div>
      </article>
    </div>
  );
}
