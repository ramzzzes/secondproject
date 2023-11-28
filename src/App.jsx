import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
 import SimpleImageSlider from "react-simple-image-slider";
 

const App=()=>{
  const [pokemon, getPokemon] = useState([]);

  async function logMovies() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const pok = await response.json();
     getPokemon(pok);
  }

  useEffect(() => {
    logMovies();
  }, []);
  
  useEffect(() => {
    console.log(pokemon?.abilities[0]?.ability.name);
  },[pokemon?.abilities[0]])
 
   
  
  // console.log(pokemon);

  return <div>{pokemon.map} </div>;
}

export default App