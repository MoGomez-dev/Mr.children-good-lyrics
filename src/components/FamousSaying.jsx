import React from 'react'
import '../style.css'
import styled from 'styled-components'

export const FamousSaying = ({saying, song}) => {
  return (
    <TextArea >
        <h1>{saying}</h1>
        <h3>{song}</h3>
    </TextArea>
  )
}

const TextArea = styled.div`
    font-family: 'Noto Serif JP', serif;
    
    height: 100%;
    width: 100%;
    padding-top: 80px;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    animation-name: slideInDiv;
    animation-duration: 2.2s;

    h1{
        width: 100%;
        margin: 0;
        text-align: center;
        font-size: 58px;
        text-align: center;
        animation-name: slideInText;
        animation-duration: 2.2s;

        @media screen and (max-width: 767px) {
          font-size: 33px;
        }
        
    }

    h3{
        width: 100%;
        margin-bottom: 0;
        padding-right: 50px;
        font-size: 35px;
        text-align: right;
        animation-name: slideInText;
        animation-duration: 2.2s;
        @media screen and (max-width: 767px) {
          font-size: 24px;
        }
    }

    @keyframes slideInDiv {
      0%{
        transform: translateX(-1500px);
      }

      100%{
        transform: translateX(0);
      }
    }

    @keyframes slideInText {
        0%{
          opacity: 0;
          transform: translateX(1500px);
        }

        50%{
          opacity: 0.35;
        }

        100%{
          opacity: 1;
          transform: translateX(0);
        }
    }
`