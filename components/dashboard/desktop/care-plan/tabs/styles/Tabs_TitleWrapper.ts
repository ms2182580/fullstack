import { PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const Tabs_TitleWrapper = styled.ul`
  border: 2px solid green;
  list-style: none;

  display: flex;
  /* gap: 16px; */

  & > li {
  }
`

type Tabs_Title_LI_Props = {
  isActiveTab: boolean
}

export const Tabs_Title_LI = styled.li<Tabs_Title_LI_Props>`
  padding-inline: 16px;
  background-color: green;
  color: whitesmoke;

  &:hover,
  &:focus-visible {
  }

  ${({ isActiveTab }) =>
    isActiveTab &&
    css`
      background-color: ${PRIMARY.PRIMARY_CTA};
    `}
`
