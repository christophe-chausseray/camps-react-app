import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from './CloseIcon';

const SidebarContainer = styled.aside`
  ${(props: {isExpanded: boolean}) => {
    if (props.isExpanded) {
      return `
        width: 500px;
      `
    } else {
      return `
        width: 0px;
        overflow: hidden;
      `
    }
  }}
  transition: width 0.3s ease-in-out;
`;

const SidebarHeaderContainer = styled.header`
  display: flex;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: #2f7510 2px solid;
  min-height: 170px;
`;

const TitleContainer = styled.div`
  width: 250px;
  margin-top: 40px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 250px;
`;

const CloseButton = styled.button`
  background-color: white;
  border: none;
  float: right;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const SidebarContentContainer = styled.div`
  max-height: 60vh;
  width: 500px;
  padding-top: 20px;
  overflow-y: scroll;
`;

type SidebarProps = {
  isExpanded: boolean;
  children: React.ReactNode;
};

type SidebarHeaderProps = {
  closeSidebar: () => void;
  children: {
    title?: React.ReactNode;
    image?: React.ReactNode;
  };
}

type SidebarContentProps = {
  children: JSX.Element[];
}

const Sidebar = ({ isExpanded, children }: SidebarProps) => {
  if (!children) {
    throw new Error('children is mandatory');
  }

  return (
    <SidebarContainer aria-label="Sidebar" aria-expanded={isExpanded} isExpanded={isExpanded}>
      {children}
    </SidebarContainer>
  );
};

const SidebarHeader = ({ closeSidebar, children }: SidebarHeaderProps) => {
  return (
    <SidebarHeaderContainer>
      <TitleContainer>
        {children.title}
      </TitleContainer>
      <ImageContainer>
        <CloseButton aria-label="Close" onClick={closeSidebar}>
          <CloseIcon title="Close" size={20} />
        </CloseButton>
        {children.image}
      </ImageContainer>
    </SidebarHeaderContainer>
  );
}

const SidebarContent = ({ children }: SidebarContentProps) => {
  if (!children) {
    throw new Error('children is mandatory');
  }

  return (
    <SidebarContentContainer>
      {children}
    </SidebarContentContainer>
  );
}

export { Sidebar, SidebarHeader, SidebarContent }
