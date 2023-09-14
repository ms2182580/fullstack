import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../../assets/Colors"

export const CC_Karate_D_HeaderWrapper = styled.div`
  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 64px;
    margin-bottom: 16px;

    & > li {
      list-style: none;
      & > h3 {
        & > a {
          text-decoration: none;
          color: ${NEUTRALS.BLACK};
          cursor: pointer;
          border-bottom: 4px solid transparent;
          &:hover {
            border-bottom: 4px solid ${PRIMARY.PRIMARY_HOVER};
          }
        }
      }
    }

    & > :nth-last-child(2) {
      & > div {
        & > svg {
          cursor: pointer;
          & > path {
            fill: black;
          }
        }
      }
    }

    & > :nth-last-child(1) {
      border: 2px solid ${NEUTRALS.LIGHT_GREY};
      border-radius: 8px;
      cursor: not-allowed;
      
      & > div {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-left: 24px;
        padding-right: 48px;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }
  }
`
