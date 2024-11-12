import { COLORS_TYPE } from "@/utils/colors"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"

export type SaveResourceHearthWrapper_SVGStyles_Type = {
  forActive: COLORS_TYPE["HEX"] | COLORS_TYPE["HSL"]
  forHoverAndFocusVisible: string
  forModalOpen: () => FlattenSimpleInterpolation
}

type Props = {
  clickOnSVG?: boolean
  checkModalIsOpen: boolean
  SVGStyles?: SaveResourceHearthWrapper_SVGStyles_Type
}

export const SaveResourceHearthWrapper = styled.div<Props>`
  & > * {
    ${({ checkModalIsOpen, SVGStyles }) =>
      checkModalIsOpen &&
      css`
        ${SVGStyles?.forModalOpen()};
      `}

    & > * {
      fill: ${({ clickOnSVG, SVGStyles }) =>
        clickOnSVG ? `${SVGStyles?.forActive}` : ``};
    }
  }

  & > * > *:hover,
  &:focus-visible > * > * {
    fill: ${({ clickOnSVG, SVGStyles }) =>
      clickOnSVG ? `` : `${SVGStyles?.forHoverAndFocusVisible}`};
  }
`
