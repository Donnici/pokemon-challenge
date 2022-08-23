import React from 'react';

import Select from 'react-select';

import chevron from 'assets/images/chevronDownBlack.png';

import * as S from './styled';

const DropdownPage = ({ label, options }) => (
  <S.DropdownWrapper>
    {label && <S.Label>{label}</S.Label>}

    <S.DropdownContent>
      <S.Select multiple>
        <S.DropdownOption value=''>Selecione o(s) tipo(s)</S.DropdownOption>
        {options &&
          options.map((option, index) => (
            <S.DropdownOption key={index} value={option.value}>
              {option.text}
            </S.DropdownOption>
          ))}
      </S.Select>
      <S.DropdownIcon src={chevron} alt='Chevron' />
    </S.DropdownContent>
  </S.DropdownWrapper>
);

export const SelectField = ({ options, field, form, ...props }) => (
  <Select
    {...field}
    {...props}
    options={options}
    value={
      options ? options.find((option) => option.value === field.value) : ''
    }
    onChange={(option) => form.setFieldValue(field.name, option.value)}
  />
);

export default DropdownPage;
