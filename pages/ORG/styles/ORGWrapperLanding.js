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
    font-size: clamp(20px, 5.5vw, 48px);
    @media (${device.tablet}) {
      margin-bottom: 24px;
    }
  }

  @media (${device.tablet}) {
    padding: 32px 16px 0px 16px;
    /* padding-inline: 16px; */
    display: flex;
    flex-direction: column;
    

    & > :nth-child(1) {
      /* margin: 32px 53.01px 16px 41px; */
      /* width:100%; */
      /* width:225.99px; */
      /* width:clamp(100%, 225.99px, 100%); */
      /* height:64px; */
      margin-bottom: 16px;
      /* border: 2px solid crimson; */
      
    }
  }
`

export default ORGWrapperLanding
