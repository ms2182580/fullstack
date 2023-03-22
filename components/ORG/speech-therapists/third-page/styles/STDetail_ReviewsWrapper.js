import styled from "styled-components"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STDetail_ReviewsWrapper = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 32px 32px 40px 32px;
  display: grid;
  scroll-margin-top: 50px;

  & > :last-child {
    margin-left: auto;
    margin-top: 24px;
    margin-right: 16px;
  }

  @media (${device.laptop}) {
    padding: 16px;
    border-radius: 0px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
    }

    & > :last-child {
      margin-top: 16px;
    }
  }
`
