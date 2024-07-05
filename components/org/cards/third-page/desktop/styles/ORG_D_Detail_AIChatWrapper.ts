import { NEUTRALS, PRIMARY, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_AIChatWrapper = styled.article`
  ${ui_section_card()};
  background-color: ${NEUTRALS.OFF_WHITE};

  & > :nth-child(1) {
    ${ui_header_card()};
    height: 56px;
    display: flex;
    align-items: center;
  }

  article {
    padding-top: 8px;
    display: grid;
    gap: 24px;

    textarea {
      resize: none;

      width: 100%;

      padding: 12px 16px;
      border-radius: 8px;

      border: 2px solid ${NEUTRALS.DARK_GREY_3};
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

        /* border: 2px solid ${PRIMARY.PRIMARY_CTA}; */
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
        /* margin: auto; */

        visibility: hidden;

        &.navBarLeftArrowShouldDisplay {
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
              background: linear-gradient(
                -90deg,
                hsla(0, 0%, 100%, 20%) 0%,
                hsl(16.7, 100%, 96.5%) 8%
              );
            }
          }
        }
      }

      ul {
        list-style: none;
        display: flex;
        gap: 16px;

        white-space: nowrap;
        overflow-x: hidden;

        position: relative;
        z-index: 1;

        padding-right: 33px;

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

        &.navBarRightArrowShouldDisable {
          & > :nth-child(1) {
            cursor: not-allowed;

            border: 2px solid ${NEUTRALS.LIGHT_GREY};
            background-color: ${NEUTRALS.LIGHT_GREY};

            & > * {
              & > * {
                fill: ${NEUTRALS.BLACK};
              }
            }
          }
        }

        &:after {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          right: 8px;

          width: 33px;
          height: 100%;
          background: linear-gradient(
            90deg,
            hsla(0, 0%, 100%, 20%) 0%,
            hsl(16.7, 100%, 96.5%) 8%
          );
        }
      }
    }

    button {
      ${reusableButton({})};

      padding: 8px 32px !important;
      width: fit-content;

      display: flex;
      column-gap: 12px;
    }
  }
`
