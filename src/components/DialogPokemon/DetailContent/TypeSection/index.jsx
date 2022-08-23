import React from 'react';

import PropTypes from 'prop-types';

import PokemonTypeTag from 'components/PokemonTypeTag';
import useLocale from 'contexts/Locale/useLocale';

import * as S from '../styled';
import TypeSectionForm from './form';

const TypeSection = ({ types, showForm }) => {
  const { getLocaleText } = useLocale();

  if (showForm) {
    return <TypeSectionForm />;
  }

  return (
    <>
      <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>tipo</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <S.RowBox>
        {types?.map((type) => (
          <PokemonTypeTag
            key={type}
            text={getLocaleText(`pokemon.types.${type}`)}
            color={type}
          />
        ))}
      </S.RowBox>
    </>
  );
};

TypeSection.propTypes = {
  types: PropTypes.array,
  showForm: PropTypes.bool,
};

export default TypeSection;
