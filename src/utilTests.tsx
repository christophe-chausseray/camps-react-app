import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient';
import { ThemeProvider } from 'styled-components';
import { theme } from './common';

const DefaultProviders: FC = ({ children }) => <ApolloProvider client={client}><ThemeProvider theme={theme}>{children}</ThemeProvider></ApolloProvider>;
const renderHookWithProviders = (hook: () => any) =>
  renderHook(() => hook(), { wrapper: ({ children }) => <DefaultProviders>{children}</DefaultProviders> });

const renderWithProviders = (ui: React.ReactElement) => render(ui, { wrapper: DefaultProviders });

export { renderHookWithProviders, renderWithProviders };
