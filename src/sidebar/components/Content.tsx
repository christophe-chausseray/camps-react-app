import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '../../common';

const Container = styled.div`
  max-height: 60vh;
  width: 500px;
  padding-top: 20px;
  overflow-y: scroll;
`;

type SidebarProps = {
  renderDetailTab: () => void;
}
function SidebarContent({ renderDetailTab }: SidebarProps) {
  return (
    <Container>
      <Tabs>
        <Tab title='Detail'>
          {renderDetailTab()}
        </Tab>
        <Tab title='Comment'>
          <h2>Comment</h2>
        </Tab>
      </Tabs>
    </Container>
  );
}

export { SidebarContent }
