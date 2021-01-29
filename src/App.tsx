import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { Content } from './content';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Container role="document">
      <Header />
      <Content />
    </Container>
  );
}

export default App;
