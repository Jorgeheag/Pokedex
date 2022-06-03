import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pokemonrecor from "../images/pokemonrecor.jpg"
import { useNavigate } from 'react-router-dom';



const PokemonId = () => {

    const {id} = useParams();

    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
             .then(res=> setPokemon(res.data))
    },[id])

    console.log(pokemon)

    const restart =()=>{
        navigate("/pokedesck")
    }
   
    return (
        <div>
            <div className='title1'>
                <img id='title' src={pokemonrecor} alt="" />
               
            </div>
        
            <h1 id='name-poke'>{pokemon.name}</h1>
            
            <div className='card-pokemon'>
               
               <img src={pokemon?.sprites?.other.home.front_default} alt="" />
            </div>

            <div className='card-pokemon'>
              <ul className='list-cont'>
                <li>Altura {pokemon.height/10} m</li>
                <li>Peso {pokemon.weight/10} kg</li>
                {
                    pokemon.types?.map(poke=>(
                        <li key={poke.type.name}>Tipo {poke.type.name}</li>
                      
                    ))
                }
                {
                   pokemon.stats?.map(pokeStasts=> (
                       <li key= {pokeStasts.stat.name}> Stasts {pokeStasts.stat.name} {pokeStasts.base_stat}</li>
                    
                   ))
                }
                
                
               </ul>

               
            </div>
            <button id='btn-rest' onClick={restart}>Nueva busqueda</button>    
        
           
        </div>
    );
};

export default PokemonId;