import styled from 'styled-components';
import { FamousSaying } from './components/FamousSaying';
import { Omikuji } from './components/Omikuji';
import { useState } from 'react';
import { sayingData } from './data';
import { SpotifyPlayer } from './components/SpotifyPlayer';
import member from './img/member.jpg';


function App() {
  const [active,setActive] = useState(false);
  const [isDraw,setIsDraw] = useState(false);
  const [data,setData] = useState("");

  const drawSubmit = () => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * sayingData.length);
      console.log(num);
      setIsDraw(true);
      setActive(false);
      setData(sayingData[num]);
    },2000);
    setActive(true);
  }
  const backSubmit = () => {
    setIsDraw(false);
    setData('');
  }

  return (
    <div>
      {isDraw ? 
      <Container bgimage = {data.image}>
        <div>
          <FamousSaying saying={data.saying} song={data.song} /> 
          <ButtonWrapper >
            <BackButton onClick={backSubmit}>戻る</BackButton> 
            <SpotifyPlayer url={data.url} />
          </ButtonWrapper>
        </div>
      </Container>
      : 
      <Container bgimage={member}>
        <Omikuji drawSubmit={drawSubmit} active={active} />
      </Container> }
    </div>
  );
}

const Container = styled.div`
  background-image: url(${props => props.bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: rgba(255,255,255,0.5);
  background-blend-mode: lighten;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 10%;
`

const BackButton = styled.button`
  font-size: 25px;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 100vh;
  background-color: #1d3557;
  color: #fff;
  border: none;
  opacity: 0.8;
  
  &:hover{
    opacity: 1;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation-name: fadeIn;
  animation-duration: 4.4s;

  @media screen and (max-width: 500px) {
    display: block;
  }

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0;
    }
    100%{
      opacity: 0.8;
    }
  }
`

export default App;
