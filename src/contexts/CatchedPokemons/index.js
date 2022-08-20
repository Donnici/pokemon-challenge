import React, { createContext, useCallback, useState } from 'react';

import PropTypes from 'prop-types';

export const CatchedPokemonsContext = createContext({});

const MAX_POKEMONS = 6;

export const CatchedPokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(
    Array.from({ length: MAX_POKEMONS }).map((_) => ({ isEmpty: true})
  ));

  const addPokemon = useCallback((pokemon, isCustom = false) => {
    const index = pokemons.findIndex((p) => p.isEmpty);
    const newList = [...pokemons];
    newList[index] = { ...pokemon, isCustom };
    setPokemons(newList);
  }, [pokemons, setPokemons]);

  const removePokemon = useCallback((pokemonId) => {
    setPokemons(pokemons.filter((p) => p.id !== pokemonId));
  }, [pokemons, setPokemons]);

  const getPokemonDetails = useCallback((pokemonId) => {
    return pokemons.find((p) => p.id === pokemonId);
  }, [pokemons]);

  const isFull = () => pokemons.filter((p) => !p.isEmpty).length === MAX_POKEMONS;

  return (
    <CatchedPokemonsContext.Provider
      value={{
        addPokemon,
        removePokemon,
        getPokemonDetails,
        pokemons,
        isFull
      }}
    >
      {children}
    </CatchedPokemonsContext.Provider>
  );
};

CatchedPokemonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
