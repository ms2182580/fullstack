import styled from "styled-components"
import { SECONDARY_BG_BIGBLOCKS_TEXT, SECONDARY_ORG_PLUS } from "../../../../assets/Colors"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

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

  @media (${device.tablet}) {
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

export const ReviewAllIndividualComponentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 32px;

  @media (${device.tablet}) {
    margin-top: 24px;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 16px;
  }
`

export const ReviewIndividualComponentWrapper = styled.div`
  border-radius: 16px;
  border: 1px solid ${SECONDARY_ORG_PLUS.ASH_BLUE};
  background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE};
  padding: 16px;
  display: grid;

  & > div > *:not(:last-child) {
    margin-right: 8px;
  }

  & > :first-child {
    display: flex;
    align-items: center;
    height: 24px;
    margin-bottom: 8px;
  }

  & > :nth-child(2) {
    margin-bottom: 8px;
  }

  & > :last-child {
    display: flex;
    align-items: end;
  }

  @media (${device.tablet}) {
    grid-template-columns: 264px;

    /* margin-right: 16px; */
  }
`
