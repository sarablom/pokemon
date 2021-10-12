import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../styles/Details.module.css";
import { Context } from "../context/Context";
import UpdateFavourites from "../components/UpdateFavourites";

export default function Details() {
  const [context, updateContext] = useContext(Context);
  const singlePokemon = context.singlePokemon.pokemon;

  // function addToFavourites(addedPoke) {
  //   console.log(addedPoke);
  //   updateContext({
  //     pokemonFavList: [...context.pokemonFavList, addedPoke],
  //   });
  // }

  return (
    <div className={style.pokeImgContainer}>
      <button className="btn">
        <Link to="/">Back to home</Link>
      </button>
      {singlePokemon && (
        <div className={style.detailsCard}>
          <UpdateFavourites />
          <h1 className={style.detailsHeader}>{singlePokemon.name}</h1>
          <img
            src={singlePokemon.image.url}
            alt={singlePokemon.name}
            className={style.pokeImg}
          />
          <div className={style.info}>
            <p className={style.type}>Type: {singlePokemon.type}</p>
            <p className={style.baseHp}>HP: {singlePokemon.base.HP}</p>
            <p className={style.baseAttack}>
              Attack: {singlePokemon.base.Attack}
            </p>
            <p className={style.baseDefense}>
              Defense: {singlePokemon.base.Defense}
            </p>
            <p className={style.baseSpeed}>Speed: {singlePokemon.base.Speed}</p>
          </div>
          {/* <button
            onClick={() => addToFavourites(singlePokemon)}
            className="btn"
          >
            Save as favourite
          </button> */}
        </div>
      )}
    </div>
  );
}
