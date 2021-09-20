/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

import "./CharactersList.scss";

/**
 * In this section I've used functional component to use the Hooks useState() and useEffect()
 * @returns The list of cards with Rick and Morty characters
 */
export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  let noCharactersText = 'Loading...'
  
  // Retrieve the characters list from the API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/characters/")
      .then((result) => {
        setCharacters(result.data);
      })
      .catch((err) => {
        noCharactersText = 'Sorry, no characters found';
      });
  }, []);

  const charactersStructure = (
    <div className="charactes-wrapper">
      <section className="character-list">
        <h1>Rick and Morty characters list</h1>
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
                location={location.name}
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
