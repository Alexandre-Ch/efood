import { keyframes } from "styled-components";

export const fadeIn = keyframes`
from{ background-color: rgba(0, 0, 0, 0);}
to {  background-color: rgba(0, 0, 0, 0.8);}
`;

export const fadeOut = keyframes`
  from { background-color: rgba(0, 0, 0, 0.8); }
  to { background-color: rgba(0, 0, 0, 0); }
`;

export const slideIn = keyframes`
  from{transform: translateX(100%);
}
  to {transform: translateX(0);}
`;

export const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

export const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

export const slideDown = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

export const fadeSlideOut = keyframes`
  from { opacity: 100%;
  transform: translateY(10%) }
  to { opacity: 0 ;
  transform: translateY(0%)}
`;

export const fadeSlideIn = keyframes`
  from { opacity: 0;
  transform: translateY(0) }
  to { opacity: 100% ;
  transform: translateY(10%)}
`;
