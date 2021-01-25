import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import plusIcon from '@iconify/icons-mdi/plus';
import { Tabs, Tab, CampingItem } from '../../common';
import { DetailCampingItem } from './detailCampingItem';
import { CommentForm, CommentList } from './comment';

const Container = styled.div`
  max-height: 60vh;
  width: 500px;
  padding-top: 20px;
  overflow-y: scroll;
`;

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

type SidebarProps = {
  campingItem: CampingItem;
  placeholder: boolean;
}
function SidebarContent({ campingItem, placeholder }: SidebarProps) {
  const campingId = (!placeholder) ? campingItem.id : null;
  const [commentFormIsOpened, setCommentFormIsOpened] = React.useState(false);

  return (
    <Container>
      <Tabs>
        <Tab title='Detail'>
          <DetailCampingItem campingItem={campingItem} placeholder={placeholder} />
        </Tab>
        <Tab title='Comment'>
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
        </Tab>
      </Tabs>
    </Container>
  );
}

export { SidebarContent }
