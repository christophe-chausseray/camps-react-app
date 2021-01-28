import React from 'react';
import styled from 'styled-components';
import {
  StarIcon,
  CloseIcon,
  Placeholder,
  LazyLoadedImage,
  ImagePlaceholder
} from '../../common';

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

const CampingName = styled.h2`
  font-size: 20px;
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

const CampingNamePlaceholder = styled(Placeholder)`
  min-width: 250px;
  min-height: 45px;
  margin: 10px 0;
`;

const StarPlaceholder = styled(Placeholder)`
  min-width: 250px;
  min-height: 30px;
`;

type SidebarProps = {
  closeSidebar: () => void;
  campingItem: CampingItem;
  placeholder: boolean;
}

function SidebarHeader({ closeSidebar, campingItem, placeholder }: SidebarProps) {
  const displayNbStars = (nbStars: number) => {
    const content = [];
    for (let index = 0; index < nbStars; index++) {
      content.push(<StarIcon key={index} size={24} color="#ffd055" />);
    }

    return content;
  };

  if (placeholder) {
    return (
      <Container>
        <LeftContainer>
        <CampingNamePlaceholder />
        <StarPlaceholder />
      </LeftContainer>
      <RightContainer>
        <CloseButton aria-label="Close">
          <CloseIcon title="Close" size={20} />
        </CloseButton>
        <ImagePlaceholder />
      </RightContainer>
      </Container>
    );
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
        <CloseButton aria-label="Close" onClick={closeSidebar}>
          <CloseIcon title="Close" size={20} />
        </CloseButton>
        <LazyLoadedImage src={campingItem.image} alt={campingItem.name} />
      </RightContainer>
    </Container>
  );
}

export { SidebarHeader }
