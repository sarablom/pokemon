import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../context/Context";
import style from "../styles/Favourite.module.css";
import { useLocalStorage } from "react-use-storage";

function Favourite() {
  const [context, updateContext] = useContext(Context);
  const [value, setValue, removeValue] = useLocalStorage("FavPokes", "");
  const history = useHistory();
  const favPokes = context.pokemonFavList;

  // console.log(value[1]);
  // console.log("local storage");
  // for ( let i = 0; i < localStorage.length; i++)   {
  //   console.log(localStorage.key(i) + localStorage.getItem(localStorage.key(i)));
  // }

  // const favPokes1 = new Array(localStorage)
  // // .fill()
  // // .map(i => localStorage.key(i))

  // console.log(favPokes1);

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
