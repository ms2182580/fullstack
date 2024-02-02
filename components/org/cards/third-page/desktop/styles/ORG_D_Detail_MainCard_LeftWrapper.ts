import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import {
  LAYOUT_RESULTS_MAIN_CARD_VALUES,
  SPECIFIC_DATA_KEY,
} from "@/utils/org/second-page/desktop/specificData"
import styled, { css } from "styled-components"

const isATLayout = () => css`
  display: none;
`

export type Props = {
  isPVES?: boolean
  [SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD]?: LAYOUT_RESULTS_MAIN_CARD_VALUES | null
  isBackend?: boolean
}

export const ORG_D_Detail_MainCard_LeftWrapper = styled.aside<Props>`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  display: flex;
  flex-direction: column;

  padding: 24px;

  border-radius: 8px 0 0 8px;

  & > :nth-child(1) {
    position: relative;
    overflow: hidden;
    margin-bottom: 24px;

    margin-bottom: 8px;
    border-radius: 8px;
    border: none;

    background-color: ${({ isPVES }) =>
      isPVES ? `${NEUTRALS.OFF_WHITE}` : ""};

    background-color: ${NEUTRALS.OFF_WHITE};

    & > :nth-child(2) {
      cursor: pointer;
      position: absolute;
      left: 16px;
      top: 16px;
    }

    & > :nth-child(3) {
      position: absolute;
      bottom: 1rem;
      right: 1rem;

      ${({ LAYOUT_RESULTS_MAIN_CARD }) =>
        LAYOUT_RESULTS_MAIN_CARD ===
          LAYOUT_RESULTS_MAIN_CARD_VALUES.AT_WCMD_LIKE &&
        css`
          ${isATLayout()}
        `}
    }
  }

  & > :nth-child(2) {
    ${({ isBackend }) =>
      isBackend &&
      css`
        display: grid;
        gap: 28px;
      `}
  }

  & > :nth-child(3) {
    margin-right: auto;
    margin-bottom: 24px;

    font-size: 16px;
    font-weight: 600;
  }

  & > :nth-child(4) {
    margin-left: 22px;
    margin-bottom: 16px;
    margin-right: 9px;

    & > *:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`
