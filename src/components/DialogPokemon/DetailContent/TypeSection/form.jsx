import React from 'react';

import { useFormikContext } from 'formik';

import * as S from '../styled';

const pokemonTypes = [
  { value: 'normal', label: 'normal' },
  { value: 'bug', label: 'inseto' },
  { value: 'dark', label: 'sombrio' },
  { value: 'dragon', label: 'dragão' },
  { value: 'electric', label: 'elétrico' },
  { value: 'fairy', label: 'fada' },
  { value: 'fighting', label: 'lutador' },
  { value: 'fire', label: 'fogo' },
  { value: 'flying', label: 'voador' },
  { value: 'ghost', label: 'fantasma' },
  { value: 'grass', label: 'planta' },
  { value: 'ground', label: 'terra' },
  { value: 'ice', label: 'gelo' },
  { value: 'poison', label: 'veneno' },
  { value: 'psychic', label: 'psíquico' },
  { value: 'rock', label: 'rocha' },
  { value: 'steel', label: 'aço' },
  { value: 'water', label: 'água' },
];

const TypeSectionForm = () => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <>
      <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>tipo</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <S.Select
        name='types'
        options={pokemonTypes}
        isMulti
        value={values.types}
        onChange={(value) => setFieldValue('types', value)}
        isOptionDisabled={() => values.types.length >= 2}
      />
    </>
  );
};

export default TypeSectionForm;
