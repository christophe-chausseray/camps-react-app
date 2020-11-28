import React from 'react';
import { Header, Map } from './component';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Map />
    </Container>
  );
}

export default App;
