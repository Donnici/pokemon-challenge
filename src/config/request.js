import axios from 'axios';

export const requestPokemon = axios.create({
  baseURL: 'https://pokeapi.co/',
  timeout: 5000,
});
