import React, { useEffect, useState } from 'react';
import './App.css';
import CharacterCard from "./components/CharacterCard";
import axios from "axios";
// import styled from "styled-components";



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);
  // const [charNum, setCharNum] = useState("mix";)

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      // .get(`https://rickandmortyapi.com/api/character${charNum}`)
      .then((response) => {
        console.log(response.data.results);
        setChar(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <div className="character-div">
        {char.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div>
    </div>
  );
};

export default App;