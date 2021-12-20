import { createGlobalStyle } from "styled-components";

const RootStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap');

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fs.xxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fs.xl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fs.lg};
  }

  h4 {
    font-size: ${({ theme }) => theme.fs.md};
  }

  h5 {
    font-size: ${({ theme }) => theme.fs.sm};
    }

  small, .text_small {
    font-size: ${({ theme }) => theme.fs.xs};
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.slate};
  }
`;

export default RootStyles;
