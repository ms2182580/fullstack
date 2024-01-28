import styled from "styled-components"

export const AIChat_SuggestionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > :nth-child(1) {
    margin-top: 110px;
  }
  & > :nth-child(2) {
    margin-top: 48px;
  }

  & > :nth-child(3) {
    margin-top: 77px;
    display: flex;
    gap: 16px;
    padding: 0px 110px;
    & > * {
      display: flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 14px;
      border: 1px solid #b3b3b3;
      & > :nth-child(2) {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 34px;
      }
      & > :nth-child(3) {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
`
