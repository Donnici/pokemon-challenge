import React from 'react';

import InputNumber from 'components/InputNumber';
import { useFormikContext, Field } from 'formik';

const CharacteristicSectionForm = () => {
  const { errors, touched } = useFormikContext();
  return (
    <>
      <Field
        label='HP'
        name='hp'
        placeholder='HP'
        inputError={touched.hp && errors.hp}
        component={InputNumber}
      />
      <Field
        label='PESO'
        name='weight'
        placeholder='PESO'
        suffix='Kg'
        inputError={touched.weight && errors.weight}
        component={InputNumber}
      />
      <Field
        label='ALTURA'
        name='height'
        placeholder='ALTURA'
        suffix='Cm'
        inputError={touched.height && errors.height}
        component={InputNumber}
      />
    </>
  );
};

export default CharacteristicSectionForm;
