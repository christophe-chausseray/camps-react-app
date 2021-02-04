import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from './header';
import { Content } from './content';
import { theme } from './common';

const GlobalStyle = createGlobalStyle`
 html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    margin: 0;
    overflow: hidden;
  }

  body {
    font-family: ui-sans-serif;
  }

  ul {
    display: block;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container role="document">
        <Header />
        <Content />
      </Container>
    </ThemeProvider>
  );
};

export default App;
