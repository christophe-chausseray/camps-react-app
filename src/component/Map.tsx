
import React, { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react';
import mapMarker from '@iconify/icons-mdi/map-marker';
import { useListCampings } from './../hook';
import { Camping } from '../model';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

const Marker = styled.div`
  display: block;
`;

const InfoWindow = styled.div`
  position: absolute;
  bottom: 5px;
  left: -20px;
  width: 80px;
  z-index: 1000000;
  background-color: #3986ac;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 12px rgba(0,0,0,.5);
  color: #ffff;
  font-family: ui-sans-serif;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -15px;
    border-width: 5px;
    border-style: solid;
    border-color: #3986ac transparent transparent transparent;
  }
`;

function CampingMarker({name}: { name: string }): JSX.Element {
  const [infoWindowIsOpen, setInfoWindowIsOpen] = useState(false);

  return (
    <Marker>
      {infoWindowIsOpen &&
        <InfoWindow>
          {name}
        </InfoWindow>
      }
      <Icon
        icon={mapMarker}
        width={40}
        color="#2f7510"
        onMouseEnter={() => setInfoWindowIsOpen(true)}
        onMouseLeave={() => setInfoWindowIsOpen(false)}
      />
    </Marker>
  );
}

function Map(): JSX.Element {
  const center = {
    lat: 48.7717719,
    lng: 2.0907224,
  };
  const zoom = 8.5;
  const { campings } = useListCampings();

  const markers = campings.map((camping: Camping, key: number) => {
    return <CampingMarker
      lng={camping.location.longitude}
      lat={camping.location.latitude}
      name={camping.name}
      key={key}
    />
  })

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD5yNw_1eBAooLt00Hk3NqgRndNlNCHSGA' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </Container>
  );
}

export { Map };
