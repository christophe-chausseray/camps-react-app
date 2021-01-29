import React from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { CampingItem } from '../../common';

const DETAIL_CAMPING_ITEM = gql`
  query DetailCampingItem($campingId: ID!) {
    camping(id: $campingId) {
      id
      name
      description
      image
      address
      zipcode
      city
      nb_spots
      nb_stars
      phone_number
      email
      website
    }
  }
`;

function useCampingDetail(campingId: string | null): { campingItem: CampingItem | null } {
  const [getDetailedCamping, { called, loading, data }] = useLazyQuery(DETAIL_CAMPING_ITEM, { fetchPolicy: "network-only" });

  React.useEffect(() => {
    if (null !== campingId) {
      getDetailedCamping({ variables: { campingId } });
    }
  }, [campingId, getDetailedCamping]);

  if (!called || loading) {
    return { campingItem: null };
  }

  return { campingItem: data.camping };
}

export { DETAIL_CAMPING_ITEM, useCampingDetail }
