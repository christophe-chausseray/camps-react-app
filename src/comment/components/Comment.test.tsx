import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utilTests';
import { Comment } from './Comment';
import userEvent from '@testing-library/user-event';
import { FAKE_DATA } from '../../mock/handlers';

const COMMENT_MOCK = {
  title: 'The test comment',
  description: 'This is a super comment',
  author: 'test',
};

describe('Comment', () => {
  it('can open/close the comment form when clicking on the adder section', async () => {
    renderWithProviders(<Comment campingId={FAKE_DATA.campings[0].id} />);

    await waitFor(() => {
      expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');

      userEvent.click(screen.getByRole('region', { name: /Add Comment/i }));
    });

    await waitFor(() => {
      expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'true');

      userEvent.click(screen.getByRole('region', { name: /Add Comment/i }));
    });

    await waitFor(() => {
      expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('can close the comment form when submitting the form', async () => {
    renderWithProviders(<Comment campingId={FAKE_DATA.campings[0].id} />);

    await waitFor(() => {
      expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');

      userEvent.click(screen.getByRole('region', { name: /Add Comment/i }));
    });

    await waitFor(() => {
      expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'true');

      userEvent.type(screen.getByRole('textbox', { name: /Title/i }), COMMENT_MOCK.title);
      userEvent.type(screen.getByRole('textbox', { name: /Description/i }), COMMENT_MOCK.description);
      userEvent.type(screen.getByRole('textbox', { name: /Author/i }), COMMENT_MOCK.author);

      userEvent.click(screen.getByRole('button', { name: /Submit Comment/i }));
    });
  });
});
