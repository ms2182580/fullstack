import { NEUTRALS } from "@/assets/Colors"
import { css } from "styled-components"

export const ui_section_card = () => css`
  border-radius: 8px;

  border: 1px solid ${NEUTRALS.BORDER};

  & > :nth-child(2) {
    padding: 32px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 8px 8px;
  }
`
