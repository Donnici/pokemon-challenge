import axios from 'axios';

export const requestPokemon = axios.create({
  baseURL: 'https://pokeapi.co/',
  // baseURL: 'http://192.168.1.110:5051/',
  // timeout: 10000,
});
