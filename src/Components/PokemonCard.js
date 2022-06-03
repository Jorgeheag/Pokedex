import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {
    
    const [character, setCharater] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(pokemonUrl)
             .then(res=>setCharater(res.data))
    },[]);

   


    return (
        <div className='card' onClick={()=> navigate(`/pokedesck/${character.id}`)}>
           
            <h3>{character.name}</h3>
            <img src={character?.sprites?.other.home.front_default} alt="" />
           
        </div>
        
    );
};

export default PokemonCard;