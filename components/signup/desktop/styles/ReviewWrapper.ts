import styled from "styled-components"

export const ReviewWrapper = styled.div`
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  background-image: url("/background/background2.svg");
  height: 72vh;
  margin-right: 10px;

  & > :nth-child(1) {
    margin-left: 120px;
    display: flex;
    width: 596px;
    padding: 40px 32px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    border: 2px solid #d3ced5;
    background: #fff;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 10px;
      & > :nth-child(1) {
        background-color: #f3f1f3;
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  & > :nth-child(2) {
    margin-top: 16px;
    margin-left: 120px;
    display: flex;
    width: 596px;
    padding: 24px 32px;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    border: 2px solid #d3ced5;
    background: #f2eaf6;
    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`
