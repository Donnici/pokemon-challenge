import React from 'react';

import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import PokemonTypeTag from 'components/PokemonTypeTag';
import useLocale from 'contexts/Locale/useLocale';

import * as S from '../styled';

const TypeSection = ({ types }) => {
  const { getLocaleText } = useLocale();
  const result = useFormikContext();

  console.log(result);
  return (
    <>
      <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>tipo</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <S.RowBox>
        {types?.map(type => (
          <PokemonTypeTag key={type} text={getLocaleText(`pokemon.types.${type}`)} color={type} />
        ))}
      </S.RowBox>
    </>
  );
};

TypeSection.propTypes = {
  types: PropTypes.array,
};

export default TypeSection;
