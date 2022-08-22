import React from 'react';

import { useFormikContext, Field } from 'formik';

import InputNumber from 'components/InputNumber';
import sword from 'assets/images/sword.png';
import shield from 'assets/images/shield.png';
import speed from 'assets/images/speed.png';

import * as S from '../styled';

const StatisticsSectionForm = () => {
  const { errors, touched } = useFormikContext();
  return (
    <>
      <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>estatísticas</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <Field
        customLabel={
          <S.StatisticKey>
            <S.StatisticImage src={shield} alt={`defesa icone`} />
            DEFESA
          </S.StatisticKey>
        }
        name='defense'
        placeholder='DEFESA'
        inputError={touched.defense && errors.defense}
        component={InputNumber}
      />
      <Field
        customLabel={
          <S.StatisticKey>
            <S.StatisticImage src={sword} alt={`ataque icone`} />
            ATAQUE
          </S.StatisticKey>
        }
        name='attack'
        placeholder='ATAQUE'
        inputError={touched.attack && errors.attack}
        component={InputNumber}
      />
      <Field
        customLabel={
          <S.StatisticKey>
            <S.StatisticImage src={shield} alt={`defesa especial icone`} />
            DEFESA ESPECIAL
          </S.StatisticKey>
        }
        name='specialDefense'
        placeholder='DEFESA ESPECIAL'
        inputError={touched.specialDefense && errors.specialDefense}
        component={InputNumber}
      />
      <Field
        customLabel={
          <S.StatisticKey>
            <S.StatisticImage src={sword} alt={`ataque especial icone`} />
            ATAQUE ESPECIAL
          </S.StatisticKey>
        }
        name='specialAttack'
        placeholder='ATAQUE ESPECIAL'
        inputError={touched.specialAttack && errors.specialAttack}
        component={InputNumber}
      />
      <Field
        customLabel={
          <S.StatisticKey>
            <S.StatisticImage src={speed} alt={`velocidade icone`} />
            VELOCIDADE
          </S.StatisticKey>
        }
        name='speed'
        placeholder='VELOCIDADE'
        inputError={touched.speed && errors.speed}
        component={InputNumber}
      />
    </>
  );
};

export default StatisticsSectionForm;
