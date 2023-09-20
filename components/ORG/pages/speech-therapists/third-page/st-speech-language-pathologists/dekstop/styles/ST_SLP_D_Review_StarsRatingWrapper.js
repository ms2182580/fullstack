import styled from "styled-components"

export const ST_SLP_D_Review_StarsRatingWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :nth-child(1) {
    margin-right: 8px;
  }

  & > :nth-child(2) {
    margin-right: 11px;
  }

  & > span {
    color: #939090;
  }

  &.isDetailModalDesktop {
    margin-bottom: 20px;

    & > :nth-child(1) {
      font-size: 40px;
    }

    & > :nth-child(2) {
      margin-right: 14px;
    }

    & > :nth-child(3) {
      font-size: 20px;
    }
  }
`
