import React from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { Comment } from '../../common';

const LIST_COMMENTS_BY_CAMPING = gql`
  query ListCommentsByCamping($campingId: ID!) {
    comments(campingId: $campingId) {
      id
      title
      description
      author
      created_at
    }
  }
`;

function useCommentList(
  campingId: string | null
): { comments: Comment[]; listCommentsByCamping: () => void; loading: boolean } {
  const [listCommentsByCamping, { called, loading, data }] = useLazyQuery(LIST_COMMENTS_BY_CAMPING, {
    fetchPolicy: 'network-only',
  });

  React.useEffect(() => {
    if (null !== campingId) {
      listCommentsByCamping({ variables: { campingId } });
    }
  }, [campingId, listCommentsByCamping]);

  if (!called || loading) {
    return { comments: [], listCommentsByCamping, loading };
  }

  return { ...data, listCommentsByCamping, loading };
}

export { useCommentList, LIST_COMMENTS_BY_CAMPING };
