import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

const SkillSection = ({skills}) => {
  return (
    <>
      <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>habilidades</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <S.RowBox>
        <S.Skills>{skills}</S.Skills>
      </S.RowBox>
    </>
  );
};

SkillSection.propTypes = {
  skills: PropTypes.string,
};

export default SkillSection;
