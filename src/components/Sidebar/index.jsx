import React from 'react';

import Button from 'components/Button';

import iconPlus from 'assets/images/plus.png';
import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';

import * as S from './styled';

const Sidebar = () => {
  const { pokemons } = useCatchedPokemons();

  const renderBullets = () => {
    return pokemons.map((pokemon, index) => {
      if (pokemon.isEmpty) {
        return <S.SideBarItem key={index}>?</S.SideBarItem>;
      }
      return (
        <S.SideBarItem key={index}>
          <S.SideBarPokemonImage src={pokemon.thumbnail} alt={pokemon.name} />
        </S.SideBarItem>
      );
    });
  };

  return (
    <S.SideBarWrapper>
      <S.SideBarList>{renderBullets()}</S.SideBarList>

      <Button icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
