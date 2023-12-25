import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_HeaderWrapper = styled.div`
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

          text-transform: capitalize;

          font-weight: 600;

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
      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      border-radius: 8px;

      cursor: pointer;

      &:hover,
      &:focus {
        background-color: ${PRIMARY.PRIMARY_CTA};

        & > div {
          & > :nth-child(1) {
            fill: ${NEUTRALS.OFF_WHITE};
          }

          p {
            color: ${NEUTRALS.OFF_WHITE};
          }
        }
      }

      & > div {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-left: 24px;
        padding-right: 48px;
        padding-top: 8px;
        padding-bottom: 8px;

        p {
          font-weight: 600;
          color: ${PRIMARY.PRIMARY_CTA};
        }
      }
    }
  }
`
