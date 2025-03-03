import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const l3 = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const LoaderStyled = styled.div`
   width: fit-content;
   font-size: 40px;
   font-family: system-ui, sans-serif;
   font-weight: bold;
   text-transform: uppercase;
   color: transparent;
   -webkit-text-stroke: 1px #000;
   background: linear-gradient(
         -60deg,
         transparent 45%,
         #000 0 55%,
         transparent 0
      )
      0/300% 100% no-repeat;
   animation: ${l3} 2s linear infinite;

   &:before {
      content: 'Loading';
   }
`;
