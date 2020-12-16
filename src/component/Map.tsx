
import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import { useListCampings } from './../hook';
import { Camping } from '../model';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

function CampingMarker({lng, lat, name}: { lng: number, lat: number, name: string }): JSX.Element {
  const size = 10;
  const campingMarkerStyle = {
    position: 'absolute',
    width: size,
    height: size,
    left: -size / 2,
    top: -size / 2,

    border: '5px solid #00b92a',
    borderRadius: size,
    backgroundColor: '#00b92a'
  };

  return (
    <div style={campingMarkerStyle} />
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
