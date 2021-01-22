import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
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

type SidebarProps = {
  isExpanded: boolean;
  children: JSX.Element[];
};

const Sidebar = ({ isExpanded, children }: SidebarProps): JSX.Element => {
  return (
    <Container aria-label="Sidebar" aria-expanded={isExpanded} isExpanded={isExpanded}>
      {children}
    </Container>
  );
};

export { Sidebar }
