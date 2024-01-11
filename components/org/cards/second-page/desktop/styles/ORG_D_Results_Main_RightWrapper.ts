import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export type Props = {
  backendData?: boolean
}

export const ORG_D_Results_Main_RightWrapper = styled.div<Props>`
  border-top-right-radius: inherit;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-inline: 44px;

  & > :nth-child(1) {
    font-weight: 700;
  }

  & > :nth-child(3) {
    color: ${NEUTRALS.DARK_GREY};
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    margin-bottom: 8px;
  }

  & > :nth-child(5) {
    display: grid;
    gap: 16px;

    .HIGHLIGHTS_PLUS {
      /* border: 2px solid crimson; */
    }

    .HIGHLIGHTS {
      /* border: 2px solid green; */
    }

    .NO_THIRDPAGE_DATA {
      & > :nth-child(1) {
        font-weight: 700;
        color: ${PRIMARY.PRIMARY_HOVER};

        & > :nth-child(1) {
          font-weight: 400;

          color: ${NEUTRALS.BLACK};
        }
      }
    }
  }

  ${({ backendData }) =>
    backendData &&
    css`
      & > :nth-child(5) {
        list-style: none;
        & > * {
          display: flex;

          gap: 8px;

          text-transform: capitalize;

          & > :nth-child(1) {
            /* color: ${PRIMARY.PRIMARY_HOVER}; */
            font-weight: 600;

            padding: 8px;

            position: relative;

            &:after {
              content: "";
              position: absolute;
              inset: 0;
              background-color: ${NEUTRALS.LIGHT_GREY};
              opacity: 0.7;
              border-radius: 8px;
            }
          }
        }
      }
    `}

  & > p {
    & > * {
      color: ${NEUTRALS.BLACK};
      font-weight: 400;
    }
  }
`
