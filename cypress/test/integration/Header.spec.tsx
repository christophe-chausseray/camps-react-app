import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../src/component/Header';

context('Header', () => {
  it('render title in the header', () => {
    render(<Header />);

    screen.getByText(/Le bon camping/i);
  });
});
