
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokedex from "../images/pokedex.svg"


const PokeDesk = () => {
    const user = useSelector(state=> state.user);

    const [search, setSearch] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=15")
             .then(res=> setPokemons(res.data.results))

        axios.get("https://pokeapi.co/api/v2/type")
              .then(res=>setTypes(res.data.results))    

    },[]);

    

    const searchB = () =>{
        navigate(`/pokedesck/${search}`)
    }

    const filterType =(e)=>{
        
        axios.get(e.target.value)
             .then(res=>setPokemons(res.data.pokemon))   

    }
     console.log()

    return (
        <div className='poke-content'>
            <div id='imgP'>
             <img src={pokedex} alt="" />
            </div>
            
            <p id='welcome'>Bienbenido {user} </p>
            <select id='select' onChange={filterType}>
                <option value="">Todos los Pokemons</option>
                
                {
                    types?.map(type => (
                        <option value={type.url} key={type.name}>{type.name}</option>
                    ))
                }
            </select>
            <div id='imput'>
              <input id='input' type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar Pokemon" />
              <button id='btn-search' onClick={searchB}>Buscar</button>
            </div >
            <div className='const-list'>
            {
                pokemons.map(pokemon => (
                   <PokemonCard pokemonUrl = {pokemon.url !== undefined?  pokemon.url:pokemon.pokemon?.url} key ={pokemon.url !== undefined?  pokemon.url:pokemon.pokemon?.url}/>     
                ))
            }
            </div>
            
            
        </div>
    );
};

export default PokeDesk;