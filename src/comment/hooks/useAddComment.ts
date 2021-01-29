import { useMutation, gql } from '@apollo/client';

const ADD_COMMENT = gql`
  mutation AddCommentForCamping($campingId: ID!, $commentInput: CommentInput) {
    addComment(campingId: $campingId, commentInput: $commentInput) {
      id
      title
      description
      author
    }
  }
`;

function useAddComment() {
  const [addComment, { data }] = useMutation(ADD_COMMENT);

  return { addComment, data };
}

export { useAddComment }
