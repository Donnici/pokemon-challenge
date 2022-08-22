import React from 'react';

import PropTypes from 'prop-types';

import sword from 'assets/images/sword.png';
import speedIcon from 'assets/images/speed.png';
import shield from 'assets/images/shield.png';

import * as S from '../styled';

const StatisticsSection = ({
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed
 }) => {

  const statistics = [
    {
      name: 'Defesa',
      icon: shield,
      value: defense,
    },
    {
      name: 'Ataque',
      icon: sword,
      value: attack,
    },
    {
      name: 'Defesa Especial',
      icon: shield,
      value: specialDefense,
    },
    {
      name: 'Ataque Especial',
      icon: sword,
      value: specialAttack,
    },
    {
      name: 'Velocidade',
      icon: speedIcon,
      value: speed,
    },
  ];

  return (
    <>
      <S.DialogPokemonSectionBox>
        <S.DialogPokemonSectionDivider />
        <S.DialogPokemonSectionTitle>estatísticas</S.DialogPokemonSectionTitle>
        <S.DialogPokemonSectionDivider />
      </S.DialogPokemonSectionBox>
      <S.ColBox>
        {statistics.map(({ name, icon, value }) => (
          <S.RowBox key={name} justify='flex-start'>
            <S.RowBox width='100%' justify='space-between'>
              <S.StatisticKey>
                <S.StatisticImage src={icon} alt={`${name} icone`} />
                {name}
              </S.StatisticKey>
              <S.StatisticValue>{value}</S.StatisticValue>
            </S.RowBox>
          </S.RowBox>
        ))}
      </S.ColBox>
    </>
  );
};

StatisticsSection.propTypes = {
  attack: PropTypes.number,
  defense: PropTypes.number,
  specialAttack: PropTypes.number,
  specialDefense: PropTypes.number,
  speed: PropTypes.number,
};

export default StatisticsSection;
