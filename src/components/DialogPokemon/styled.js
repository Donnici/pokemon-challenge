import styled, { css } from 'styled-components';

export const DialogCloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.functional.light.lightest};
    padding: 1rem;
    border-radius: 100%;
    border: 0.2rem solid silver;
  `}
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const DialogBody = styled.div`
  ${({ theme }) => css`
    background-image: ${theme.colors.primary.gradient};
    padding: 0;
    display: flex;
  `}
  overflow: auto;
  @media (max-width: 767px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const DialogPokemonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;

  margin-top: 12rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.functional.light.lightest};
    border-top-left-radius: 3rem;
    border-top-right-radius: 3rem;
  `}

  /* .rc-dialog-body {
    height: 100vh;
    overflow: auto;
  }
  */
  @media (min-width: 767px) {
    margin-top: 15rem;

    .rc-dialog-body {
      height: 100%;
    }
  }
`;

export const DialogTranslateBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 2rem;

  transform: translateY(-10rem);
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
  margin: 3rem 0;
  text-transform: uppercase;
  padding: 0 1.5rem;
`;

export const DialogPokemonTypeBox = styled.div``;

export const DialogPokeballImage = styled.img`
  position: fixed;
  bottom: 0;
  right: 35.2%;
  border-radius: 100%;
`;
