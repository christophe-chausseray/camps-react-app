import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('render title in the header', () => {
  render(<Header />);
  const title = screen.getByText(/Le bon camping/i);
  expect(title).toBeInTheDocument();
});
