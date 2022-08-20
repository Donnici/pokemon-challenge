import React, { useState } from 'react';

import ashFront from 'assets/images/ashFront.png';
import searchingTooltip from 'assets/images/searchingTooltip.png';
import searchTooltip from 'assets/images/searchTooltip.png';
import tooltipError from 'assets/images/tooltipError.png';
import Sidebar from 'components/Sidebar';

import DialogPokemon from 'components/DialogPokemon';
import { catchPokemonWithDetails } from 'services/pokemon/catch';
import * as S from './styled';

const INITIAL_STATE_FEEDBACK = {
  alwaysVisible: false,
  src: searchTooltip,
  alt: 'Clique para capturar o pokémon',
};

const MapPage = () => {
  const [feedback, setFeedback] = useState(INITIAL_STATE_FEEDBACK);
  const [showDialog, setShowDialog] = useState(true);
  const [pokemonCatched, setPokemonCatched] = useState({});

  const onToggleDialog = () => {
    setShowDialog((value) => !value);
  };

  const handleClick = async () => {
    setFeedback({
      alwaysVisible: true,
      src: searchingTooltip,
      alt: 'Buscando novo pokémon',
    });
    const [item, error] = await catchPokemonWithDetails();
    if (error) {
      setFeedback({
        alwaysVisible: true,
        src: tooltipError,
        alt: 'Erro ao capturar o pokémon',
      });
      setTimeout(() => {
        setFeedback(INITIAL_STATE_FEEDBACK);
      }, 5000);
    } else {
      setPokemonCatched(item);
      setShowDialog(true);
      setFeedback(INITIAL_STATE_FEEDBACK);
    }
  };

  return (
    <S.MapWrapper className='map'>
      <Sidebar />
      <S.BoxCharacter onClick={handleClick}>
        <S.CharacterFeedBack className='tooltip' {...feedback} />
        <S.CharacterImage src={ashFront} alt='Ash' />
      </S.BoxCharacter>
      <DialogPokemon showDialog={showDialog} onToggleDialog={onToggleDialog} />
    </S.MapWrapper>
  );
};

export default MapPage;
