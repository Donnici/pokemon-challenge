import { requestPokemon } from 'config/request';
import { getPokemonDetails } from './details';
import { catchSpec } from './mappers/catch';

const getRandomPokemonPosition = () => {
  const TOTAL_POKEMONS = 1154;
  const INITIAL_POKEMON = 1;
  const randomPosition = Math.floor(
    Math.random() * (TOTAL_POKEMONS - INITIAL_POKEMON + 1) + INITIAL_POKEMON
  );

  return randomPosition;
}

export const catchPokemon = async () => {
  const result = [{}, false]
  try {
    const { data } = await requestPokemon.get('api/v2/pokemon/', {
      params: {
        limit: 1,
        offset: getRandomPokemonPosition()
      },
    });
    result[0] = catchSpec(data.results[0]);
  } catch (error) {
    result[1] = true;
  }
  return result;
};

export const catchPokemonWithDetails = async () => {
  const [pokemon, error] = await catchPokemon();
  if (error) {
    return [pokemon, error];
  }

  const [pokemonDetails, errorDetails] = await getPokemonDetails(pokemon.id);

  return [pokemonDetails, errorDetails];
}
