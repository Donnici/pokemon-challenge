import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Formik } from 'formik';

import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';

import CharacteristicSection from './CharacteristicSection';
import SkillSection from './SkillSection';
import TypeSection from './TypeSection';
import StatisticsSection from './StatisticsSection';
import ProfileSection from './ProfileSection';
import { PokemonInitialValue, PokemonSchema } from './validationForm';
import Button from 'components/Button';

import * as S from './styled';

const DetailContent = ({ pokemon, onClose, editable }) => {
  const { addPokemon } = useCatchedPokemons();
  const [customEdit, setCustomEdit] = useState(editable);

  const handleSubmit = (values) => {
    addPokemon(
      {
        ...values,
        skills: [],
      },
      true
    );
    onClose();
  };

  return (
    <Formik
      initialValues={PokemonInitialValue()}
      validationSchema={PokemonSchema}
      onSubmit={handleSubmit}
      validateOnBlur
      validateOnMount
    >
      {({ handleSubmit, errors }) => (
        <S.Form onSubmit={handleSubmit}>
          <ProfileSection
            pokemon={pokemon}
            onClose={onClose}
            changeToForm={setCustomEdit}
            showForm={editable}
          />
          <CharacteristicSection
            hp={pokemon.hp}
            weight={pokemon.weight}
            height={pokemon?.height}
            showForm={editable}
          />
          <TypeSection types={pokemon?.types} showForm={editable} />
          <SkillSection skills={pokemon?.skills} showForm={editable} />
          <StatisticsSection
            attack={pokemon?.attack}
            defense={pokemon?.defense}
            specialAttack={pokemon?.specialAttack}
            specialDefense={pokemon?.specialDefense}
            speed={pokemon?.speed}
            showForm={editable}
          />
          {editable && (
            <Button
              text='CRIAR POKEMON'
              type='submit'
              disabled={Object.keys(errors).length > 0}
            />
          )}
        </S.Form>
      )}
    </Formik>
  );
};

DetailContent.propTypes = {
  pokemon: PropTypes.object,
  onClose: PropTypes.func,
  editable: PropTypes.bool,
};

export default DetailContent;
