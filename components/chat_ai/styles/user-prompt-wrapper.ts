import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled from "styled-components"

export const UserPromptWrapper = styled.div`
  & > :nth-child(1) {
    height: fit-content;
    width: 100%;

    word-break: break-all;

    background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
    padding: calc(8px * 2);

    color: ${NEUTRALS.OFF_WHITE_2};

    border-radius: 12px;
    border-bottom-right-radius: 0px;
  }

  & > :nth-child(2) {
    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;

    gap: 8px;

    color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};

    margin-bottom: calc(8px * 5);

    width: fit-content;
    margin-inline: auto;

    & > :nth-child(1) {
      color: inherit;
    }

    & > :nth-child(2) {
      rotate: 90deg;

      & > * {
        fill: currentColor;
      }
    }
  }
`
