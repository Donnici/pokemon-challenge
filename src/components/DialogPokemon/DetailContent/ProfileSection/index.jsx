import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import checkIcon from 'assets/images/checkIcon.png';
import closeIcon from 'assets/images/close.png';
import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';
import InputText from 'components/InputText';
import Button from 'components/Button';

import * as S from '../styled';

const ProfileSection = ({ pokemon, customEditable, onClose }) => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);

  const { updatePokemon } = useCatchedPokemons();

  const handleChangePokemonName = (e) => {
    setInputValue(e.target.value);
  };

  const updatePokemonName = () => {
    if (inputValue.trim() === '') {
      setInputError('Campo obrigatório');
      return;
    }
    const newPokemon = { ...pokemon, name: inputValue };
    updatePokemon(newPokemon);
    setEditable(false);
    setInputValue('');
    onClose();
  };

  const closeEditableMode = () => {
    setEditable(false);
    setInputValue(pokemon.name);
  };

  useEffect(() => {
    setInputValue(pokemon.name);
    setEditable(false);
  }, []);

  const renderPokemonName = () => {
    if (editable) {
      return (
        <S.EditableNameBox>
          <InputText
            className='max-space'
            type='text'
            name='name'
            value={inputValue}
            onChange={handleChangePokemonName}
            defaultValue={pokemon.name}
            inputError={inputError}
          />
          <Button icon={checkIcon} onlyIcon onClick={updatePokemonName} />
          <Button
            icon={closeIcon}
            onlyIcon
            onlyIconProps={{ width: '1.2rem' }}
            onClick={closeEditableMode}
          />
        </S.EditableNameBox>
      );
    }
    if (pokemon.fromSidebar) {
      return (
        <S.DialogPokemonNameBox onClick={() => setEditable(true)}>
          <S.DialogPokemonName>{pokemon?.name}</S.DialogPokemonName>
          <S.DialogPokemonNameIcon />
        </S.DialogPokemonNameBox>
      );
    }
    return <S.DialogPokemonName>{pokemon?.name}</S.DialogPokemonName>;
  };

  return (
    <>
      <S.DialogPokemonBoxImage>
        <S.DialogPokemonImage
          src={pokemon?.image}
          alt={`Imagem do pokemon ${pokemon.name}`}
        />
      </S.DialogPokemonBoxImage>
      {renderPokemonName()}
    </>
  );
};

ProfileSection.propTypes = {
  pokemon: PropTypes.object,
  onClose: PropTypes.func,
  customEditable: PropTypes.bool,
};

export default ProfileSection;
