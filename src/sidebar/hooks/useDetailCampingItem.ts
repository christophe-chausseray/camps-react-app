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
      location {
        longitude
        latitude
      }
    }
  }
`;

function useDetailCampingItem(campingId: string): { campingItem: CampingItem|null, loading: boolean } {
  const [getDetailedCamping, { called, loading, data }] = useLazyQuery(DETAIL_CAMPING_ITEM, { fetchPolicy: "network-only" });

  const fetchDetailCampingItem = React.useCallback(() => {
    if (null !== campingId) {
      getDetailedCamping({ variables: { campingId } });
    }
  }, [campingId, getDetailedCamping]);

  React.useEffect(() => {
    fetchDetailCampingItem()
  }, [campingId, fetchDetailCampingItem]);

  if (!called || loading) {
    return { campingItem: null, loading };
  }

  return { campingItem: data.camping, loading };
}

export { DETAIL_CAMPING_ITEM, useDetailCampingItem }
