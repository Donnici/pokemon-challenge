import * as Yup from 'yup';

export const PokemonInitialValue = (pokemon, getLocaleText) => {
  return {
    name: pokemon?.name || '',
    hp: pokemon?.hp || '',
    weight: pokemon?.weight || '',
    height: pokemon?.height || '',
    types: pokemon?.types?.map(type => ({
      label: getLocaleText(`pokemon.types.${type}`),
      value: type
    })) || [],
    skills: pokemon?.skills ? pokemon?.skills.split(', ') : [],
    attack: pokemon?.attack || '',
    defense: pokemon?.defense || '',
    speed: pokemon?.speed || '',
    specialAttack: pokemon?.specialAttack || '',
    specialDefense: pokemon?.specialDefense || '',
    image: pokemon?.image || '',
  };
};

export const PokemonSchema = Yup.object().shape({
  name: Yup.string().required('O campo é obrigatório'),
  hp: Yup.number().min(1, 'Deve ser maior que 0').required('O campo é obrigatório'),
  weight: Yup.number().min(1, 'Deve ser maior que 0').required('O campo é obrigatório'),
  height: Yup.number().min(1, 'Deve ser maior que 0').required('O campo é obrigatório'),
  attack: Yup.number().required('O campo é obrigatório'),
  defense: Yup.number().required('O campo é obrigatório'),
  speed: Yup.number().required('O campo é obrigatório'),
  specialAttack: Yup.number().required('O campo é obrigatório'),
  specialDefense: Yup.number().required(
    'O campo é obrigatório'
  ),
});
