import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  background-color: #2f7510;
  border-bottom: 1px solid #ffffff;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-family: 'Satisfy', cursive;
  color: #ffffff;
`;

function Header(): JSX.Element {
  return (
    <Container>
      <Title>Le bon camping</Title>
    </Container>
  );
}

export { Header };
