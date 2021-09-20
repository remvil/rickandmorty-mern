import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

import {
  AiOutlineCaretLeft,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import classnames from "classnames";
import env from "../../env.json";

import "./CharacterDetail.scss";

function CharacterDetail(props) {
  const [details, setDetails] = useState([]);
  const [fav, getFav] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [location, setLocation] = useState([]);

  // const accountDetails = useSelector((state) => state.isAuthenticated);
  // const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(env.API_SERVER_URL + `characters/detail/?id=${id}`)
      .then((result) => {
        setDetails(result.data);
        setOrigin(result.data.origin);
        setLocation(result.data.location);
      })
      .catch((err) => {
        console.log(err);
      });

    //TODO Fav character to implement
    getFav([1, 2, 3]);
    // let fav = true;
  }, []);

  return (
    <div className="detail-container">
      <div className="icon">
        <a href="/">
          {/* <span className="button-icon">
            <AiOutlineCaretLeft />
          </span> */}
          <span className="button-text">&lt; Back to characters</span>
        </a>
      </div>

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
            <span className="section-header">Last known location:</span>
            {location.name}
          </div>
          <div className="section">
            <span className="section-header">First seen in:</span>
            {origin.name}
          </div>
          <div className="section text-center">
            {fav.find((item) => {
              return details.id === item;
            })
              ? `it's a favorite`
              : `isn't a favorite`}
            <button type="submit">
              {fav.find((item) => {
                return details.id === item;
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
  console.log(state);
  return { propOne: state.propOne };
}

export default connect(mapStateToProps)(CharacterDetail);
