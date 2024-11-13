import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import styled, { css } from "styled-components"

type Props = {
  isActiveTab: boolean
}

export const TabsTitleLiWrapper = styled.li<Props>`
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

  &:focus {
    outline: 4px solid ${SEMANTICS.FOCUS_RING};
  }

  & > p {
    color: ${NEUTRALS.DARK_GREY_2};
  }

  ${({ isActiveTab }) =>
    isActiveTab &&
    css`
      background-color: ${NEUTRALS.OFF_WHITE};
    `}

  &:focus-visible,
  &:focus {
    z-index: 3;
  }
`
