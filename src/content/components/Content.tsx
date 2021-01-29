import React from 'react';
import styled from 'styled-components';
import { Map } from './../../map';
import { Sidebar, SidebarHeader, SidebarContent, Tabs, Tab } from '../../common';
import { CampingTitle, CampingImage, CampingInformation } from './../../detail';
import { Comment } from './../../comment';
import { useCampingDetail } from './../../detail';

const Container = styled.div`
  display: flex
`;

const Content = () => {
  const [sidebarIsOpened, setSidebarIsOpened] = React.useState(false);
  const [campingId, setCampingId] = React.useState<string | null>(null);
  const closeSidebar = () => setSidebarIsOpened(false);
  const displayCamping = (id: string) => {
    if (sidebarIsOpened === false) {
      setSidebarIsOpened(true);
    }
    setCampingId(id);
  };
  const { campingItem } = useCampingDetail(campingId);

  return (
    <Container>
      <Sidebar isExpanded={sidebarIsOpened}>
        <SidebarHeader closeSidebar={closeSidebar}>
          {{
            title: <CampingTitle campingItem={campingItem} />,
            image: <CampingImage campingItem={campingItem} />
          }}
        </SidebarHeader>
        <SidebarContent>
          <Tabs>
            <Tab title="Detail">
              <CampingInformation campingItem={campingItem} />
            </Tab>
            <Tab title="Comment">
              <Comment campingId={campingId} />
            </Tab>
          </Tabs>
        </SidebarContent>
      </Sidebar>
      <Map displayCamping={displayCamping} />
    </Container>
  );
}

export { Content }
