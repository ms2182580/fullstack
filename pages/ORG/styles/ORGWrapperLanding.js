import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"
import { device } from "../../../assets/screenSizes/ScreenSizes"

const ORGWrapperLanding = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  place-items: center;
  padding: 3.08rem 3rem 0 3rem;

  & > :nth-child(1) {
    margin-bottom: 36px;
  }

  & > :nth-child(2) {
    margin-bottom: 72px;
    text-align: center;
    font-size: clamp(20px, 4vw, 48px);
    @media (${device.tablet}) {
      margin-bottom: 24px;
    }
  }

  @media (${device.tablet}) {
    padding-inline: 16px;
    display: flex;
    flex-direction: column;
    

    & > :nth-child(1) {
      margin-bottom: 16px;
    }
  }
`

export default ORGWrapperLanding
