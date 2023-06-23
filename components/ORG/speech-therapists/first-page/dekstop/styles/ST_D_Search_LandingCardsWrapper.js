import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ST_D_Search_LandingCardsWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  position: relative;
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
    height: 193px;

    position: relative;
    display: grid;

    & > :nth-child(2) {
      position: absolute;
      bottom: 16px;
      right: 16px;
    }
  }

  & > :nth-child(2) {
    margin-top: 24px;
  }

  & > * + * {
    margin-inline: 24px;
  }

  & > :nth-last-child(2) {
    margin-top: 24px;
    margin-bottom: 24px;
  }

  & > :last-child {
    margin-top: auto;
    margin-bottom: 24px;

    & > button {
      width: 100%;
    }
  }
`
