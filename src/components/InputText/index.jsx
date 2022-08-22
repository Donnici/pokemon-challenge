import React from 'react';

import * as S from './styled';

const InputText = ({
  className,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  defaultValue,
  inputError
}) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      inputError={!!inputError}
    />
    {inputError && <S.Error>{inputError}</S.Error>}
  </S.InputTextWrapper>
);

export default InputText;
