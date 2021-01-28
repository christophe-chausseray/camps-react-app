import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import plusIcon from '@iconify/icons-mdi/plus';
import { CampingItem } from '../../../common';
import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';

const CommentFormWrapper = styled.section`
  border: 2px #2f7510 solid;
`;

const CommentFormAdder = styled.div`
  display: flex;
`;

const CommentFormTitle = styled.h3`
  width: 90%;
  margin-left: 10px;
  color: #2f7510;
`;

const IconWrapper = styled.div`
  margin: 20px;
  transition: all 1s linear;

  ${(props: {isExpanded: boolean}) => {
    if (props.isExpanded) {
      return `
        transform:rotate(45deg);
      `
    }
  }};
`;

type CommentProps = {
  campingItem: CampingItem;
  placeholder: boolean;
};

function Comment({ campingItem, placeholder }: CommentProps) {
  const campingId = (!placeholder) ? campingItem.id : null;
  const [commentFormIsOpened, setCommentFormIsOpened] = React.useState(false);

  return (
    <>
      <CommentFormWrapper>
        <CommentFormAdder>
          <CommentFormTitle>Add comment</CommentFormTitle>
          <IconWrapper
            isExpanded={commentFormIsOpened}
            onClick={() => setCommentFormIsOpened(!commentFormIsOpened)}
          >
            <Icon icon={plusIcon} color="#2f7510" width="20px" height="20px" />
          </IconWrapper>
        </CommentFormAdder>
        <CommentForm isExpanded={commentFormIsOpened} campingId={campingId} />
      </CommentFormWrapper>
      <CommentList campingId={campingId} />
    </>
  );
}

export { Comment }
