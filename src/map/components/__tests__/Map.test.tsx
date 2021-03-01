import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utilTests';
import { Map } from '../Map';

describe('Map', () => {
  it('render the map with markers', async () => {
    renderWithProviders(<Map />);

    await waitFor(() => {
      expect(screen.getByRole('main', { name: /Map/i })).toBeInTheDocument();
      expect(screen.getAllByRole('listitem', { name: /CampingMarker/i }).length).toEqual(2);
    });
  });

  it('render the name in the info window only when we go on the marker', async () => {
    renderWithProviders(<Map />);

    await waitFor(() => {
      userEvent.hover(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

      screen.getByText(/CAMPING HUTTOPIA RAMBOUILLET/i);

      userEvent.unhover(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

      const infoWindow = screen.queryByText(/CAMPING HUTTOPIA RAMBOUILLET/i);
      expect(infoWindow).not.toBeInTheDocument();
    });
  });
});
