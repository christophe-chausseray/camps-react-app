import React from 'react';
import styled from 'styled-components';
import { Map } from './../../map';
import { Sidebar, SidebarHeader, SidebarContent, DetailCampingItem } from './../../sidebar';
import { useDetailCampingItem } from './../../sidebar/hooks';

const Container = styled.div`
  display: flex
`;

function Content(): JSX.Element {
  const [sidebarIsOpened, setSidebarIsOpened] = React.useState(false);
  const [campingId, setCampingId] = React.useState(null);
  const closeSidebar = () => setSidebarIsOpened(false);
  const displayCamping = (id: string) => {
    if (sidebarIsOpened === false) {
      setSidebarIsOpened(true);
    }
    setCampingId(id);
  };
  const { campingItem, loading } = useDetailCampingItem(campingId);
  const placeholder = null === campingItem || loading;
//   const renderDetailTab = () => <DetailCampingItem campingItem={campingItem} placeholder={placeholder} />;

  return (
    <Container>
      <Sidebar isExpanded={sidebarIsOpened}>
        <SidebarHeader
          closeSidebar={closeSidebar}
          campingItem={campingItem}
          placeholder={placeholder}
        />
        <SidebarContent
          campingItem={campingItem}
          placeholder={placeholder}
        />
      </Sidebar>
      <Map
        displayCamping={displayCamping}
      />
    </Container>
  );
}

export { Content }
