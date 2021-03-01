import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import headIcon from '@iconify/icons-mdi/head';
import { CampsThemedProps, Comment, formatDate } from '../../common';
import { useCommentList } from '../hooks';

const Container = styled.ul`
  margin-bottom: 10px;
`;

const NoComments = styled.div`
  min-height: 280px;
  font-size: ${({ theme }: CampsThemedProps) => theme.fontsize.subTitle};
  text-align: center;
  line-height: 200px;
`;

const CommentItem = styled.li`
  width: 97%;
  margin-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.55);
`;

const CommentHeader = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Title = styled.h3`
  color: ${({ theme }: CampsThemedProps) => theme.colors.green};
  margin: 0px;
`;

const Description = styled.p``;

const IconWrapper = styled.div`
  padding-top: 10px;
`;

const Author = styled.p`
  font-size: ${({ theme }: CampsThemedProps) => theme.fontsize.normal};
  text-transform: capitalize;
  padding-left: 5px;
  flex-grow: 2;
`;

const CreatedDate = styled.p`
  margin-right: 10px;
`;

type CommentListProps = {
  campingId: string | null;
};

const CommentList = ({ campingId }: CommentListProps) => {
  const { comments, loading } = useCommentList(campingId);
  const placeholder = 0 === comments.length || loading;

  if (placeholder) {
    return (
      <NoComments>
        <p>Be the first to comment on this camping ! ;)</p>
      </NoComments>
    );
  }

  return (
    <Container aria-label="CommentList">
      {comments.map((comment: Comment) => {
        return (
          <CommentItem aria-label={comment.title} key={comment.id}>
            <CommentHeader>
              <IconWrapper>
                <Icon icon={headIcon} color="lightgrey" width="24px" height="24px" />
              </IconWrapper>
              <Author>{comment.author}</Author>
              <CreatedDate>
                {formatDate(comment.created_at)}
              </CreatedDate>
            </CommentHeader>
            <Title>{comment.title}</Title>
            <Description>{comment.description}</Description>
          </CommentItem>
        );
      })}
    </Container>
  );
};

export { CommentList };
