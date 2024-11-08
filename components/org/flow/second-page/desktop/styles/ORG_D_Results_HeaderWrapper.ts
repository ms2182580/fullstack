import { NEUTRALS } from "@/assets/Colors"
import styled, { css } from "styled-components"

type Props = {
  isTypedFlow?: boolean
}

export const ORG_D_Results_HeaderWrapper = styled.div<Props>`
  padding-top: 56px;
  padding-bottom: 40px;
  padding-inline: clamp(16px, calc(10vw - 80px), 96px);

  ${({ isTypedFlow }) =>
    isTypedFlow
      ? css`
          & > :nth-child(1) {
            color: ${NEUTRALS.DARK_GREY};
            font-weight: 700;
          }
        `
      : css`
          & > :nth-child(1) {
            font-size: 48px;
            font-weight: 600;
            line-height: 72px;

            margin-bottom: calc(8px * 6);
          }
        `}
`
