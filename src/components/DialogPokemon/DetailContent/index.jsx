import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Formik } from 'formik';

import CharacteristicSection from './CharacteristicSection';
import SkillSection from './SkillSection';
import TypeSection from './TypeSection';
import StatisticsSection from './StatisticsSection';
import ProfileSection from './ProfileSection';
import { PokemonInitialValue, PokemonSchema } from './validationForm';

const DetailContent = ({ pokemon, onClose }) => {
  const [customEdit, setCustomEdit] = useState(true);

  const renderFormWrapper = (children) => {
    if (customEdit) {
      return (
        <Formik
          initialValues={PokemonInitialValue()}
          validationSchema={PokemonSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit }) => <form onSubmit={handleSubmit}>{children}</form>}
        </Formik>
      );
    }
    return children;
  };

  return renderFormWrapper(
    <>
      <ProfileSection
        pokemon={pokemon}
        onClose={onClose}
        changeToForm={setCustomEdit}
      />
      <CharacteristicSection
        hp={pokemon.hp}
        weight={pokemon.weight}
        height={pokemon?.height}
      />
      <TypeSection types={pokemon?.types} />
      <SkillSection skills={pokemon?.skills} />
      <StatisticsSection
        attack={pokemon?.attack}
        defense={pokemon?.defense}
        specialAttack={pokemon?.specialAttack}
        specialDefense={pokemon?.specialDefense}
        speed={pokemon?.speed}
      />
    </>
  );
};

DetailContent.propTypes = {
  pokemon: PropTypes.object,
  onClose: PropTypes.func,
};

export default DetailContent;
