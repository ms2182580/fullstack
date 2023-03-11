import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../assets/Colors"
import { device } from "../../../assets/screenSizes/ScreenSizes"

const ORGWrapperLanding = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  place-items: center;

  margin-bottom: ${(x) => (x.windowSize <= 768 ? "96px" : null)};

  & > :nth-child(1) {
    background: linear-gradient(180deg, ${PRIMARY.PRIMARY_BACKGROUND} 74.21%, rgba(241, 231, 245, 0) 100%);
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;

    & > :nth-child(1) {
      grid-column: 2;
      position: relative;
      margin-bottom: 36px;
      width: clamp(225px, calc(100vw - 3rem), 500px);
      height: clamp(64px, calc(40vw - 3rem), 320px);
      justify-self: end;
    }

    & > :nth-child(2) {
      text-align: left;
      font-size: clamp(20px, 5.5vw, 48px);
      align-self: center;

      @media (${device.laptop}) {
        margin-bottom: 24px;
      }
    }
  }

  & > * {
    padding-inline: 3rem;
  }
  

  @media (${device.laptop}) {
    display: flex;
    flex-direction: column;

    & > *:not(:nth-child(1)) {
      padding-inline: 16px;
    }

    & > :nth-child(1) > :nth-child(1) {
      margin-bottom: 16px;
    }
  }
`

export default ORGWrapperLanding
