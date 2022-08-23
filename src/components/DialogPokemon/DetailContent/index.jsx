import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { v4 } from 'uuid';

import useCatchedPokemons from 'contexts/CatchedPokemons/useCatchedPokemons';
import Button from 'components/Button';
import useLocale from 'contexts/Locale/useLocale';

import CharacteristicSection from './CharacteristicSection';
import SkillSection from './SkillSection';
import TypeSection from './TypeSection';
import StatisticsSection from './StatisticsSection';
import ProfileSection from './ProfileSection';
import { PokemonInitialValue, PokemonSchema } from './validationForm';

import * as S from './styled';

const DetailContent = ({ pokemon, onClose, editable }) => {
  const { addPokemon } = useCatchedPokemons();
  const { getLocaleText } = useLocale();
  const [customEdit, setCustomEdit] = useState(editable);

  const handleEditPokemon = () => {
    if (pokemon.isCustom) {
      setCustomEdit(true);
    }
  };

  const handleSubmit = (values) => {
    addPokemon(
      {
        ...values,
        id: v4(),
        types: values.types.map((t) => t.value),
        skills: values.skills.join(', '),
      },
      true
    );
    onClose();
  };

  return (
    <Formik
      initialValues={PokemonInitialValue(pokemon, getLocaleText)}
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
            changeToForm={handleEditPokemon}
            showForm={editable || customEdit}
          />
          <S.ColBox>
            <CharacteristicSection
              hp={pokemon.hp}
              weight={pokemon.weight}
              height={pokemon?.height}
              showForm={editable || customEdit}
            />
            <TypeSection
              types={pokemon?.types}
              showForm={editable || customEdit}
            />
            <SkillSection
              skills={pokemon?.skills}
              showForm={editable || customEdit}
            />
            <StatisticsSection
              attack={pokemon?.attack}
              defense={pokemon?.defense}
              specialAttack={pokemon?.specialAttack}
              specialDefense={pokemon?.specialDefense}
              speed={pokemon?.speed}
              showForm={editable || customEdit}
            />
          </S.ColBox>
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
