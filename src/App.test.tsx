import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utilTests';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    renderWithProviders(<App />);

    screen.getByRole('document');
  });
});

