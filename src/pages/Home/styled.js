import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  ${({ theme}) => css`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    background-image: ${theme.colors.primary.gradient};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    & img {
      margin-bottom: 3rem;
    }
  `}
`;
