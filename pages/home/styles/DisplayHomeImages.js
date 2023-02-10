import styled, { keyframes } from "styled-components"
import homeImage_background from "../../../assets/images/homeImage_background.png"

const fromBelow = keyframes`
0%
  {
    transform:translateY(5%)
  }
100%
{
  transform:translateY(0px);
  opacity:1;
}
`

const fromAbove = keyframes`
0%
  {
    transform:translateY(-80%);  
  }
100%
{
  
  transform:translateY(0px);
  opacity:1;
}
`

const DisplayHomeImages = styled.div`
  height: calc(100vh + 230px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${homeImage_background.src});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
  overflow-x: hidden;

  img {
    margin-top: auto;
    margin-bottom: 5%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    opacity: 0;
  }

  .MoveImage {
    animation: 1s ${fromBelow} ease-out forwards;
  }

  .MoveTextAndButton {
    animation: 1s ${fromAbove} ease-out forwards;
    z-index: 99;
  }

  div {
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    & > a {
      all: unset;
      margin-top: 32px;
    }
  }
`

export default DisplayHomeImages
