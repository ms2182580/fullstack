import Link from "next/link"
import styled from "styled-components"
import { HyperLinkColor, SharedValues } from "../../../assets/fonts/FontsValues"
import { FontsWeights } from "../../../assets/fonts/Weights"

const SharedVariables = {
  Underline: "underline",
  CursorPointer: "pointer",
}

const theLink = styled.a`
  font-weight: ${(x) => (x.bold ? FontsWeights.BOLD_700 : x.bolder ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600)};
  color: ${HyperLinkColor.TEXT_COLOR};
  text-decoration: ${SharedVariables.Underline};
  border-radius: 8px;
  padding: 12px;
  line-height: 32px;

  cursor: ${SharedVariables.CursorPointer};
  &:hover {
    font-weight: ${FontsWeights.BOLD_700};
  }

  &:focus-visible {
    outline: 4px solid ${HyperLinkColor.OUTLINE};
  }
  &:visited {
    color: ${HyperLinkColor.VISITED};
  }
`

const SizeXS = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.XSMALL};
  line-height: ${SharedValues.LINE_HEIGHT.XSMALL};
`
export const HyperlinkXS = ({ href, name = "HyperlinkXS WITH NO NAME!", tabIndex = 0 }) => (
  <Link
    href={href}
    passHref>
    <SizeXS tabIndex={tabIndex}>{name}</SizeXS>
  </Link>
)

const SizeS = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.SMALL};
  line-height: ${SharedValues.LINE_HEIGHT.SMALL};
`

export const HyperlinkS = ({ href, name = "HyperlinkS WITH NO NAME!", tabIndex = 0 }) => (
  <Link
    href={href}
    passHref
    tabIndex={tabIndex}>
    <SizeS tabIndex={tabIndex}>{name}</SizeS>
  </Link>
)

const SizeM = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.MEDIUM};
  line-height: ${SharedValues.LINE_HEIGHT.MEDIUM};
`
export const HyperlinkM = ({ href, name = "HyperlinkM WITH NO NAME!", tabIndex = 0 }) => (
  <Link
    href={href}
    passHref>
    <SizeM tabIndex={tabIndex}>{name}</SizeM>
  </Link>
)

const SizeL = styled(theLink)`
  font-size: ${SharedValues.FONT_SIZE.LARGE};
  line-height: ${SharedValues.LINE_HEIGHT.LARGE};
`

export const HyperlinkL = ({ href, name = "HyperlinkL WITH NO NAME!", tabIndex = 0 }) => (
  <Link
    href={href}
    passHref>
    <SizeL tabIndex={tabIndex}>{name}</SizeL>
  </Link>
)
