import styled from "styled-components"

export const Dashboard_D_ChatBotWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 32px 100px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid #d5d5d5;
  background: #fff;
  margin-top: 19px;
  max-width: 921px;
  & > :nth-child(1) {
    & > :nth-child(2) {
      margin-top: 24px;
      display: flex;
      gap: 7px;
      & > :nth-child(1) {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #bfbfbf;
        display: flex;
        height: 44px;
        padding: 24px;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;
      }
    }
  }
`
