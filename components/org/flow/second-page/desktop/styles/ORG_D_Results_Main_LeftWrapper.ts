import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import {
  LAYOUT_RESULTS_MAIN_CARD_VALUES,
  SPECIFIC_DATA_KEY,
} from "@/utils/org/second-page/desktop/specificData"
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

    border-radius: 16px;

    margin-bottom: 28px;

    background-color: ${NEUTRALS.OFF_WHITE};

    & > :nth-child(1) {
      height: 175px;
      border-radius: inherit;

      object-fit: cover;
      object-position: 50% 35%;
    }

    & > :nth-child(2) {
      position: absolute;
      top: 1rem;
      left: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
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

      width: fit-content;

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
