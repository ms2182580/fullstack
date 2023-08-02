import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ST_D_Search_LandingThreeWrapper = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 400px));
    justify-content: space-between;
    gap: 23px;
    margin-bottom: 64px;
  }

  & > :last-child {
    margin-left: auto;

    & > span {
      font-size: 16px;
      white-space: pre;
    }

    &:hover > span:nth-child(1) {
      color: ${NEUTRALS.OFF_WHITE};
    }
    
    &:hover > span:nth-child(2) {
      color: ${NEUTRALS.LIGHT_GREY};
    }
  }
`
