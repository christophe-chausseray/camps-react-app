import styled, { css, keyframes } from 'styled-components';
import { CampsThemedProps } from '../../common/theme';

const fading = keyframes`
  0% {
    opacity: .1;
  }

  50% {
    opacity: .2;
  }

  100% {
    opacity: .1;
  }
`;

const placeholderAnimation = css`
  ${fading} 1.5s infinite;
`;

const Placeholder = styled.div`
  background-color: ${({theme}: CampsThemedProps) => theme.colors.grey};
  border-radius: 20px;
  opacity: 0.1;
  animation: ${placeholderAnimation};
`;

export { Placeholder };
