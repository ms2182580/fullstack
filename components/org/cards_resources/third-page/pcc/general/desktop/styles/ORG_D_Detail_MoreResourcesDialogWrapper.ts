import { NEUTRALS, PRIMARY, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled, { css } from "styled-components"

type Props = {
  shouldDisplayLeftArrow: boolean
  shouldArrowRightBeDisabled: boolean
}

export const ORG_D_Detail_MoreResourcesDialogWrapper = styled.article<Props>`
  ${ui_section_card()}

  width: 700px;

  & > :nth-child(1) {
    ${ui_header_card()};

    h3 {
      font-size: 20px;
    }
  }

  article {
    display: grid;
    gap: 14px;

    h4 {
      font-weight: 700;

      color: ${PRIMARY.PRIMARY_HOVER};

      text-transform: lowercase;
      &:first-letter {
        text-transform: capitalize;
      }
    }

    & > :nth-child(2) {
      display: flex;
      position: relative;

      & > :nth-child(1) {
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 16px;
      }

      & > :nth-child(2) {
        width: 100%;
        height: 80px;

        position: relative;
        z-index: 1;

        resize: none;

        border-radius: 8px;

        border: 2px solid ${NEUTRALS.DARK_GREY_3};

        padding-left: 82px;
        padding-inline: 82px 40px;
        padding-top: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > :last-child {
        position: absolute;
        z-index: 2;

        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 16px;
      }
    }

    & > :nth-child(3) {
      display: flex;

      white-space: nowrap;
      overflow-x: hidden;

      position: relative;
      z-index: 99;

      & > :nth-child(1),
      & > :last-child {
        background-color: ${NEUTRALS.OFF_WHITE};

        border-radius: 5px;

        width: 33px;
        height: 100%;

        margin: auto;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;
        z-index: 99;

        & > :nth-child(1) {
          /* width: 33px; */
          width: 100%;
          height: 100%;
          background-color: ${NEUTRALS.OFF_WHITE};
          border: 2px solid ${PRIMARY.PRIMARY_CTA};
          border-radius: inherit;

          display: flex;
          align-items: center;
          justify-content: center;

          & > :nth-child(1) {
            & > * {
              fill: ${PRIMARY.PRIMARY_CTA};
            }
          }
        }
      }

      & > :nth-child(1) {
        position: absolute;
        z-index: 3;

        top: 0;
        bottom: 0;
        left: 0px;

        visibility: hidden;

        ${({ shouldDisplayLeftArrow }) =>
          shouldDisplayLeftArrow &&
          css`
            visibility: visible;

            & > :nth-child(1) {
              &:after {
                content: "";
                position: absolute;
                z-index: -1;
                top: 0;
                bottom: 0;
                left: 8px;

                width: 33px;
                height: 100%;
                background: linear-gradient(-90deg, transparent 0%, white 8%);
              }
            }
          `}
      }

      ul {
        list-style: none;
        display: flex;
        gap: 16px;

        white-space: nowrap;
        overflow-x: hidden;

        position: relative;
        z-index: 1;

        padding-right: 55px;

        li {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 4px;

          background-color: ${SECONDARY_ORG_PLUS.PINK_2};
          padding: 4px 8px;
          border-radius: 12px;

          & > :nth-child(1) {
            width: 18px;
            height: 27px;
          }

          & > :nth-child(2) {
            font-size: 14px;
          }
        }
      }

      & > :last-child {
        position: absolute;
        z-index: 2;
        right: 0px;
        top: 0;
        bottom: 0;
        margin: auto;

        ${({ shouldArrowRightBeDisabled }) =>
          shouldArrowRightBeDisabled &&
          css`
            & > :nth-child(1) {
              cursor: not-allowed;

              border: 2px solid ${NEUTRALS.LIGHT_GREY};
              background-color: ${NEUTRALS.LIGHT_GREY};

              & > * {
                fill: ${NEUTRALS.BLACK};
                & > * {
                  fill: ${NEUTRALS.BLACK};
                }
              }
            }
          `}

        &:after {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          right: 8px;

          width: 44px;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, white 16%);
        }
      }
    }
  }
`
