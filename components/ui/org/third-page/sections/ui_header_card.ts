import { PRIMARY } from "@/assets/Colors"
import { css } from "styled-components"

export const ui_header_card = () => css`
  padding: 16px 24px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  margin-bottom: 24px;

  font-weight: 600;
  font-size: 20px;
`
