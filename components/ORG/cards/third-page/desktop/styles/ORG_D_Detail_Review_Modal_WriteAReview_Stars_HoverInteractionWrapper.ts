import styled from "styled-components"

export const enum ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS {
  HIGHLIGHT = "HIGHLIGHT",
}

export const ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteractionWrapper = styled.span`
  & > :nth-child(2) {
    display: flex;
    gap: 8px;
    cursor: pointer;

    width: fit-content;

    .${ORG_D_Detail_Review_Modal_WriteAReview_Stars_HoverInteraction_CLASS.HIGHLIGHT} {
      & > * {
        fill: #fdbd10;
        stroke: #fdbd10;
      }
    }
  }
`
