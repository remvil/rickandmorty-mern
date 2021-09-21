/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { connect } from "react-redux";

import "./CharactersList.scss";
import env from "../../env.json";

/**
 * In this section I've used functional component to use the Hooks useState() and useEffect()
 * @returns The list of cards with Rick and Morty characters
 */
function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  let noCharactersText = "Loading...";

  // Retrieve the characters list from the API
  useEffect(() => {
    axios
      .get(env.API_SERVER_URL + "characters/")
      .then((result) => {
        setCharacters(result.data);
      })
      .catch((err) => {
        noCharactersText = "Sorry, no characters found";
      });
  }, []);

  const charactersStructure = (
    <div className="charactes-wrapper">
      <h1>Hi {props.auth.user.name}, here you are Rick and Morty characters list</h1>
      <section className="character-list">
        {characters.map(
          ({ name, image, status, species, id, origin, location }) => {
            return (
              <CharacterCard
                key={id}
                id={id}
                name={name}
                image={image}
                status={status}
                species={species}
                origin={origin.name}
                originUrl={origin.url}
                location={location.name}
                locationUrl={location.url}
              />
            );
          }
        )}
      </section>
    </div>
  );

  const noCharacters = (
    <div className="no-charactes-wrapper">
      <section className="character-list">
        <h1>{noCharactersText}</h1>
      </section>
    </div>
  );

  return characters.length > 0 ? charactersStructure : noCharacters;
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CharacterList);
