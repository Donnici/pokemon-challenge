import React from 'react';

import chevron from 'assets/images/chevronDownBlack.png';

import * as S from './styled';

const InputNumber = ({
  className,
  label,
  placeholder,
  name,
  suffix,
  field,
  form,
  customLabel,
  inputError,
  ...props
}) => {
  return (
    <S.InputNumberWrapper className={className}>
      {!customLabel ? label && <S.Label>{label}</S.Label> : customLabel}

      <S.InputContent>
        <S.Input
          type='number'
          placeholder={placeholder}
          {...field}
          {...props}
        />

        {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        <S.InputActions>
          <S.Arrow
            src={chevron}
            className='increase'
            alt='Mais'
            onClick={() => document.getElementsByName(field.name)[0].stepUp()}
          />
          <S.Arrow
            src={chevron}
            className='decrease'
            alt='Menos'
            onClick={() => document.getElementsByName(field.name)[0].stepDown()}
          />
        </S.InputActions>
      </S.InputContent>
        {inputError && <S.Error>{inputError}</S.Error>}
    </S.InputNumberWrapper>
  );
};

export default InputNumber;
