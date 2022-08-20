import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

const CharacteristicSection = ({ hp, weight, height }) => {
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
          {height / 100} m
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
};

export default CharacteristicSection;
