import React, { FC } from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient';

const DefaultProviders: FC = ({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>;
const renderHookWithProviders = (hook: () => any) =>
  renderHook(() => hook(), { wrapper: ({ children }) => <DefaultProviders>{children}</DefaultProviders> });

const renderWithProviders = (ui: React.ReactElement) => render(ui, { wrapper: DefaultProviders });

export { renderHookWithProviders, renderWithProviders };
