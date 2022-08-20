import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

import close from 'assets/images/close.png';
import pokeball from 'assets/images/pokeball.png';

import * as S from './styled';

const DialogPokemon = ({ showDialog, onToggleDialog }) => {
  return (
    <Dialog
      visible={showDialog}
      wrapClassName='dialog-wrapper-center'
      animation=''
      maskAnimation='fade'
      onClose={onToggleDialog}
      forceRender
      closable={false}
      bodyStyle={{ padding: 0 }}
    >
      <S.DialogBody>
        <S.DialogCloseButton onClick={onToggleDialog}>
          <img src={close} alt='Fechar' />
        </S.DialogCloseButton>
        <S.DialogPokemonContent>
          <S.DialogTranslateBox>
            <S.DialogPokemonBoxImage>
              <S.DialogPokemonImage src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' />
            </S.DialogPokemonBoxImage>
            <S.DialogPokemonName>bulbasaur</S.DialogPokemonName>
            <S.DialogPokemonCharacteristicsBox>
              <S.DialogPokemonCharacteristicItem>
                <S.DialogPokemonCharacteristicItemTitle>
                  HP
                </S.DialogPokemonCharacteristicItemTitle>
                <S.DialogPokemonCharacteristicItemValue>
                  45/45
                </S.DialogPokemonCharacteristicItemValue>
              </S.DialogPokemonCharacteristicItem>
              <S.DialogPokemonCharacteristicItem>
                <S.DialogPokemonCharacteristicItemTitle>
                  Altura
                </S.DialogPokemonCharacteristicItemTitle>
                <S.DialogPokemonCharacteristicItemValue>
                  0.7 m
                </S.DialogPokemonCharacteristicItemValue>
              </S.DialogPokemonCharacteristicItem>
              <S.DialogPokemonCharacteristicItem>
                <S.DialogPokemonCharacteristicItemTitle>
                  Peso
                </S.DialogPokemonCharacteristicItemTitle>
                <S.DialogPokemonCharacteristicItemValue>
                  6.7 kg
                </S.DialogPokemonCharacteristicItemValue>
              </S.DialogPokemonCharacteristicItem>
            </S.DialogPokemonCharacteristicsBox>
            <S.DialogPokemonSectionBox>
              <S.DialogPokemonSectionDivider />
              <S.DialogPokemonSectionTitle>Tipo</S.DialogPokemonSectionTitle>
              <S.DialogPokemonSectionDivider />
            </S.DialogPokemonSectionBox>

            <S.DialogPokemonSectionBox>
              <S.DialogPokemonSectionDivider />
              <S.DialogPokemonSectionTitle>
                habilidades
              </S.DialogPokemonSectionTitle>
              <S.DialogPokemonSectionDivider />
            </S.DialogPokemonSectionBox>





          </S.DialogTranslateBox>
        </S.DialogPokemonContent>
        <S.DialogPokeballImage src={pokeball} alt='Pokeball' />
      </S.DialogBody>
    </Dialog>
  );
};

DialogPokemon.defaultProps = {
  showDialog: false,
  onToggleDialog: () => {},
};

DialogPokemon.propTypes = {
  showDialog: PropTypes.bool,
  onToggleDialog: PropTypes.func,
};

export default DialogPokemon;
