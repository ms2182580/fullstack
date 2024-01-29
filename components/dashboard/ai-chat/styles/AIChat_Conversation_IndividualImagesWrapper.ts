import styled from "styled-components"

export const AIChat_Conversation_IndividualImagesWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  background: #efefef;
  max-width: 378px;

  & > :nth-child(2) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    width: 100%;
    & > div {
      border-radius: 8px;
      border: 1px solid #000;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 110px;
    }
  }
`
