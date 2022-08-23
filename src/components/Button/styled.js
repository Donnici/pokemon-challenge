import styled from 'styled-components';

export const ButtonWithoutStyled = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ButtonWrapper = styled.button`
  padding: 1.6rem 2.4rem;
  background-color: ${({ disabled}) => disabled ? 'silver': '#ff3d71'};
  border: 1px solid ${({ disabled}) => disabled ? 'silver': '#ff3d71'};
  border-radius: 42px;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;

  &.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border: 4px solid #db2c66;
  }

  &:hover {
    background-color: ${({ disabled}) => disabled ? 'silver': '#db2c66'};
  }
`;

export const Icon = styled.img``;

export const Text = styled.span``;

export const ButtonIcon = styled(ButtonWithoutStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 4.8rem;
  height: 4.8rem;
  background-color: #edf1f7;
  border-radius: 4px;
`;

export const ButtonIconImage = styled.img`
  display: flex;
  width:${({ width }) => width || '1.6rem'};
  height:${({ height }) => height || '1.2rem'};
`;
