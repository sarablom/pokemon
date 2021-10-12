import React, { createContext, useState, useEffect } from "react";

//Create and export the context
export const Context = createContext();

export const FetchProvider = ({ children }) => {
  //ues a state handle variable
  //as the value of out context
  const [context, setContext] = useState({
    singlePokemon: {},
    pokemonlist: [],
		pokemonFavList: [],
    filteredPokes: [],
    filterActive: false,
  });

  //setContext raplaces the whole context
  //Create a method that let us update instead
  function updateContext(updates) {
    setContext((context) => {
      return {
        ...context,
        ...updates,
      };
    });
  }

  const value = [context, updateContext];

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

