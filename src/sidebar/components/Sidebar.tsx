import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Content } from './Content';
import { SidebarContext } from '../context';

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

const Sidebar = (): JSX.Element => {
  const { isExpanded, campingId } = React.useContext(SidebarContext);

  if (
    null === campingId
  ) {
    return null;
  }

  return (
    <Container aria-label="Sidebar" aria-expanded={isExpanded} isExpanded={isExpanded}>
      <Header />
      <Content />
    </Container>
  );
};

export { Sidebar }
