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
  z-index: 9999;
`;

export const DialogBody = styled.div`
  position: relative;
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
  @media (min-width: 768px) {
    max-height: 80vh;
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

  @media (max-width: 767px) {
    height: fit-content;
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

export const DialogActionFloatBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: 767px) {
    position: fixed;
    width: 100%;
    /* right: 0;
    left: auto; */
  }
`;

export const DialogActionFloatBoxWrapper = styled.div`
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;
export const DialogPokeballImage = styled.img`
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;
