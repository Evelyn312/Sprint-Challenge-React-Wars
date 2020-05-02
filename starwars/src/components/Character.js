// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Description from "./Description"

import styled from "styled-components";

const PokemonStyle = styled.div`
    width: 500px;
    background-color: white;
    margin: 10px auto;

`;

const PStyle = styled.p`
    color: green;
    padding: 5px;

    ${props => (props.type === "name" ? `color: green;`: null)}
    ${props => (props.type === "ability" ? `color: blue;`: null)}
    ${props => (props.type === "description" ? `color: purple;`: null)}

`;



const Character = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
        .get(`${props.pokemonData.url}`)
        .then(response  => {
  
            // console.log(response.data)
            setPokemon(response.data);
       
        })
        .catch( () => {
          console.log("There is an error");
        });
      },[]);

      return (
          <PokemonStyle>
              <PStyle type="name">{`Name: ${props.pokemonData.name}`}</PStyle>
              {pokemon.sprites ? <img src={pokemon.sprites.front_default} /> : ""}
              <PStyle type="ability">{pokemon.abilities ? `Ability: ${pokemon.abilities[0].ability.name}` : ""}</PStyle> 
              <PStyle type="description">{pokemon.id ? <Description id={pokemon.id} /> : ""}</PStyle>
          </PokemonStyle>
      );


};

export default Character;