import * as React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  ${(props: SidebarProps) => {
    if (props.isOpened) {
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
  isOpened: boolean,
  setIsOpened: (value: boolean) => void
}

function Sidebar({isOpened, setIsOpened}: SidebarProps): JSX.Element {
  return (
    <Container aria-label="Sidebar" isOpened={isOpened}>
      <button aria-label="Close" onClick={() => setIsOpened(false)}>Close</button>
      <h2>Sidebar</h2>
    </Container>
  );
}

export { Sidebar }
