import { css } from "styled-components"

export const ui_section_card = () => css`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-bottom: 40px;

  & > :nth-child(2) {
    padding: 24px;
  }
`
