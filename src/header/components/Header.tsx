import React from 'react';
import { CampsThemedProps } from 'src/common';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  background-color: ${({theme}: CampsThemedProps) => theme.colors.green};
  border-bottom: 1px solid #${({theme}: CampsThemedProps) => theme.colors.white};
`;

const Title = styled.h1`
  text-align: center;
  font-size: ${({theme}: CampsThemedProps) => theme.fontsize.title};
  font-family: 'Satisfy', cursive;
  color: ${({theme}: CampsThemedProps) => theme.colors.white};
`;

const Header = () => {
  return (
    <Container>
      <Title>Le bon camping</Title>
    </Container>
  );
};

export { Header };
