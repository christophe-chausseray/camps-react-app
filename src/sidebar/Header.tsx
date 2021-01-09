import React, { useContext } from 'react';
import styled from 'styled-components';
import { StarIcon } from '../common';
import { CloseIcon } from '../common';
import { useDetailCampingItem } from './detailCampingItem';
import { SidebarContext } from './SidebarContext';

const Container = styled.header`
  display: flex;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: #2f7510 2px solid;
  min-height: 170px;
`;

const LeftContainer = styled.div`
  width: 250px;
  margin-top: 40px;
  text-align: center;
`;

const RightContainer = styled.div`
  width: 250px;
`;

const CloseButton = styled.button`
  background-color: white;
  border: none;
  float: right;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const CampingName = styled.h2`
  font-size: 20px;
`;

const CampingImage = styled.img`
  width: 220px;
  margin: 0 10px 10px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.55);
`;


function Header() {
  const { updateIsExpanded, campingId } = useContext(SidebarContext);
  const { campingItem } = useDetailCampingItem(campingId);
  const displayNbStars = (nbStars: number) => {
    const content = [];
    for (let index = 0; index < nbStars; index++) {
      content.push(<StarIcon key={index} size={24} color="#ffd055" />);
    }

    return content;
  };

  if (!campingItem) {
    return null;
  }

  return (
    <Container>
      <LeftContainer>
        <CampingName>{campingItem.name}</CampingName>
        {null !== campingItem.nb_stars &&
          displayNbStars(campingItem.nb_stars)
        }
      </LeftContainer>
      <RightContainer>
        <CloseButton aria-label="Close" onClick={() => updateIsExpanded(false)}>
          <CloseIcon title="Close" size={20} />
        </CloseButton>
        <CampingImage src={campingItem.image} alt={campingItem.name} />
      </RightContainer>
    </Container>
  );
}

export { Header }
