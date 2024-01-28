import styled from "styled-components"

export const AIChat_Conversation_IndividualResourceWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  background: #efefef;
  max-width: 381px;

  & > :nth-child(2) {
    width: 100%;
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 12px;
    border-radius: 12px;
    background: #fff;

    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      & > :nth-child(1) {
        display: flex;
        flex-direction: column;

        & > :nth-child(1) {
          overflow: hidden;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 27px;
        }
        & > :nth-child(2) {
          overflow: hidden;
          color: #534957;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }
      }
    }
  }
  & > a {
    color: black;
  }
`
