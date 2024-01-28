import styled from "styled-components"

export const AIChat_SuggestionsResponseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & > :nth-child(2),
  & > :nth-child(3) {
    display: flex;
    height: 34px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #000;
  }
`
