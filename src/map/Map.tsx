
import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { useListCampingItems } from './useListCampingItems';
import { CampingItem } from '../common';
import { CampingMarker } from './CampingMarker';

const Container = styled.main`
  width: 100%;
  height: 90vh;
  position: relative;
`;

const Map = React.memo((): JSX.Element => {
  const center = {
    lat: 48.7717719,
    lng: 2.0907224,
  };
  const zoom = 8.5;
  const { campingItems } = useListCampingItems();

  const markers = campingItems.map((campingItem: CampingItem) => {
    return <CampingMarker
      key={campingItem.id}
      id={campingItem.id}
      name={campingItem.name}
      lng={campingItem.location.longitude}
      lat={campingItem.location.latitude}
    />
  });

  return (
    <Container aria-label="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </Container>
  );
});

export { Map };
