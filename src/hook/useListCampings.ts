import { Camping } from './../model';
import { useQuery, gql } from '@apollo/client';

const LIST_CAMPINGS = gql`
  query listCampings {
    campings {
      name
      address
      city
      location {
        longitude
        latitude
      }
    }
  }
`;

function useListCampings(): {campings: Camping[]} {
  const { data } = useQuery(LIST_CAMPINGS);

  if (undefined === data) {
    return {campings: []};
  }

  return {campings: data.campings};
}

export { useListCampings };
