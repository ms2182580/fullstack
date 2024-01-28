import styled from "styled-components"

export const AIChat_Conversation_IndividualImageWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  background: #efefef;
  max-width: 382px;

  & > :nth-child(2) {
    display: flex;
    flex-direction: row;
    display: flex;
    width: 350px;
    height: 350px;
    padding: 31px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #000;
    background: #fff;
  }
`
