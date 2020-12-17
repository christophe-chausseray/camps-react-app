import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CampingMarker } from './CampingMarker';

describe('CampingMarker', () => {
  it('render the marker', () => {
    render(<CampingMarker/>);

    screen.getByTestId('camping-marker');
  });

  it('render the name in the info window only when we go on the marker', () => {
    render(<CampingMarker name='Le super camping' />);

    fireEvent.mouseEnter(screen.getByTestId('camping-marker'));

    screen.getByText(/Le super camping/i);

    fireEvent.mouseLeave(screen.getByTestId('camping-marker'));

    const infoWindow = screen.queryByText(/Le super camping/i);
    expect(infoWindow).not.toBeInTheDocument();
  });
});
