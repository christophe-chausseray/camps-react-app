import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Tabs, Tab } from '../Tabs';

describe('Tabs', () => {
  it('can switch from one Tab to another', () => {
    render(
      <ThemeProvider theme={theme}>
        <Tabs>
          <Tab title="Tab1">
            <p>Tab 1</p>
          </Tab>
          <Tab title="Tab2">
            <p>Tab 2</p>
          </Tab>
        </Tabs>
      </ThemeProvider>
    );

    expect(screen.getByText(/Tab 1/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('listitem', { name: /Tab2/ }));

    expect(screen.getByText(/Tab 2/i)).toBeInTheDocument();
  });
});
