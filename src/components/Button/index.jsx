import React from 'react';

import * as S from './styled';

const Button = ({
  type = 'button',
  text,
  icon,
  onClick,
  onlyIcon,
  onlyIconProps,
  disabled,
}) => {
  if (onlyIcon) {
    return (
      <S.ButtonIcon onClick={onClick} disabled={disabled}>
        <S.ButtonIconImage src={icon} alt={text} {...onlyIconProps} />
      </S.ButtonIcon>
    );
  }

  return (
    <S.ButtonWrapper
      type={type}
      className={`${icon ? 'icon' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <S.Icon src={icon} />}
      <S.Text>{text}</S.Text>
    </S.ButtonWrapper>
  );
};

export default Button;
