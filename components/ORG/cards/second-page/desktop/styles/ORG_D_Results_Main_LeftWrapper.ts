import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { LAYOUT_RESULTS_MAIN_CARD_VALUES, SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import styled, { css } from "styled-components"

const isATLayout = () => css`
  display: none;
`

type Props = {
  isOpenPositionAndThirdPosition?: boolean
  [SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD]?: LAYOUT_RESULTS_MAIN_CARD_VALUES | null
}

export const ORG_D_Results_Main_LeftWrapper = styled.div<Props>`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};

  display: flex;
  flex-direction: column;

  padding: 24px;

  border-top-left-radius: inherit;

  & > :nth-child(1) {
    position: relative;

    ${({ LAYOUT_RESULTS_MAIN_CARD }) =>
      LAYOUT_RESULTS_MAIN_CARD === LAYOUT_RESULTS_MAIN_CARD_VALUES.AT_ACS_LIKE
        ? css`
            background-color: transparent;
          `
        : css`
            background-color: ${NEUTRALS.OFF_WHITE};
          `}

    padding-inline: 20%;
    overflow: hidden;

    border-radius: 16px;

    margin-bottom: 28px;

    height: 158px;

    & > :nth-child(2) {
      position: absolute;
      top: 1rem;
      left: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & > :nth-child(3) {
      position: absolute;
      bottom: 16px;
      right: 16px;
      z-index: 3;

      ${({ LAYOUT_RESULTS_MAIN_CARD }) =>
        (LAYOUT_RESULTS_MAIN_CARD === LAYOUT_RESULTS_MAIN_CARD_VALUES.AT_WCMD_LIKE || LAYOUT_RESULTS_MAIN_CARD === LAYOUT_RESULTS_MAIN_CARD_VALUES.AT_ACS_LIKE) &&
        css`
          ${isATLayout()}
        `}
    }
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > * {
      display: grid;
      grid-template-columns: 33px 1fr;
      gap: 8px;

      & > :nth-child(1) {
        justify-self: center;
      }

      & > :nth-child(2) {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`
