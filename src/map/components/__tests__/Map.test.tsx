import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utilTests';
import { Map } from '../Map';
import { useListCampingItems } from '../../hooks';

jest.mock('../../hooks/useListCampingItems');

const CAMPING_ITEMS_MOCK = {
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
};

describe('Map', () => {
  it('render the map with markers', () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);

    renderWithProviders(<Map />);

    screen.getByRole('main', { name: /Map/i });
    const campingMarker = screen.getAllByRole('listitem', { name: /CampingMarker/i });
    expect(campingMarker.length).toEqual(2);
  });

  it('render the name in the info window only when we go on the marker', () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);

    renderWithProviders(<Map />);

    userEvent.hover(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

    screen.getByText(/le super camping/i);

    userEvent.unhover(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

    const infoWindow = screen.queryByText(/le super camping/i);
    expect(infoWindow).not.toBeInTheDocument();
  });
});
