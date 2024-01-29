import styled from "styled-components"

export const AIChat_Conversation_IndividualMapWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 10px;
  background: #efefef;
  max-width: 352px;
  gap: 16px;
  & > :nth-child(2) {
    display: flex;
    width: 320px;
    height: 240px;
    padding: 31px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #000;
    background: #fff;
  }
  & > a {
    color: black;
  }
`
