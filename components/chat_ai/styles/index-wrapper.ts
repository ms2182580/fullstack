import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_ChatAIWrapper = styled.div`
  --inline-padding: clamp(8px, 19.277vw - 189.584px, 88px);

  display: grid;
  place-items: center;
  /* justify-items: center; */

  position: relative;

  min-height: 100dvh;
  /* border: 2px solid crimson; */

  & > :nth-child(1) {
    padding-inline: var(--inline-padding);
  }

  & > :nth-child(2) {
    width: 100%;

    position: sticky;
    inset: 0;
    bottom: 26px;

    & > :nth-child(1) {
      margin-inline: var(--inline-padding);
    }

    &:before {
      content: "";
      position: absolute;
      right: 0;
      left: 0;
      bottom: -48px;
      z-index: -1;

      height: 68px;
      background-color: ${NEUTRALS.OFF_WHITE};
    }
  }
`
