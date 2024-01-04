import styled from "styled-components"
import { NEUTRALS, SEMANTICS } from "../../../../../assets/Colors"

export type Props = {
  isDetail?: boolean
}

export const StarsRatingReview_DWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > :nth-child(1) {
    margin-right: ${({ isDetail }) => (isDetail ? `20px` : `8px`)};
  }

  & > :nth-child(2) {
    margin-right: 4px;
  }

  & > :nth-child(3) {
    color: ${({ isDetail }) => (isDetail ? `` : `${NEUTRALS.DARK_GREY}`)};
    text-decoration: ${({ isDetail }) => (isDetail ? `` : `none`)};

    text-decoration: underline;
    color: ${SEMANTICS.HYPERLINK_NORMAL};
  }
`
