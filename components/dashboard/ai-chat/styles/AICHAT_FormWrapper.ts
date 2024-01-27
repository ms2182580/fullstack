import styled from "styled-components"

export const AICHAT_FormWrapper = styled.div`
  display: flex;
  width: 880px;
  height: 56px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #bfbfbf;
  margin-left: 110px;
  & > :nth-child(1) {
    display: flex;
    gap: 16px;
    width: 100%;

    & > :nth-child(1),
    & > :nth-child(2) {
      width: 24px;
      height: 32px;
    }

    & > :nth-child(3) {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      & > :nth-child(1) {
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }
`
