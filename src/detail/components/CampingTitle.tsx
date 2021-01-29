import React from 'react';
import styled from 'styled-components';
import { CampingItem, Placeholder, StarIcon } from '../../common';

const CampingName = styled.h2`
  font-size: 20px;
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

type CampingTitleProps = {
  campingItem: CampingItem;
};

function CampingTitle({ campingItem }: CampingTitleProps) {
  const displayNbStars = (nbStars: number) => {
    const content = [];
    for (let index = 0; index < nbStars; index++) {
      content.push(<StarIcon key={index} size={24} color="#ffd055" />);
    }

    return content;
  };

  if (null === campingItem) {
    return (
      <>
        <CampingNamePlaceholder />
        <StarPlaceholder />
      </>
    );
  }

  return (
    <>
      <CampingName>{campingItem.name}</CampingName>
      {null !== campingItem.nb_stars &&
        displayNbStars(campingItem.nb_stars)
      }
    </>
  );
}

export { CampingTitle }
