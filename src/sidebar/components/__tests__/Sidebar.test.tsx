import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utilTests';
import { Map } from '../../../map';
import { useListCampingItems } from '../../../map/hooks';
import { useDetailCampingItem } from '../../hooks';
import { SidebarProvider } from '../../context';
import { Sidebar } from '../Sidebar';

jest.mock('../../../map/hooks/useListCampingItems');
jest.mock('../../hooks/useDetailCampingItem');

const CAMPING_ITEMS_MOCK = {
  campingItems: [
    {
      id: 'test-id-1',
      name: 'le super camping',
      location: {
        latitude: 4.1233324,
        longitude: 28.9022324,
      }
    },
    {
      id: 'test-id-2',
      name: 'le nouveau camping',
      location: {
        latitude: 5.1233324,
        longitude: 22.9022324,
      }
    }
  ]
};

const DETAIL_CAMPING_ITEM_MOCK = {
  campingItem: {
    id: 'test-id-1',
    name: 'le super camping',
    description: 'test description',
    image: '/path/to/test-image.jpg',
    address: '1 test street',
    zipcode: 19002,
    city: 'Paris',
    nb_spots: 20,
    nb_stars: 3,
    phone_number: '193485738',
    email: 'test@gmail.com',
    website: 'www.test-camping.com',
    location: {
      latitude: 4.1233324,
      longitude: 28.9022324,
    }
  }
}

describe('Sidebar', () => {
  it('can open the sidebar while on click event on the marker and then close it', () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);
    useDetailCampingItem.mockReturnValue(DETAIL_CAMPING_ITEM_MOCK);

    renderWithProviders(
      <SidebarProvider>
        <Sidebar />
        <Map />
      </SidebarProvider>
    );

    userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

    expect(screen.getByRole('complementary', { expanded: true })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.getByRole('complementary', { expanded: false })).toBeInTheDocument();
  });

  it('can open the sidebar and display camping item information', () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);
    useDetailCampingItem.mockReturnValue(DETAIL_CAMPING_ITEM_MOCK);

    renderWithProviders(
      <SidebarProvider>
        <Sidebar />
        <Map />
      </SidebarProvider>
    );

    userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

    expect(screen.getByRole('complementary', { expanded: true })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /le super camping/i })).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /StarIcon/i }).length).toBe(3);
    expect(screen.getByText(/test description/i)).toBeInTheDocument();
    /** @todo fix with test for loading image */
    // expect(screen.getByRole('img', { name: /le super camping/i})).toBeInTheDocument();
    expect(screen.getByText(/1 test street/i)).toBeInTheDocument();
    expect(screen.getByText(/19002/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/20/i)).toBeInTheDocument();
    expect(screen.getByText(/193485738/i)).toBeInTheDocument();
    expect(screen.getByText(/test@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/www.test-camping.com/i)).toBeInTheDocument();
  });
})
