import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Character from "./components/Character"
import styled from "styled-components";


const ContainerStyle = styled.div`
  display: flex;
  padding: 5px;
  margin: 10px
  width: 300px;
  flex-wrap: wrap;
`;





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [pokemons, setPokemons] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response  => {

          // console.log(response.data.results)
          setPokemons(response.data.results);
     
      })
      .catch( () => {
        console.log("There is an error");
      });
  },[]);


  return (

    <div className="App">

      <h1 className="Header">Pokemons</h1>
      <ContainerStyle>
      {
        pokemons.map( (pokemon, i) => {
          return(
            <Character pokemonData={pokemon} key={i}/>
           )
        })
      }
      </ContainerStyle>
    </div>
  );
}

export default App;
