import React from 'react';

import PropTypes from 'prop-types';

import CharacteristicSection from './CharacteristicSection';
import SkillSection from './SkillSection';
import TypeSection from './TypeSection';

import * as S from './styled';

const ReadContent = ({ pokemon }) => {
  return (
    <>
      <S.DialogPokemonBoxImage>
        <S.DialogPokemonImage
          src={pokemon?.image}
          alt={`Imagem do pokemon ${pokemon.name}`}
        />
      </S.DialogPokemonBoxImage>
      <S.DialogPokemonName>{pokemon?.name}</S.DialogPokemonName>

      <CharacteristicSection
        hp={pokemon.hp}
        weight={pokemon.weight}
        height={pokemon?.height}
      />
      <TypeSection types={pokemon?.types} />
      <SkillSection skills={pokemon?.skills} />
    </>
  );
};

ReadContent.propTypes = {
  pokemon: PropTypes.object,
};

export default ReadContent;
