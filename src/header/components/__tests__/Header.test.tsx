import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../common';

describe('Header', () => {
  it('render title in the header', () => {
    render(<ThemeProvider theme={theme}><Header /></ThemeProvider>);

    screen.getByRole('heading', { name: /Le bon camping/i });
  });
});
