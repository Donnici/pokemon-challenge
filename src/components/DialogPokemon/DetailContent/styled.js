import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

import editIcon from 'assets/images/editIcon.png';
import { ButtonWithoutStyled } from 'components/Button/styled';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const DialogPokemonBoxImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.functional.light.lightest};
    border-radius: 100%;
    border: 0.5rem solid ${theme.colors.primary.default};
  `}
`;

export const DialogPokemonImage = styled.img`
  width: 10rem;
  height: auto;
  margin: 6rem;
`;

export const EditableNameBox = styled.div`
  display: flex;
  width: 100%;
  margin: 2.4rem 0;
  gap: 0.8rem;

  & .max-space {
    flex: 1;
  }
`;

export const DialogPokemonNameBox = styled(ButtonWithoutStyled)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DialogPokemonNameIcon = styled.img.attrs({
  src: editIcon,
})`
  width: 1.6rem;
  height: 1.6rem;
`;

export const DialogPokemonName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 3rem 2.8rem;
  text-transform: uppercase;
  text-align: center;
`;

export const DialogPokemonCharacteristicsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
`;

export const DialogPokemonCharacteristicItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  :not(:last-child) {
    border-right: 0.2rem solid silver;
  }
`;

export const DialogPokemonCharacteristicItemTitle = styled.p`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const DialogPokemonCharacteristicItemValue = styled.p`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const DialogPokemonSectionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
`;

export const DialogPokemonSectionDivider = styled.div`
  display: flex;
  width: 100%;
  height: 0.1rem;
  background-color: silver;
`;

export const DialogPokemonSectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 4rem 0;
  text-transform: uppercase;
  padding: 0 1.5rem;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'space-evenly'};
  align-items: center;
  align-content: center;
  width: ${({ width }) => width || 'initial'};
`;

export const ColBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Skills = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0.5rem;
`;

export const StatisticImage = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;
export const StatisticKey = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
  align-items: center;
  margin: 1rem 0;
`;

export const StatisticValue = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  align-items: center;
`;

export const Select = styled(ReactSelect)`
    font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
`;
