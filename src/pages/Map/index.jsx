import React, { useState } from 'react';

import ashFront from 'assets/images/ashFront.png';
import searchingTooltip from 'assets/images/searchingTooltip.png';
import searchTooltip from 'assets/images/searchTooltip.png';
import tooltipError from 'assets/images/tooltipError.png';
import Sidebar from 'components/Sidebar';

import DialogPokemon from 'components/DialogPokemon';
import { catchPokemonWithDetails } from 'services/pokemon/catch';

import * as S from './styled';
import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';

const INITIAL_STATE_FEEDBACK = {
  alwaysVisible: false,
  src: searchTooltip,
  alt: 'Clique para capturar o pokémon',
};

const MapPage = () => {
  const { isFull } = useCatchedPokemons();

  const [feedback, setFeedback] = useState(INITIAL_STATE_FEEDBACK);
  const [showDialog, setShowDialog] = useState(false);
  const [newPokemon, setNewPokemon] = useState(false);
  const [pokemonCatched, setPokemonCatched] = useState({});

  const onToggleDialog = (newValue) => {
    setShowDialog((value) => {
      const nextValue = newValue !== undefined ? newValue : !value;
      if (!nextValue) {
        setNewPokemon(false);
        setPokemonCatched({});
      }
      return nextValue;
    });
  };

  const showPokemonDetails = (pokemon) => {
    setPokemonCatched({ ...pokemon, fromSidebar: true });
    onToggleDialog(true);
  };

  const showErrorState = (msg) => {
    setFeedback({
      alwaysVisible: true,
      src: tooltipError,
      alt: msg,
    });
    setTimeout(() => {
      setFeedback(INITIAL_STATE_FEEDBACK);
    }, 5000);
  };

  const createPokemon = () => {
    setNewPokemon(true);
    setShowDialog(true);
  };

  const handleAshClick = async () => {
    if (isFull()) {
      showErrorState('Não há mais lugar para pokemons');
    } else {
      setFeedback({
        alwaysVisible: true,
        src: searchingTooltip,
        alt: 'Buscando novo pokémon',
      });
      const [item, error] = await catchPokemonWithDetails();
      if (error) {
        showErrorState('Erro ao capturar o pokémon');
      } else {
        setPokemonCatched(item);
        setTimeout(() => {
          setShowDialog(true);
          setFeedback(INITIAL_STATE_FEEDBACK);
        }, 500);
      }
    }
  };

  return (
    <S.MapWrapper className='map'>
      <Sidebar
        showPokemonDetails={showPokemonDetails}
        createPokemon={createPokemon}
      />
      <S.BoxCharacter onClick={handleAshClick}>
        <S.CharacterFeedBack className='tooltip' {...feedback} />
        <S.CharacterImage src={ashFront} alt='Ash' />
      </S.BoxCharacter>
      <DialogPokemon
        pokemon={pokemonCatched}
        showDialog={showDialog}
        onToggleDialog={onToggleDialog}
        newPokemon={newPokemon}
        setNewPokemon={setNewPokemon}
      />
    </S.MapWrapper>
  );
};

export default MapPage;
