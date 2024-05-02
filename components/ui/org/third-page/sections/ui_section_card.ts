import { NEUTRALS } from "@/assets/Colors"
import { css } from "styled-components"

export const ui_section_card = () => css`
  border-radius: 4px;

  padding-bottom: 40px;

  border: 1px solid ${NEUTRALS.BORDER};

  & > :nth-child(2) {
    padding: 24px;
  }
`
