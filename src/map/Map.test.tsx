import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './../utilTests';
import { Map } from './Map';
import { useListCampingItems } from './useListCampingItems';

jest.mock('./useListCampingItems');

describe('Map', () => {
  it('render the map with markers', () => {
    useListCampingItems.mockReturnValue({
      campingItems: [
        {
          id: 'test-id-1',
          name: 'le super camping',
          location: {
            latitude: 4.1233324,
            longitude: 28.9022324,
          }
        },
        {
          id: 'test-id-2',
          name: 'le nouveau camping',
          location: {
            latitude: 5.1233324,
            longitude: 22.9022324,
          }
        }
      ]
    });

    renderWithProviders(<Map />);

    screen.getByTestId('camping-map');
    const campingMarker = screen.getAllByTestId('camping-marker');
    expect(campingMarker.length).toEqual(2);
  });
});
