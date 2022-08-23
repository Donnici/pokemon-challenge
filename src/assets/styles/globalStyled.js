import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  html,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
  }

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
  }

  b,
  strong {
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    font-family: 'Open Sans', sans-serif;
  }

  input ,
  select {
    appearance: none;
    font-family: 'Open Sans', sans-serif;
  }

  ul {
    list-style: none;
  }


  .dialog-wrapper-center {
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100vh;

    & .rc-dialog {
      @media (max-width: 767px) {
        margin: 0;
        &-content {
          width: 100vw;
          height: 100vh;
        }
      }
    }
  }

  @media (min-width: 768px){
    .rc-dialog {
      width: 36rem;
    }
  }
`;
