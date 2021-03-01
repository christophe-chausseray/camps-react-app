import React from 'react';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../utilTests';
import { Content } from './Content';
import { FAKE_DATA } from '../../mock/handlers';

const COMMENT_MOCK = {
  title: 'The test comment',
  description: 'This is a super comment',
  author: 'test',
};

describe('Content', () => {
  it('can open the sidebar while on click event on the marker and then close it', async () => {
    renderWithProviders(<Content />);

    await waitFor(() => {
      userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

      expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'true');

      userEvent.click(screen.getByRole('button', { name: 'Close' }));

      expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('can open the sidebar and display camping item information', async () => {
    renderWithProviders(<Content />);

    await waitFor(() => {
      userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

      expect(screen.getByRole('complementary', { name: /Sidebar/i })).toHaveAttribute('aria-expanded', 'true');

      expect(screen.getByRole('heading', { name: /CAMPING HUTTOPIA RAMBOUILLET/i })).toBeInTheDocument();
      expect(screen.getAllByRole('img', { name: /StarIcon/i }).length).toBe(3);
      expect(screen.getByText(FAKE_DATA.campings[0].description)).toBeInTheDocument();
      expect(screen.getByText(/Route du Château d'eau/i)).toBeInTheDocument();
      expect(screen.getByText(/78120 RAMBOUILLET/i)).toBeInTheDocument();
      expect(screen.getByText(/20 spots/i)).toBeInTheDocument();
      expect(screen.getByText(/168403928/i)).toBeInTheDocument();
      expect(screen.getByText('contact@le-camping-huttopia.com')).toBeInTheDocument();
      expect(screen.getByText('le-camping-huttopia.com')).toBeInTheDocument();
    });
  });

  it('can open the comment tab, add a comment and display it', async () => {
    renderWithProviders(<Content />);

    await waitFor(() => {
      userEvent.click(screen.getAllByRole('listitem', { name: /CampingMarker/i })[0]);

      userEvent.click(screen.getByRole('listitem', { name: /Comment/i }));

      expect(screen.getByRole('form', { name: /CommentForm/i })).toBeInTheDocument();

      userEvent.type(screen.getByRole('textbox', { name: /Title/i }), COMMENT_MOCK.title);
      userEvent.type(screen.getByRole('textbox', { name: /Description/i }), COMMENT_MOCK.description);
      userEvent.type(screen.getByRole('textbox', { name: /Author/i }), COMMENT_MOCK.author);

      userEvent.click(screen.getByRole('button', { name: /Submit Comment/i }));
    });

    await waitFor(() => {
      const commentList = screen.getByRole('list', { name: /CommentList/i });
      expect(screen.getByRole('listitem', { name: COMMENT_MOCK.title })).toBeInTheDocument();
      expect(within(commentList).getByText(COMMENT_MOCK.title)).toBeInTheDocument();
      expect(within(commentList).getByText(COMMENT_MOCK.description)).toBeInTheDocument();
      expect(within(commentList).getByText(COMMENT_MOCK.author)).toBeInTheDocument();
    });
  });
});
