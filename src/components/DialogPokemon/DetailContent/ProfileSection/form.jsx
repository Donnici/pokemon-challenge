import React from 'react';

import { useFormikContext, Field } from 'formik';

import InputText from 'components/InputText';
import camera from 'assets/images/camera.png';

import * as S from '../styled';

const ProfileSectionForm = () => {
  const { values, errors, touched, setFieldValue } = useFormikContext();
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const saveFile = async (e) => {
    const { files } = e.target;
    const base64 = await toBase64(files[0]);
    setFieldValue('image', base64);
    setFieldValue('thumbnail', base64);
  };

  return (
    <>
      <S.DialogPokemonBoxImage
        onClick={() => document.getElementById('pokemonImageField').click()}
      >
        <S.DialogPokemonImage
          src={values.image || camera}
          alt={`Imagem do pokemon`}
        />
        <input id='pokemonImageField' type='file' hidden onChange={saveFile} />
      </S.DialogPokemonBoxImage>
      <S.ColBox>
        <Field
          label='Nome'
          name='name'
          placeholder='Nome'
          inputError={touched.name && errors.name}
          component={InputText}
        />
      </S.ColBox>
    </>
  );
};

export default ProfileSectionForm;
