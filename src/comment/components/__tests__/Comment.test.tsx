import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../utilTests';
import { Comment } from '../Comment';
import { useCommentList, useAddComment } from '../../hooks';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/useCommentList');
jest.mock('../../hooks/useAddComment');

const COMMENT_MOCK = {
  title: 'The test comment',
  description: 'This is a super comment',
  author: 'test',
};

describe('Comment', () => {
  it('can open/close the comment form when clicking on the adder section', () => {
    (useAddComment as jest.Mock).mockReturnValue({ addComment: jest.fn() });
    (useCommentList as jest.Mock).mockReturnValue({ comments: [] });

    renderWithProviders(<Comment campingId='camping-test-id' />);

    expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');

    userEvent.click(screen.getByRole('region', { name: /Add Comment/i }));

    expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'true');

    userEvent.click(screen.getByRole('region', { name: /Add Comment/i }));

    expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');
  });

  it('can close the comment form when submitting the form', async () => {
    const addComment = jest.fn();
    (useAddComment as jest.Mock).mockReturnValue({ addComment });
    (useCommentList as jest.Mock).mockReturnValue({ comments: [] });

    renderWithProviders(<Comment campingId='camping-test-id' />);

    expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');

    userEvent.click(screen.getByRole('region', { name: /Add Comment/i }));

    expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'true');

    userEvent.type(screen.getByRole('textbox', { name: /Title/i }), COMMENT_MOCK.title);
    userEvent.type(screen.getByRole('textbox', { name: /Description/i }), COMMENT_MOCK.description);
    userEvent.type(screen.getByRole('textbox', { name: /Author/i }), COMMENT_MOCK.author);

    userEvent.click(screen.getByRole('button', { name: /Submit Comment/i }));

    await waitFor(() => {
      expect(addComment).toHaveBeenCalledWith({
        variables: {
          campingId: expect.any(String),
          commentInput: {
            title: COMMENT_MOCK.title,
            description: COMMENT_MOCK.description,
            author: COMMENT_MOCK.author,
          },
        },
        refetchQueries: expect.anything(),
      });
    });

    expect(screen.getByRole('form', { name: /CommentForm/i })).toHaveAttribute('aria-expanded', 'false');
  });
});
