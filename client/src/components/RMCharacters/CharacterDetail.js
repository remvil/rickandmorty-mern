import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import classnames from "classnames";
import env from "../../env.json";

import "./CharacterDetail.scss";

function CharacterDetail(props) {
  if (!props.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const [details, setDetails] = useState({
    info: "",
    location: "",
    origin: "",
  });

  const [fav, getFav] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(env.API_SERVER_URL + `characters/detail/?id=${id}`)
      .then((result) => {
        setDetails({
          info: result.data,
          location: result.data.location,
          origin: result.data.origin,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    //TODO Fav character to implement
    getFav([2, 3, 6]);
  }, []);

  // Add or remove an element from the fav list
  function toggleFav(id) {
    const index = fav.indexOf(id);
    index === -1 ? fav.push(id) : fav.splice(index, 1);
  }

  return (
    <div className="detail-container">
      <div className="icon">
        <Link to="/">
          <span className="button-text">&lt; Back to characters</span>
        </Link>
      </div>

      <article className="card-big">
        <div className="card-img-wrapper">
          <img src={details.info.image} alt={details.name} />
        </div>
        <div className="card-detail">
          <div className="section">
            <h2>{details.info.name}</h2>
            <div className="status">
              <span
                className={classnames("status-icon", {
                  alive: details.info.status === "Alive",
                  dead: details.info.status === "Dead",
                  unknown: details.info.status === "unknown",
                })}
              ></span>
              {details.info.status} - {details.info.species}
            </div>
          </div>
          <div className="section">
            <span className="section-header">Last known location:</span>
            {details.location.name}
          </div>
          <div className="section">
            <span className="section-header">First seen in:</span>
            {details.origin.name}
          </div>
          <div className="section text-center">
            {fav.find((item) => {
              return details.info.id === item;
            })
              ? `it's a favorite`
              : `isn't a favorite`}
            <button type="submit" onClick={() => toggleFav(details.info.id)}>
              {fav.find((item) => {
                return details.info.id === item;
              }) ? (
                <AiFillHeart />
              ) : (
                <AiOutlineHeart />
              )}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function mapStateToProps(state) {
  return { isAuthenticated: state.auth.isAuthenticated };
}

export default connect(mapStateToProps)(CharacterDetail);
