import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import mapMarker from '@iconify/icons-mdi/map-marker';

const Marker = styled.li`
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
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
  color: #ffff;
  font-family: ui-sans-serif;
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -15px;
    border-width: 5px;
    border-style: solid;
    border-color: #3986ac transparent transparent transparent;
  }
`;

type CampingMarkerProps = {
  id: string;
  name: string;
  displayCamping: (id: string) => void;
  lng: number;
  lat: number;
};

const CampingMarker = ({ id, name, displayCamping, lng, lat }: CampingMarkerProps) => {
  const [infoWindowIsOpen, setInfoWindowIsOpen] = React.useState(false);

  return (
    <Marker
      aria-label="CampingMarker"
      aria-describedby={name}
      onMouseEnter={() => setInfoWindowIsOpen(true)}
      onMouseLeave={() => setInfoWindowIsOpen(false)}
      onClick={() => displayCamping(id)}
    >
      {infoWindowIsOpen && (
        <InfoWindow id={name} role="tooltip">
          {name}
        </InfoWindow>
      )}
      <Icon icon={mapMarker} width={40} color="#2f7510" />
    </Marker>
  );
};

export { CampingMarker };
