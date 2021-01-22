import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, CampingItem } from '../../common';
import { DetailCampingItem } from './detailCampingItem';
import { CommentList } from './comment';

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
  const campingId = (!placeholder) ? campingItem.id : null;

  return (
    <Container>
      <Tabs>
        <Tab title='Detail'>
          <DetailCampingItem campingItem={campingItem} placeholder={placeholder} />
        </Tab>
        <Tab title='Comment'>
          <CommentList campingId={campingId} />
        </Tab>
      </Tabs>
    </Container>
  );
}

export { SidebarContent }
