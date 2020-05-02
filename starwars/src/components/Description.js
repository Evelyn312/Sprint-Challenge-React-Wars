import React, {useState, useEffect} from 'react';
import axios from "axios";

const Description = (props) => {

    const [descriptions, setDescriptions] = useState({});

    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/characteristic/${props.id}`)
          .then(response  => {
    
            //   console.log('description ', response.data.descriptions[1]);
              setDescriptions(response.data.descriptions[1]);
         
          })
          .catch( () => {
            console.log("There is an error");
          });
        },[]);

    return(
        <p>
            {descriptions.description}
        </p>
    );

};

export default Description;