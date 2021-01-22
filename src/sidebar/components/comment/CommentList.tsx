import React from 'react';
import styled from 'styled-components';
import { Comment as CommentType } from '../../../common';
import { useCommentList } from '../../hooks';

const Container = styled.ul`
  list-style-type: none;
`;

const Comment = styled.li``;

const Title = styled.h3``;

const Description = styled.p``;

const Author =styled.p``;

type CommentListProps = {
  campingId: string;
}

function CommentList({ campingId }: CommentListProps): JSX.Element {
  const { comments, loading } = useCommentList(campingId);
  const placeholder = 0 === comments.length || loading;

  if (placeholder) {
    return null;
  }

  return (
    <Container>
      {comments.map((comment: CommentType, index: number) => {
        return (
          <Comment key={index}>
            <Title>{comment.title}</Title>
            <Description>{comment.description}</Description>
            <Author>{comment.author}</Author>
          </Comment>
        );
      })}

    </Container>
  );
}

export { CommentList }
