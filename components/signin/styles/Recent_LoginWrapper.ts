import styled from "styled-components"

export const Recent_LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  header {
    h3 {
      color: #1d1a1e;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 54px;
    }

    p {
      color: #746779;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 16px;

    & > :nth-child(1) {
      display: flex;
      height: 283px;
      min-width: 245.63px;
      max-height: 283px;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 8px 8px 0px 0px;
      border: 1px solid #d3ced5;
      border-right: 1px solid #d3ced5;
      border-bottom: 1px solid #d3ced5;
      border-left: 1px solid #d3ced5;

      border-radius: 8px;

      & > :nth-child(1) {
        height: 222px;
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
      }
      & > :nth-child(2) {
        display: flex;
        max-width: 100%;
        padding: 16px 72px;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
      }
    }

    & > :nth-child(2) {
      & > :nth-child(1) {
        height: 224px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 245.63px;
        border-radius: 8px 8px 0px 0px;
        border: 1px solid #d3ced5;
        background: #f3f1f3;
      }
      & > :nth-child(2) {
        display: flex;
        max-width: 245.63px;
        padding: 16px 72px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 0px 0px 8px 8px;
        border-right: 1px solid #d3ced5;
        border-bottom: 1px solid #d3ced5;
        border-left: 1px solid #d3ced5;
        background: #fff;
      }
    }
  }
`
