import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import checkIcon from 'assets/images/checkIcon.png';
import closeIcon from 'assets/images/close.png';
import camera from 'assets/images/camera.png';
import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';
import InputText from 'components/InputText';
import Button from 'components/Button';

import * as S from '../styled';
import ProfileSectionForm from './form';

const ProfileSection = ({ pokemon, onClose, showForm, changeToForm }) => {
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

  const handleEditPokemon = () => {
    changeToForm();
    setEditable(true)
  }

  useEffect(() => {
    setInputValue(pokemon.name);
    setEditable(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPokemonName = () => {
    if (editable) {
      return (
        <S.EditableNameBox>
          <InputText
            className='max-space'
            field={{
              type: 'text',
              name: 'name',
              value: inputValue,
              onChange: handleChangePokemonName,
              defaultValue: pokemon.name,
            }}
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
        <S.DialogPokemonNameBox onClick={handleEditPokemon}>
          <S.DialogPokemonName>{pokemon?.name}</S.DialogPokemonName>
          <S.DialogPokemonNameIcon />
        </S.DialogPokemonNameBox>
      );
    }
    return <S.DialogPokemonName>{pokemon?.name}</S.DialogPokemonName>;
  };

  if (showForm) {
    return <ProfileSectionForm />;
  }

  return (
    <>
      <S.DialogPokemonBoxImage>
        <S.DialogPokemonImage
          src={pokemon?.image || camera}
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
  changeToForm: PropTypes.func,
  showForm: PropTypes.bool,
};

export default ProfileSection;
