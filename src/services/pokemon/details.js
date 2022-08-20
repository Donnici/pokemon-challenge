import { requestPokemon } from "config/request";
import { detailhSpec } from "./mappers/details";

export const getPokemonDetails = async (id) => {
  const result = [{}, false]
  try {
    const { data } = await requestPokemon.get(`api/v2/pokemon/${id}`);
    result[0] = detailhSpec(data);
  } catch (error) {
    result[0] = error.request.responseText;
    result[1] = true;
  }

  return result;
}
