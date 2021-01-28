import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, CampingItem } from '../../common';
import { DetailCampingItem } from './detailCampingItem';
import { Comment } from './comment';

const Container = styled.div`
  max-height: 60vh;
  width: 500px;
  padding-top: 20px;
  overflow-y: scroll;
`;

type SidebarProps = {
  campingItem: CampingItem;
  placeholder: boolean;
}
function SidebarContent({ campingItem, placeholder }: SidebarProps) {
  return (
    <Container>
      <Tabs>
        <Tab title='Detail'>
          <DetailCampingItem campingItem={campingItem} placeholder={placeholder} />
        </Tab>
        <Tab title='Comment'>
          <Comment campingItem={campingItem} placeholder={placeholder} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export { SidebarContent }
