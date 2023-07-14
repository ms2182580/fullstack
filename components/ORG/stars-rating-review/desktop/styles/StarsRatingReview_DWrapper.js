import styled from "styled-components"

export const StarsRatingReview_DWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > :nth-child(1) {
    margin-right: ${({ isDetail }) => isDetail ? `20px` : `8px`};
    
  }

  & > :nth-child(2) {
    margin-right: 4px;
  }
`
