import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"
import { device } from "../../../assets/screenSizes/ScreenSizes"

const ORGWrapperLanding = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  place-items: center;
  padding-top: 3.08rem;
  margin-bottom: ${x => x.windowSize <=768 ? "96px": null};

  & > *:not(:nth-child(2)) {
    padding-inline: 3rem;
  }

  & > :nth-child(1) {
    position: relative;
    margin-bottom: 36px;
    width: clamp(225px, calc(100vw - 3rem), 962px);
    height: clamp(64px, calc(40vw - 3rem), 252px);
  }

  & > :nth-child(2) {
    margin-bottom: 72px;
    text-align: center;
    font-size: clamp(20px, 5.5vw, 48px);

    @media (${device.tablet}) {
      margin-bottom: 24px;
    }
  }

  @media (${device.tablet}) {
    padding-top: 32px;
    display: flex;
    flex-direction: column;

    & > *:not(:nth-child(2)) {
      padding-inline: 16px;
    }

    & > :nth-child(1) {
      margin-bottom: 16px;
    }
  }
`

export default ORGWrapperLanding
