import styled from "styled-components"
import { device } from "../../../../../../assets/screenSizes/ScreenSizes"

export const ST_M_Detail_TwoButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
  gap: 24px;

  & > :nth-child(1) {
    /* margin-right: 24px; */
    margin-right: 0px;
    margin-bottom: 8px;
  }

  /* @media (${device.laptop}) {
    flex-direction: column;

    & > :nth-child(1) {
      margin-right: 0px;
      margin-bottom: 8px;
    }
  } */
`
