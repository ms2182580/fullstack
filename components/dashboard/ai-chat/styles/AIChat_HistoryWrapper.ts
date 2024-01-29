import styled from "styled-components"

export const AIChat_HistoryWrapper = styled.div`
  padding: 17px 147px;

  & > :nth-child(1) {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid #a49fa6;

    & > :nth-child(1) {
      width: 100%;
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 16px;
    }
  }

  & > :nth-child(2) {
    margin-top: 24px;
    & > span {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
      margin-bottom: 10px;
      display: flex;
    }
    & > div {
      padding: 0px 16px;
      display: flex;
      height: 56px;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      align-self: stretch;
      border-radius: 10px;
      border: 1px solid #cacaca;
      margin-bottom: 10px;
      & > section {
        display: flex;
        gap: 16px;
      }
    }
  }
`
