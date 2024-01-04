import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const ChatAIWrapper = styled.div`
  position: sticky;
  bottom: 0;
  right: -14px;

  display: flex;
  justify-content: flex-end;

  width: fit-content;
  margin-right: clamp(16px, calc(10vw - 80px), 96px);
  margin-left: auto;

  z-index: 4;

  & > :nth-child(1) {
    cursor: default;
    z-index: inherit;

    & > * {
      & > * {
        /* fill: ${PRIMARY.PRIMARY_HOVER}; */
        fill: ${NEUTRALS.DARK_GREY};
      }
    }
  }
`
