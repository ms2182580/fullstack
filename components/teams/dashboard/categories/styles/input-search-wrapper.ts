import styled from "styled-components"

export const InputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  border: 2px solid gray;
  border-radius: 8px;

  max-width: 880px;
  width: 100%;

  padding: 8px 24px;

  & > :nth-child(1) {
    display: flex;
    gap: calc(8px * 2);
  }

  & > :nth-child(2) {
    flex: 1;

    border: none;
    outline: none;
  }

  & > :nth-child(3) {
  }

  &:has(:nth-child(2):focus) {
    outline: 4px solid #64affb;
  }
`
