import * as Yup from 'yup';

export const PokemonInitialValue = (pokemon) => {
  return {
    name: pokemon?.name || '',
    hp: pokemon?.hp || 0,
    weight: pokemon?.weight || 0,
    height: pokemon?.height || 0,
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
  name: Yup.string().required('O campo é obrigatório'),
  hp: Yup.number().min(1, 'Deve ser maior que 0').required('O campo é obrigatório'),
  weight: Yup.number().min(1, 'Deve ser maior que 0').required('O campo é obrigatório'),
  height: Yup.number().min(1, 'Deve ser maior que 0').required('O campo é obrigatório'),
  // type: Yup.array(Yup.string())
  //   .min(1, 'Deve ser maior que 0')
  //   .max(2, 'Deve ser menor ou igual 2')
  //   .required('O campo tipo é obrigatório'),
  // skills: Yup.array(Yup.string())
  //   .min(1, 'Deve ser maior que 0')
  //   .max(2, 'Deve ser menor ou igual 2')
  //   .required('O campo tipo é obrigatório'),
  attack: Yup.number().required('O campo é obrigatório'),
  defense: Yup.number().required('O campo é obrigatório'),
  speed: Yup.number().required('O campo é obrigatório'),
  specialAttack: Yup.number().required('O campo é obrigatório'),
  specialDefense: Yup.number().required(
    'O campo é obrigatório'
  ),
  // image: Yup.string().required('O campo é obrigatório'),
});
