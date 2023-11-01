import React from 'react'
import omikuji from '../img/omikuji.png';
import styled from 'styled-components';
import { ClicledOmikuji } from './ClicledOmikuji';

export const Omikuji = ({drawSubmit, active}) => {
  return (
    <OmikujiImg onClick={drawSubmit}>
      {active ? <ClicledOmikuji /> : <img src={omikuji} alt="omikuji" />}
    </OmikujiImg>
  )
}

const OmikujiImg = styled.button`
  height: 400px;
  width: 315px;
  background: transparent;
  border: none;
`