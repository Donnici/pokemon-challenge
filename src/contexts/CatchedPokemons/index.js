import React, { createContext, useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

export const CatchedPokemonsContext = createContext({});

const MAX_POKEMONS = 6;
const EMPTY_POKEMON = { isEmpty: true };

const LOCAL_STORAGE_KEY = 'CHALLENGE-POKEMON-KEY';

export const CatchedPokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(
    Array.from({ length: MAX_POKEMONS }).map((_) => EMPTY_POKEMON)
  );

  const addPokemon = useCallback(
    (pokemon, isCustom = false) => {
      const index = pokemons.findIndex((p) => p.isEmpty);
      const newList = [...pokemons];
      newList[index] = { ...pokemon, isCustom };
      setPokemons(newList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
    },
    [pokemons, setPokemons]
  );

  const updatePokemon = useCallback(
    (newPokemon) => {
      const index = pokemons.findIndex((p) => p.id === newPokemon.id);
      const newList = [...pokemons];
      newList[index] = { ...newPokemon };
      setPokemons(newList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
    },
    [pokemons, setPokemons]
  );

  const removePokemon = useCallback(
    (pokemonId) => {
      const index = pokemons.findIndex((p) => p.id === pokemonId);
      const newList = [...pokemons];
      newList[index] = EMPTY_POKEMON;
      setPokemons(newList);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
    },
    [pokemons, setPokemons]
  );

  const getPokemonDetails = useCallback(
    (pokemonId) => {
      return pokemons.find((p) => p.id === pokemonId);
    },
    [pokemons]
  );

  const isFull = () =>
    pokemons.filter((p) => !p.isEmpty).length === MAX_POKEMONS;

  useEffect(() => {
    const pokemonslocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (pokemonslocalStorage) {
      setPokemons(JSON.parse(pokemonslocalStorage));
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pokemons));
    }
  }, []);

  return (
    <CatchedPokemonsContext.Provider
      value={{
        addPokemon,
        updatePokemon,
        removePokemon,
        getPokemonDetails,
        pokemons,
        isFull,
      }}
    >
      {children}
    </CatchedPokemonsContext.Provider>
  );
};

CatchedPokemonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
