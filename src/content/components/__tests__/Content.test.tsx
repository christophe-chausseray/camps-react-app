import React from 'react';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../utilTests';
import { useListCampingItems } from '../../../map/hooks';
import { useAddComment, useCommentList } from '../../../comment/hooks';
import { useCampingDetail } from '../../../detail/hooks';
import { Content } from '../Content';

jest.mock('../../../map/hooks/useListCampingItems');
jest.mock('../../../detail/hooks/useCampingDetail');
jest.mock('../../../comment/hooks/useAddComment');
jest.mock('../../../comment/hooks/useCommentList');

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

const COMMENT_MOCK = {
  title: 'The test comment',
  description : 'This is a super comment',
  author: 'test'
}

describe('Content', () => {
  it('can open the sidebar while on click event on the marker and then close it', () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);
    useCampingDetail.mockReturnValue(DETAIL_CAMPING_ITEM_MOCK);

    renderWithProviders(
      <Content />
    );

    userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

    expect(screen.getByRole('complementary', { expanded: true })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(screen.getByRole('complementary', { expanded: false })).toBeInTheDocument();
  });

  it('can open the sidebar and display camping item information', () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);
    useCampingDetail.mockReturnValue(DETAIL_CAMPING_ITEM_MOCK);

    renderWithProviders(
      <Content />
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

  it('can open the comment tab, add a comment and display it', async () => {
    useListCampingItems.mockReturnValue(CAMPING_ITEMS_MOCK);
    useCampingDetail.mockReturnValue(DETAIL_CAMPING_ITEM_MOCK);
    const addComment = jest.fn();
    useAddComment.mockReturnValue({ addComment });
    useCommentList.mockReturnValue({ comments: [{id: 'test-id', ...COMMENT_MOCK}] });

    renderWithProviders(
      <Content />
    );

    userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

    userEvent.click(screen.getByRole('listitem', { name: /CommentTab/i }));

    expect(screen.getByRole('form', { name: /CommentForm/i })).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox', { name: /Title/i }), COMMENT_MOCK.title);
    userEvent.type(screen.getByRole('textbox', { name: /Description/i }), COMMENT_MOCK.description);
    userEvent.type(screen.getByRole('textbox', { name: /Author/i }), COMMENT_MOCK.author);

    userEvent.click(screen.getByRole('button', { name: /Submit Comment/i }));

    await waitFor(() => {
      expect(addComment).toHaveBeenCalledWith({
        variables: {
          campingId: CAMPING_ITEMS_MOCK.campingItems[0].id,
          commentInput: {
            title: COMMENT_MOCK.title,
            description: COMMENT_MOCK.description,
            author: COMMENT_MOCK.author
          }
        },
        refetchQueries: expect.anything()
      });
    });

    const commentList = screen.getByRole('list', { name: /CommentList/i });
    expect(screen.getByRole('listitem', { name: COMMENT_MOCK.title })).toBeInTheDocument();
    expect(within(commentList).getByText(COMMENT_MOCK.title)).toBeInTheDocument();
    expect(within(commentList).getByText(COMMENT_MOCK.description)).toBeInTheDocument();
    expect(within(commentList).getByText(COMMENT_MOCK.author)).toBeInTheDocument();
  });
})
