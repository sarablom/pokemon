import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import style from "../styles/PokemonItem.module.css";
import UpdateFavourites from "./UpdateFavourites";

function PokemonItem(pokemon) {
  const history = useHistory();
  const [context, updateContext] = useContext(Context);

  function goToDetails(pokemon) {
    updateContext({
      singlePokemon: pokemon,
    });
    history.push("/details/" + pokemon.pokemon.id);
  }

  return (
    <>
    <div onClick={() => goToDetails({ pokemon })} className={style.card}>
      <img src={pokemon.image.thumbnail} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
     </>
  );
}

export default PokemonItem;
