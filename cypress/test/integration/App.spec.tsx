import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../../src/App';

context('App', () => {
  it('renders without crashing', () => {
    render(<App />);

    screen.getByTestId('app-container');
  });
});

