import styled, { css } from 'styled-components';


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

export const DialogPokemonName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 3rem 0;
  text-transform: uppercase;
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
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const Skills = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0.5rem;
`;
