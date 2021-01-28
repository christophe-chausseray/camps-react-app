import React from 'react';
import styled from 'styled-components';
import { Map } from './../../map';
import { Sidebar, SidebarHeader, SidebarContent, Tabs, Tab } from '../../common';
import { DetailCampingItem, CampingImage, CampingTitle, Comment } from './../../sidebar';
import { useDetailCampingItem } from './../../sidebar/hooks';

const Container = styled.div`
  display: flex
`;

function Content() {
  const [sidebarIsOpened, setSidebarIsOpened] = React.useState(false);
  const [campingId, setCampingId] = React.useState(null);
  const closeSidebar = () => setSidebarIsOpened(false);
  const displayCamping = (id: string) => {
    if (sidebarIsOpened === false) {
      setSidebarIsOpened(true);
    }
    setCampingId(id);
  };
  const { campingItem } = useDetailCampingItem(campingId);

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
              <DetailCampingItem campingItem={campingItem} />
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
