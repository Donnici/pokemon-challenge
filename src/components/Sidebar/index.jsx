import React from 'react';

import PropTypes from 'prop-types';

import Button from 'components/Button';
import iconPlus from 'assets/images/plus.png';
import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';

import * as S from './styled';

const Sidebar = ({ showPokemonDetails, createPokemon }) => {
  const { pokemons } = useCatchedPokemons();

  const renderBullets = () => {
    return pokemons.map((pokemon, index) => {
      if (pokemon.isEmpty) {
        return <S.SideBarItem key={index}>?</S.SideBarItem>;
      }
      return (
        <S.SideBarItem key={index} onClick={() => showPokemonDetails(pokemon)}>
          <S.SideBarPokemonImage src={pokemon.thumbnail} alt={pokemon.name} />
        </S.SideBarItem>
      );
    });
  };

  return (
    <S.SideBarWrapper>
      <S.SideBarList>{renderBullets()}</S.SideBarList>

      <Button icon={iconPlus} onClick={createPokemon}/>
    </S.SideBarWrapper>
  );
};

Sidebar.propTypes = {
  showPokemonDetails: PropTypes.func,
  createPokemon: PropTypes.func,
};

export default Sidebar;
