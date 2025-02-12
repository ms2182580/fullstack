import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_ChatAIWrapper = styled.div`
  --inline-padding: clamp(8px, 19.277vw - 189.584px, 88px);

  display: grid;
  place-items: center;

  position: relative;

  min-height: 100dvh;

  & > :nth-child(1) {
    padding-inline: var(--inline-padding);

    margin-bottom: auto;

    padding-bottom: calc(8px * 6);
  }

  & > :nth-child(2) {
    width: 100%;

    position: sticky;
    bottom: 0;

    & > :nth-child(1) {
      margin-inline: var(--inline-padding);
    }

    & > :nth-child(2) {
      width: 100%;
      height: 48px;
      display: flex;

      background-color: ${NEUTRALS.OFF_WHITE};
    }
  }
`
