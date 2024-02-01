import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
    const URL = "http://localhost:3001/rickandmorty/character/"
   const {id} = useParams(); 
   const [character, setCharacter] = useState({});
   useEffect(() => {
    axios.get(`${URL}${id}`).then(
       ({ data }) => {
          if (data.name) {
             setCharacter(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       }
    );
    return setCharacter({});
 }, [id]);
    return(
        <div>
            <h1>Detail</h1>
            <h2>NAME: {character.name}</h2>
            <img src= {character.image} alt={character.name}/>
            <h3>STATUS: {character.status}</h3>
            <h3>SPECIES: {character.species}</h3>
            <h3>GENDER: {character.gender}</h3>
            <h3>ORIGIN: {character.origin?.name}</h3>
            {/* si en character esta el objeto origin, busca la propiedad name (?) */}


        </div>
    )
}

export default Detail;