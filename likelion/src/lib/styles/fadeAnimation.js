import { keyframes } from "styled-components";

export const fadeTopToBottom = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
  }
`;

export const fadeBottomToTop = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
  }
`;

export const fadeRightToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
  }
`;

export const fadeLeftToRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
  }
`;

export const fadeInX = keyframes`
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
    }
`;

export const fadeInY = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
  }
`;
