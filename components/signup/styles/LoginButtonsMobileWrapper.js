import styled, { keyframes } from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"
import { delayMilliseconds } from "../delay"

const fadeIn = keyframes`
0%
  {
    transform:translateY(2%);
    opacity:0;
  }
100%
{
  transform:translateY(0px);
  opacity:1;
}
`
const fadeOut = keyframes`
0%
  {
    transform:translateY(0%);
    opacity:1;
  }
100%
{
  transform:translateY(2%);
  opacity:0;
}
`

export const LoginButtonsMobileWrapper = styled.div`
  pointer-events: ${(x) => (x.shouldInteract ? `auto` : `none`)};

  position: absolute;
  bottom: 0px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index: 2;
  padding-bottom: 30px;
  &.fadeIn {
    animation: ${delayMilliseconds}ms ${fadeIn} ease-out forwards;
  }
  &.fadeOut {
    animation: ${delayMilliseconds}ms ${fadeOut} ease-out forwards;
  }

  & > div {
    width: 56px;
    border: 3px solid ${NEUTRALS.LIGHT_GREY};
    margin-bottom: 40.5px;
    margin-top: 12.5px;
    border-radius: 3px;
  }

  & > button,
  & > a > button {
    width: 270px;
  }

  & > button:not(:last-child) {
    margin-bottom: 28px;
  }
`
