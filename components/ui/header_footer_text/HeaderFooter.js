import styled from "styled-components"
import { HeaderFootColor, SharedValues } from "../../../assets/fonts2/FontsValues"
import { FontsWeights } from "../../../assets/fonts2/Weights"

const SharedVariables = {
  Underline: "underline",
  CursorPointer: "pointer",
}

const HeaderFooterFont = styled.p`
  font-weight: ${(x) => (x.bold ? FontsWeights.BOLD_700 : FontsWeights.REGULAR_400)};
  color: ${HeaderFootColor.HeaderFootColor};
  text-decoration: ${SharedVariables.Underline};
  border-radius: 8px;
  padding: ${SharedValues.PADDING};

  &:focus-visible {
    outline: 4px solid ${SharedValues.OUTLINE};
    text-decoration: underline;
  }

  &:active {
    color: ${FontsWeights.BOLD_700};
    text-decoration: underline;
  }
`

export const HyperlinkXS = styled(HeaderFooterFont)`
  font-size: ${SharedValues.FONT_SIZE.XSMALL};
  line-height: ${SharedValues.LINE_HEIGHT.XSMALL};
`
export const HyperlinkS = styled(HeaderFooterFont)`
  font-size: ${SharedValues.FONT_SIZE.SMALL};
  line-height: ${SharedValues.LINE_HEIGHT.SMALL};
`

export const HyperlinkM = styled(HeaderFooterFont)`
  font-size: ${SharedValues.FONT_SIZE.MEDIUM};
  line-height: ${SharedValues.LINE_HEIGHT.MEDIUM};
`

export const HyperlinkL = styled(HeaderFooterFont)`
  font-size: ${SharedValues.FONT_SIZE.LARGE};
  line-height: ${SharedValues.LINE_HEIGHT.LARGE};
`
