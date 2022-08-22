import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

import close from 'assets/images/close.png';
import pokeball from 'assets/images/pokeball.png';

import * as S from './styled';
import ReadContent from './ReadContent';
import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';
import Button from 'components/Button';

const DialogPokemon = ({ showDialog, onToggleDialog, pokemon, newPokemon }) => {
  const { addPokemon, removePokemon } = useCatchedPokemons();

  const handleClickPokeball = () => {
    addPokemon(pokemon);
    onToggleDialog(false);
  };

  const handleRemovePokemon = () => {
    removePokemon(pokemon.id);
    onToggleDialog(false);
  };

  const renderButton = () => {
    if (newPokemon) {
      return <Button text='CRIAR POKEMON' onClick={handleRemovePokemon} />;
    }
    if (pokemon.fromSidebar) {
      return (
        <S.DialogActionFloatBoxWrapper>
          <Button text='LIBERAR POKEMON' onClick={handleRemovePokemon} />
        </S.DialogActionFloatBoxWrapper>
      );
    }
    return (
      <S.DialogPokeballImage
        src={pokeball}
        alt='Pokeball'
        onClick={handleClickPokeball}
      />
    );
  };

  const renderDialogContent = () => {
    if (newPokemon) {
      return null;
    }

    return <ReadContent pokemon={pokemon} />;
  };

  return (
    <Dialog
      visible={showDialog}
      wrapClassName='dialog-wrapper-center'
      animation=''
      maskAnimation='fade'
      onClose={() => onToggleDialog(false)}
      forceRender
      closable={false}
      bodyStyle={{ padding: 0 }}
    >
      <S.DialogBody>
        <S.DialogCloseButton onClick={() => onToggleDialog(false)}>
          <img src={close} alt='Fechar' />
        </S.DialogCloseButton>
        <S.DialogPokemonContent>
          <S.DialogTranslateBox>{renderDialogContent()}</S.DialogTranslateBox>
        </S.DialogPokemonContent>
        <S.DialogActionFloatBox>{renderButton()}</S.DialogActionFloatBox>
      </S.DialogBody>
    </Dialog>
  );
};

DialogPokemon.defaultProps = {
  showDialog: false,
  onToggleDialog: () => {},
  newPokemon: false,
};

DialogPokemon.propTypes = {
  showDialog: PropTypes.bool,
  newPokemon: PropTypes.bool,
  onToggleDialog: PropTypes.func,
  setNewPokemon: PropTypes.func,
  pokemon: PropTypes.object,
};

export default DialogPokemon;
