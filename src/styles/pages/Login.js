import styled from 'styled-components';

const MainLogin = styled.div `
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 90vh;

  img {
    height: 100px;
    animation-duration: 2s;
    animation-iteration-count: 3;
    transform-origin: bottom;
    animation-name: translate;
    animation-timing-function: ease;
  }
  
  @keyframes translate {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-50px); }
    50%  { transform: scale(1,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
  }

  @media (max-width: 400px) {
   img {
    width: 100%;
    height: auto;
   }

    
  }
`

export default MainLogin;