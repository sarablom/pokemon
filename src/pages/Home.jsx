
import React, { useEffect, useContext } from 'react';
import { Context } from "../context/Context";
import PokemonItem from '../components/PokemonItem';
import SearchBar from '../components/Searchbar';
import style from '../styles/Home.module.css';

function Home() {
  //const [ pokemon, setPokemon ] = useState()

  const [context, updateContext] = useContext(Context);
  const pokemonlist = context.pokemonlist;
  const filteredPokemons = context.filteredPokes;

  async function fetchPokemon() {
    let response = await fetch('/pokemon.json')
    response = await response.json()
    // only use first version of pokemon 
    //response.length = 151
    updateContext({
      pokemonlist: response,
      filterActive: false,
    });
  }

  // run this on mount
  useEffect(() => {
    fetchPokemon()
  }, [])

  useEffect(() => {

  }, [context.filterActive])

  // create a list where we send a pokemon
  // as props to another component
  function PokemonList() {
    return pokemonlist.map(poke => (
      <PokemonItem {...poke} key={poke.id} />
    ))
  }

  function filteredPokemonList() {
    return filteredPokemons.map(poke => (
      <PokemonItem {...poke} key={poke.id} />
    ))
  }

  return (
      <>
    <h1>Home page</h1>
    <SearchBar />
    <div className={style.homeMain}>
      {!context.filterActive && pokemonlist && PokemonList()}
      {context.filterActive && filteredPokemons && filteredPokemonList()}
    </div>
    </>
  )
}

export default Home