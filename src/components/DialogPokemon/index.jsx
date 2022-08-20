import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

import close from 'assets/images/close.png';
import pokeball from 'assets/images/pokeball.png';

import * as S from './styled';
import ReadContent from './ReadContent';

const DialogPokemon = ({ showDialog, onToggleDialog, pokemon }) => {
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
            <ReadContent pokemon={pokemon} />
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
  pokemon: PropTypes.object,
};

export default DialogPokemon;
