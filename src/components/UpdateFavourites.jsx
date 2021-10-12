import React, { useState, useEffect, useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useLocalStorage } from "react-use-storage";
import { Context } from "../context/Context";
import style from "../styles/UpdateFavourites.module.css";

function UpdateFavourites() {
  const [value, setValue, removeValue] = useLocalStorage("FavPokes", "");
  const [context, updateContext] = useContext(Context);
  const singlePokemon = context.singlePokemon.pokemon;
  const favPokes = context.pokemonFavList;
  const [addFavourite, setAddFavourite] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage("");
      setIsActive(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  function addToFavourites(addedPoke) {
    updateContext({
      pokemonFavList: [...favPokes, addedPoke],
    });
    setAddFavourite(true);
    //setValue(favPokes);
  }

  function deleteFromFavourites(deletedPoke) {
    const newFavPokes = favPokes.filter((poke) => poke.id !== deletedPoke.id);
    // const newFavPokes = [...favPokes];
    // newFavPokes.splice(deletedPoke.id, 1);

    updateContext({
      pokemonFavList: newFavPokes,
    });
    setAddFavourite(false);
    //setValue(favPokes);
  }

  return (
    <div>
      {!addFavourite && (
        <BsSuitHeart
          className={style.unfilledHeart}
          onClick={() => {
            addToFavourites(singlePokemon);
            setShowMessage("Added to favourites");
            setIsActive(true);
          }}
        />
      )}

      {addFavourite && (
        <BsSuitHeartFill
          className={style.filledHeart}
          onClick={() => {
            deleteFromFavourites(singlePokemon);
            setShowMessage("Deleted from favourites");
            setIsActive(true);
          }}
        />
      )}
      <span className={isActive ? style.message : style.hideMessage}>
        {showMessage || null}
      </span>
    </div>
  );
}

export default UpdateFavourites;
