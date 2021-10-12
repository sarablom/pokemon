import React, { useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useLocalStorage } from "react-use-storage";

function UpdateFavourites() {
  const [value, setValue, removeValue] = useLocalStorage(
    "key",
    "default value"
  );
  const [addFavourite, setAddFavourite] = useState(false);
  const [removeFavourite, setRemoveFavourite] = useState(false);
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
      pokemonFavList: [...context.pokemonFavList, addedPoke],
    });
    setAddFavourite(true);
    setValue("favPokes", "hej");
  }

  function deleteFromFavourites(deletedPoke) {
    console.log(deletedPoke.id);
    const newFavPokes = [...favPokes];
    newFavPokes.splice(deletedPoke.id, 1);

    updateContext({
      pokemonFavList: newFavPokes,
    });
    setAddFavourite(false);
    removeValue(deletedPoke);
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
    </div>
  );
}

export default UpdateFavourites;
