import styled, { css } from 'styled-components';

export const TagContent = styled.p`
  ${({ theme, color }) => css`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${theme.colors.functional.light.lightest};
    background-color: ${theme.colors.pokemon.types[color] || theme.colors.primary.default};
    padding: 1rem 2rem;
    border-radius: 2rem;
    text-transform: uppercase;
    margin: 0 1rem;
  `}
`;
