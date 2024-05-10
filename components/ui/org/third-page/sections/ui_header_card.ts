import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { css } from "styled-components"

export const ui_header_card = () => css`
  padding: 16px 24px;

  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  background-color: ${PRIMARY.PRIMARY_BACKGROUND};

  font-weight: 600;
  font-size: 20px;

  border-bottom: 1px solid ${NEUTRALS.BORDER};
`
