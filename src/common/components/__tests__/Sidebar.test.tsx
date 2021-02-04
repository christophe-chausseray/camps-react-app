import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { Sidebar, SidebarContent, SidebarHeader } from './../Sidebar';

describe('Sidebar', () => {
  let originalError: () => void;

  beforeEach(() => {
    originalError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });

  it('can show the sidebar when it is expanded', () => {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <Sidebar isExpanded={false}>
          <SidebarHeader closeSidebar={jest.fn()}>{{}}</SidebarHeader>
          <SidebarContent>
            <p>Sidebar content</p>
          </SidebarContent>
        </Sidebar>
      </ThemeProvider>
    );

    expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'false');

    rerender(
      <ThemeProvider theme={theme}>
        <Sidebar isExpanded={true}>
          <SidebarHeader closeSidebar={jest.fn()}>{{}}</SidebarHeader>
          <SidebarContent>
            <p>Sidebar content</p>
          </SidebarContent>
        </Sidebar>
      </ThemeProvider>
    );

    expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('can close the sidebar', () => {
    const closeSidebar = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Sidebar isExpanded={true}>
          <SidebarHeader closeSidebar={closeSidebar}>{{}}</SidebarHeader>
          <SidebarContent>
            <p>Sidebar content</p>
          </SidebarContent>
        </Sidebar>
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button', { name: /Close/i }));

    expect(closeSidebar).toHaveBeenCalled();
  });

  it('throw an error when sidebar does not have children', () => {
    expect(() => {
      render(<ThemeProvider theme={theme}><Sidebar isExpanded={false}>{}</Sidebar></ThemeProvider>);
    }).toThrow('children are mandatory');
  });

  it('display title in the sidebar', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sidebar isExpanded={true}>
          <SidebarHeader closeSidebar={jest.fn()}>
            {{
              title: <p>Sidebar title</p>,
            }}
          </SidebarHeader>
        </Sidebar>
      </ThemeProvider>
    );

    expect(screen.getByText(/Sidebar title/i)).toBeInTheDocument();
  });

  it('display image in the sidebar', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sidebar isExpanded={true}>
          <SidebarHeader closeSidebar={jest.fn()}>
            {{
              image: <img src="/path/to/image.jpg" alt="test" />,
            }}
          </SidebarHeader>
        </Sidebar>
      </ThemeProvider>
    );

    expect(screen.getByAltText(/test/i)).toBeInTheDocument();
  });

  it('display content in the sidebar', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sidebar isExpanded={true}>
          <SidebarContent>
            <p>Sidebar content</p>
          </SidebarContent>
        </Sidebar>
      </ThemeProvider>
    );

    expect(screen.getByText(/Sidebar content/i)).toBeInTheDocument();
  });

  it('throw an error when sidebar content does not have children', () => {
    expect(() => {
      render(
        <ThemeProvider theme={theme}>
          <Sidebar isExpanded={false}>
            <SidebarContent>{}</SidebarContent>
          </Sidebar>
        </ThemeProvider>
      );
    }).toThrow('children are mandatory');
  });
});
