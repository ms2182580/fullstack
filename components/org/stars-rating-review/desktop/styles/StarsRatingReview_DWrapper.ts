import styled, { css } from "styled-components"
import { NEUTRALS, SEMANTICS } from "../../../../../assets/Colors"

export type Props = {
  isDetail?: boolean
  rating?: number | null
}

export const StarsRatingReview_DWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > :nth-child(1) {
    margin-right: 8px;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 16px;

    ${({ rating }) =>
      rating === undefined
        ? css`
            position: relative;
            padding-inline: 8px;
            &:after {
              content: "";
              position: absolute;
              inset: 0;
              background-color: ${NEUTRALS.LIGHT_GREY};
              opacity: 0.8;

              border-radius: 8px;
            }
          `
        : css``}
  }
  & > :nth-child(2) {
    color: ${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration: underline;
  }
`
