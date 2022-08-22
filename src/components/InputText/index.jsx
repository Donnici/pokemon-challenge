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
  field,
  inputError,
  customLabel,
  ...props
}) => (
  <S.InputTextWrapper className={className}>
    {!customLabel ? label && <S.Label>{label}</S.Label> : customLabel}

    <S.Input
      type={type}
      placeholder={placeholder}
      {...field}
      {...props}
      inputError={!!inputError}
    />
    {inputError && <S.Error>{inputError}</S.Error>}
  </S.InputTextWrapper>
);

export default InputText;
