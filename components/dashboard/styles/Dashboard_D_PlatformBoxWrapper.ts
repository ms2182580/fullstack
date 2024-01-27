import styled from "styled-components"

export const Dashboard_D_PlatformBoxWrapper = styled.div`
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
      margin-top: 17px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
    & > :nth-child(3) {
      display: flex;
      gap: 24px;
      margin-top: 24px;
      & > :nth-child(1),
      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        & > :nth-child(1) {
          display: flex;
          gap: 8px;
        }
      }
    }
    & > :last-child {
      position: absolute;
      right: 0px;
      bottom: 0px;
    }
  }
`
