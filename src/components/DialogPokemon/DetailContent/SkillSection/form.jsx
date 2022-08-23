import React from 'react';

import InputText from 'components/InputText';
import { Field } from 'formik';

import * as S from '../styled';

const SkillsSectionForm = () => {
  return (
    <>
    <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>habilidades</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <Field
        label='HABILIDADE 1'
        name='skills[0]'
        placeholder='HABILIDADE 1'
        component={InputText}
      />
      <Field
        label='HABILIDADE 2'
        name='skills[1]'
        placeholder='HABILIDADE 2'
        component={InputText}
      />
      <Field
        label='HABILIDADE 3'
        name='skills[2]'
        placeholder='HABILIDADE 3'
        component={InputText}
      />
      <Field
        label='HABILIDADE 4'
        name='skills[3]'
        placeholder='HABILIDADE 4'
        component={InputText}
      />
    </>
  );
};

export default SkillsSectionForm;
