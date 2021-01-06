import React, { useState } from 'react';
import { Header } from './header';
import { Map } from './map';
import styled from 'styled-components';
import { Sidebar } from './detailCamping/Sidebar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex
`;

function App(): JSX.Element {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);

  return (
    <Container role="document">
      <Header />
      <Content>
        <Sidebar isOpened={sidebarIsOpened} setIsOpened={setSidebarIsOpened} />
        <Map setSidebarIsOpened={setSidebarIsOpened} />
      </Content>
    </Container>
  );
}

export default App;
