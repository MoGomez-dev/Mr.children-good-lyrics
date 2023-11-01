import React from 'react'
import omikuji from '../img/omikuji.png';
import styled from 'styled-components';

export const ClicledOmikuji = () => {
  return (
    <Clicked>
        <img src={omikuji} alt="omikuji" />
    </Clicked>
  )
}

const Clicked = styled.div`
    height: 400px;
    width: 315px;
    animation-name: drawOmikuji;
    animation-duration: 2.2s;

    @keyframes drawOmikuji {
      10%{
        transform: translateY(40px);
      }
      20%{
        transform: translateY(0px);
      }
      30%{
        transform: translateY(40px);
      }
      40%{
        transform: translateY(0px);
      }
      95%{
        transform: translate(0,0) rotate(120deg);
      }
      100%{

      }
    }
`