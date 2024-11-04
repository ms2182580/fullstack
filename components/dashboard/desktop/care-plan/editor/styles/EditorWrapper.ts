import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isEmpty: boolean
  isVisible: boolean
}

export const EditorWrapper = styled.div<Props>`
  padding: 72px 64px 16px;

  color: ${PRIMARY.LIGHT_MAROON};

  min-height: 100dvh;
  cursor: text;

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  & > div[contenteditable="true"] {
    outline: none;

    position: relative;

    color: ${({ isEmpty }) =>
      isEmpty ? `${NEUTRALS.DARK_GREY_3}` : `${NEUTRALS.BLACK}`};

    &:before {
      content: ${({ isEmpty }) => (isEmpty ? `attr(data-placeholder)` : ``)};

      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &:has(div[contenteditable="true"]:is(:focus-visible)) {
    outline: 2px solid ${SEMANTICS.FOCUS_RING};
  }
`
