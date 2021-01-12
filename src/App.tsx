import React from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { Map } from './map';
import { Sidebar, SidebarProvider } from './sidebar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex
`;

function App(): JSX.Element {
  return (
    <Container role="document">
      <Header />
      <Content>
        <SidebarProvider>
          <Sidebar />
          <Map />
        </SidebarProvider>
      </Content>
    </Container>
  );
}

export default App;
