import styled from "styled-components"

export const TellStoryWrapper = styled.div`
  width: 1440px;
  padding-top: 56px;

  & > :nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > :nth-child(1) {
      & > :nth-child(1) {
        color: #1d1a1e;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      & > :nth-child(2) {
        color: #3a343c;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }
    & > :nth-child(2) {
      display: flex;
    }
  }
  /* justify-content: center; */
  /* align-items: flex-start; */
`
