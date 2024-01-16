import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { blurEffect } from "@/components/ui/blur/blur"
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
      & > :nth-child(4) {
        display: grid;
        gap: 24px;

        padding: 16px;

        position: relative;
        width: fit-content;
        ${blurEffect({ zIndex: 2 })}

        & > :nth-child(2) {
          list-style: none;
          width: fit-content;

          display: grid;
          gap: 16px;
          position: relative;

          & > * {
            display: flex;
            align-items: center;

            gap: 8px;

            text-transform: capitalize;
            white-space: nowrap;

            & > :nth-child(1) {
              color: ${PRIMARY.PRIMARY_HOVER};
              font-weight: 600;
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
