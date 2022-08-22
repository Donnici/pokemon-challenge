import React from 'react';

import PropTypes from 'prop-types';

import * as S from '../styled';
import CharacteristicSectionForm from './form';

const CharacteristicSection = ({ hp, weight, height, showForm }) => {

  if (showForm) {
    return <CharacteristicSectionForm />
  }

  return (
    <S.DialogPokemonCharacteristicsBox>
      <S.DialogPokemonCharacteristicItem>
        <S.DialogPokemonCharacteristicItemTitle>
          HP
        </S.DialogPokemonCharacteristicItemTitle>
        <S.DialogPokemonCharacteristicItemValue>
          {hp}/{hp}
        </S.DialogPokemonCharacteristicItemValue>
      </S.DialogPokemonCharacteristicItem>
      <S.DialogPokemonCharacteristicItem>
        <S.DialogPokemonCharacteristicItemTitle>
          Altura
        </S.DialogPokemonCharacteristicItemTitle>
        <S.DialogPokemonCharacteristicItemValue>
          {height / 10} m
        </S.DialogPokemonCharacteristicItemValue>
      </S.DialogPokemonCharacteristicItem>
      <S.DialogPokemonCharacteristicItem>
        <S.DialogPokemonCharacteristicItemTitle>
          Peso
        </S.DialogPokemonCharacteristicItemTitle>
        <S.DialogPokemonCharacteristicItemValue>
          {weight / 10} kg
        </S.DialogPokemonCharacteristicItemValue>
      </S.DialogPokemonCharacteristicItem>
    </S.DialogPokemonCharacteristicsBox>
  );
};

CharacteristicSection.propTypes = {
  hp: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
  showForm: PropTypes.bool
};

export default CharacteristicSection;
