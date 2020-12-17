import { CampingItem } from './campingItem';
import { useQuery, gql } from '@apollo/client';

const LIST_CAMPING_ITEMS = gql`
  query listCampingItems {
    campings {
      id
      name
      location {
        longitude
        latitude
      }
    }
  }
`;

function useListCampingItems(): { campingItems: CampingItem[] } {
  const { data } = useQuery(LIST_CAMPING_ITEMS);

  if (undefined === data) {
    return {campingItems: []};
  }

  return { campingItems: data.campings };
}

export { useListCampingItems };
