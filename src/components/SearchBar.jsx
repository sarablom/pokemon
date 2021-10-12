import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import style from "../styles/SearchBar.module.css";

function SearchBar() {
  const [context, updateContext] = useContext(Context);
  const [searchInput, setSearchInput] = useState("");

  async function onSubmitHandler(e) {
    e.preventDefault();
    const pokemons = context.pokemonlist;

    const filteredPokes = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchInput)
    });

    updateContext({
        filteredPokes: filteredPokes,
        filterActive: true,
    });
  }

  return (
    <form className={style.searchField} onChange={onSubmitHandler}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter the name of your favourite Pokemon"
        value={searchInput}
        onChange={(e) => {setSearchInput(e.target.value.trim().toLowerCase())}}
      />
      <input
        type="submit"
        value="Search"
        className={style.searchBtn}
      />
    </form>
  );
}

export default SearchBar;
