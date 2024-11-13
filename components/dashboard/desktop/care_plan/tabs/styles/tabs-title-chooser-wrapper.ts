import { NEUTRALS } from "@/assets/Colors"
import styled, { css } from "styled-components"

/* tabs-title-wrapper */

export const TabsTitleChooserWrapper = styled.ul`
  list-style: none;

  display: flex;
`

type Tabs_Title_LI_Props = {
  isActiveTab: boolean
}

export const Tabs_Title_LIWrapper = styled.li<Tabs_Title_LI_Props>`
  padding-inline: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px 16px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: ${NEUTRALS.LIGHT_GREY2};

  cursor: default;

  & > p {
    color: ${NEUTRALS.DARK_GREY_2};
  }

  ${({ isActiveTab }) =>
    isActiveTab &&
    css`
      background-color: ${NEUTRALS.OFF_WHITE};
    `}

  &:focus-visible {
    z-index: 1;
  }
`
