import styled from "styled-components"

export const InlineSuggestionInputWrapper = styled.div`
  position: relative;

  & > input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & > div {
    position: absolute;
    inset: 0;
    pointer-events: none;
    display: flex;
    align-items: center;

    & > :nth-child(1) {
      visibility: hidden;
    }

    & > :nth-child(2) {
      color: #999;
      margin-left: 9px;
    }
  }
`
