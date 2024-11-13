import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  isEmpty: boolean
  theHeightOfTextarea: number
}

export const EditorWrapper = styled.div<Props>`
  padding: 72px 64px 16px;

  color: ${PRIMARY.LIGHT_MAROON};

  min-height: 100dvh;
  cursor: text;

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

  & > textarea {
    resize: none;

    outline: none;
    border: none;

    width: 100%;

    field-sizing: content;

    /* min-height: 200px; */

    /* border: 2px solid crimson; */

    min-height: ${({ theHeightOfTextarea }) => `${theHeightOfTextarea}px`};

    position: relative;

    color: ${NEUTRALS.BLACK};

    &:placeholder {
      color: ${NEUTRALS.DARK_GREY_3};
    }

    &:focus {
      border-radius: 0;
    }
  }

  &:has(textarea:is(:focus-visible)) {
    outline: 2px solid ${SEMANTICS.FOCUS_RING};
  }
`
