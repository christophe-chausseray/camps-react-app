import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from '../common';
import { DetailCampingItem } from './detailCampingItem';

const Container = styled.div`
  max-height: 60vh;
  width: 500px;
  padding-top: 20px;
  overflow-y: scroll;
`;

function Content() {
  return (
    <Container>
      <Tabs>
        <Tab title='Detail'>
          <DetailCampingItem />
        </Tab>
        <Tab title='Comment'>
          <h2>Comment</h2>
        </Tab>
      </Tabs>
    </Container>
  );
}

export { Content }
