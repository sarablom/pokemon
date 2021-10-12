import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../context/Context";
import style from "../styles/Favourite.module.css";

function Favourite() {
  const [context, updateContext] = useContext(Context);
  const history = useHistory();
  const favPokes = context.pokemonFavList;

  function DisplayPokes() {
    return favPokes.map((poke, index) => (
      <li className={style.favListItem} key={poke.id}>
        <p onClick={() => goToDetails({ poke })}>{poke.name}</p>
        <img
          onClick={() => goToDetails({ poke })}
          className={style.favPokeImg}
          src={poke.image.thumbnail}
          alt=""
        />
        <button onClick={() => deletePoke(index)} className="btn">
          Delete from favourites
        </button>
      </li>
    ));
  }

  const deletePoke = (itemToDelete) => {
    const newFavPokes = [...favPokes];
    newFavPokes.splice(itemToDelete, 1);

    updateContext({
      pokemonFavList: newFavPokes,
    });
  };

  function goToDetails(poke) {
    history.push("/details/" + poke.id);
  }

  return (
    <div>
      <h1>Your favourite Pokemons</h1>
      <ul className="favPokeList">{favPokes && DisplayPokes()}</ul>
    </div>
  );
}

export default Favourite;
