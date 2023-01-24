import { css, keyframes } from "styled-components";

const fadeIn = keyframes`
    0% { 
      opacity: 0 
    }
    100% { 
      opacity: 1;
    }
  `;

const slideFromRight = keyframes`
    0% { 
      transform: translateX(40px);
    }
    100% { 
      transform: translateX(0px);
    }
  `;

const slideFromBottom = keyframes`
    0% { 
      transform: translateY(40px);
    }
    100% { 
      transform: translateY(0px);
    }
  `;

const tilt = keyframes`
0% { transform: rotate(0deg); }
25% { transform: rotate(5deg); }
50% { transform: rotate(0eg); }
75% { transform: rotate(-5deg); }
100% { transform: rotate(0deg); }
`;


export const fadeFromRightAnimation = ({ theme }: { theme: any }) =>
  css`
     ${fadeIn} 1s ${theme.easing}, ${slideFromRight} .3s ${theme.easing};
  `;

export const fadeFromBottomtAnimation = ({ theme }: { theme: any }) =>
  css`
   ${fadeIn} 1s ${theme.easing}, ${slideFromBottom} .3s ${theme.easing};
`;

export const fadeInAnimation = ({ theme }: { theme: any }) =>
  css`
    ${fadeIn} 2s ${theme.easing};
  `;

export const tiltAnimation = ({ theme }: { theme: any }) =>
  css`
     ${tilt} 0.3s infinite;
  `;
