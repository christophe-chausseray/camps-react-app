import React from 'react';
import { Header } from './header';
import { Map } from './map';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
function App(): JSX.Element {
  return (
    <Container data-testid="app-container">
      <Header />
      <Map />
    </Container>
  );
}

export default App;
