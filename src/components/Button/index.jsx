import React from 'react';

import * as S from './styled';

const Button = ({ text, icon, onClick, onlyIcon, onlyIconProps }) => {
  if (onlyIcon) {
    return (
      <S.ButtonIcon onClick={onClick} >
        <S.ButtonIconImage src={icon} alt={text} {...onlyIconProps} />
      </S.ButtonIcon>
    );
  }

  return (
  <S.ButtonWrapper className={`${icon ? 'icon' : ''}`} onClick={onClick}>
    {icon && <S.Icon src={icon} />}
    <S.Text>{text}</S.Text>
  </S.ButtonWrapper>
)};

export default Button;
