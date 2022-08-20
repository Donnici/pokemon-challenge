import styled, { css } from 'styled-components';

import img from 'assets/images/pageBackground.png';

export const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  background-image: url(${img});
  background-position: center;
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
`;

export const BoxCharacter = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CharacterFeedBack = styled.img`
  ${({ alwaysVisible }) => css`
    position: absolute;
    width: 8rem;
    height: 8rem;
    top: -8.5rem;
    visibility: ${alwaysVisible ? 'visible' : 'hidden'};
    opacity: ${Number(alwaysVisible)};
    opacity: ${Number(alwaysVisible)};
    transform: ${alwaysVisible ? 'translateY(0)' : 'translateY(3rem)'};
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  `}
`;

export const CharacterImage = styled.img`
  width: 8rem;
  height: 8rem;
`;
