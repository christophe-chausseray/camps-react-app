import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('render title in the header', () => {
    render(<Header />);

    screen.getByRole('heading', { name: /Le bon camping/i });
  });
});
