import * as Yup from 'yup';

export const PokemonInitialValue = (pokemon) => {
  return {
    name: pokemon?.name || '',
    hp: pokemon?.hp || '',
    weight: pokemon?.weight || '',
    height: pokemon?.height || '',
    type: pokemon?.type || [],
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
  name: Yup.string().required('O campo nome é obrigatório'),
  hp: Yup.number().required('O campo hp é obrigatório'),
  weight: Yup.number().required('O campo peso é obrigatório'),
  height: Yup.number().required('O campo altura é obrigatório'),
  type: Yup.array(Yup.string())
    .min(1)
    .max(2)
    .required('O campo tipo é obrigatório'),
  skills: Yup.array(Yup.string())
    .min(1)
    .max(4)
    .required('O campo habilidade é obrigatório'),
  attack: Yup.number().required('O campo ataque é obrigatório'),
  defense: Yup.number().required('O campo defesa é obrigatório'),
  speed: Yup.number().required('O campo velocidade é obrigatório'),
  specialAttack: Yup.number().required('O campo ataque especial é obrigatório'),
  specialDefense: Yup.number().required(
    'O campo defesa especial é obrigatório'
  ),
  image: Yup.string().required('O campo imagem é obrigatório'),
});
