import React from 'react';

import PropTypes from 'prop-types';

import * as S from '../styled';
import SkillsSectionForm from './form';

const SkillSection = ({ skills, showForm }) => {
  if (showForm) {
    return <SkillsSectionForm />;
  }
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
  showForm: PropTypes.bool,
};

export default SkillSection;
