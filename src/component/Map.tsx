import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

function Map(): JSX.Element {
  const center = {
    lat: 48.7717719,
    lng: 2.0907224,
  };
  const zoom = 9;

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD5yNw_1eBAooLt00Hk3NqgRndNlNCHSGA' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >

      </GoogleMapReact>
    </Container>
  );
}

export { Map };
