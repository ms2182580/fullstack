import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const ChatAnswerWrapper = styled.ul`
  & > li {
    width: fit-content;
    & > section {
      border: 2px solid green;
      padding: calc(8px * 2);

      border: 2px solid ${NEUTRALS.DARK_GREY_3};
      border-radius: calc(8px * 2);

      display: grid;
      gap: calc(8px * 2);

      width: 100%;

      & > :nth-child(1) {
        h2 {
          font-size: 16px;
          font-weight: 400;
        }
      }

      & > :nth-child(2) {
        display: grid;
        gap: calc(8px * 2);
      }
    }
  }
`
