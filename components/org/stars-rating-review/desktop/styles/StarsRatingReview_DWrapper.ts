import styled, { css } from "styled-components"
import {
  NEUTRALS,
  SEMANTICS,
} from "../../../../../assets/Colors"

export type Props = {
  isDetail?: boolean
  rating?: number | undefined
}

export const StarsRatingReview_DWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > :nth-child(1) {
    margin-right: 8px;

    display: flex;
    align-items: center;
    gap: 4px;

    ${({ rating }) =>
      rating === undefined
        ? css`
            /* border: 2px solid crimson; */

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

  /* & > :nth-child(1) {
    margin-right: ${({ isDetail }) =>
    isDetail ? `20px` : `8px`};
  }

  & > :nth-child(2) {
    margin-right: 4px;
  }

  & > :nth-child(3) {
    color: ${({ isDetail }) =>
    isDetail ? `` : `${NEUTRALS.DARK_GREY}`};
    text-decoration: ${({ isDetail }) =>
    isDetail ? `` : `none`};

    text-decoration: underline;
    color: ${SEMANTICS.HYPERLINK_NORMAL};
  } */
`
