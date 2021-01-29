import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      <Sidebar isExpanded={false}>
        <SidebarHeader closeSidebar={jest.fn()}>{{}}</SidebarHeader>
        <SidebarContent>
          <p>Sidebar content</p>
        </SidebarContent>
      </Sidebar>
    );

    expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'false');

    rerender(
      <Sidebar isExpanded={true}>
        <SidebarHeader closeSidebar={jest.fn()}>{{}}</SidebarHeader>
        <SidebarContent>
          <p>Sidebar content</p>
        </SidebarContent>
      </Sidebar>
    );

    expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('can close the sidebar', () => {
    const closeSidebar = jest.fn();
    render(
      <Sidebar isExpanded={true}>
        <SidebarHeader closeSidebar={closeSidebar}>{{}}</SidebarHeader>
        <SidebarContent>
          <p>Sidebar content</p>
        </SidebarContent>
      </Sidebar>
    );

    userEvent.click(screen.getByRole('button', { name: /Close/i }));

    expect(closeSidebar).toHaveBeenCalled();
  });

  it('throw an error when sidebar does not have children', () => {
    expect(() => {
      render(<Sidebar isExpanded={false}>{}</Sidebar>);
    }).toThrow('children are mandatory');
  });

  it('display title in the sidebar', () => {
    render(
      <Sidebar isExpanded={true}>
        <SidebarHeader closeSidebar={jest.fn()}>
          {{
            title: <p>Sidebar title</p>,
          }}
        </SidebarHeader>
      </Sidebar>
    );

    expect(screen.getByText(/Sidebar title/i)).toBeInTheDocument();
  });

  it('display image in the sidebar', () => {
    render(
      <Sidebar isExpanded={true}>
        <SidebarHeader closeSidebar={jest.fn()}>
          {{
            image: <img src="/path/to/image.jpg" alt="test" />,
          }}
        </SidebarHeader>
      </Sidebar>
    );

    expect(screen.getByAltText(/test/i)).toBeInTheDocument();
  });

  it('display content in the sidebar', () => {
    render(
      <Sidebar isExpanded={true}>
        <SidebarContent>
          <p>Sidebar content</p>
        </SidebarContent>
      </Sidebar>
    );

    expect(screen.getByText(/Sidebar content/i)).toBeInTheDocument();
  });

  it('throw an error when sidebar content does not have children', () => {
    expect(() => {
      render(
        <Sidebar isExpanded={false}>
          <SidebarContent>{}</SidebarContent>
        </Sidebar>
      );
    }).toThrow('children are mandatory');
  });
});
