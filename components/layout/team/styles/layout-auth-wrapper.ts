import styled from "styled-components"

export const LayoutAuthWrapper = styled.div`
  display: flex;

  & > * {
    border: 2px solid green;
  }

  & > :nth-child(1) {
    flex: 0 0 55%;
    padding-inline: calc(8px * 5);
    padding-block: 32px 100px;

    background-color: #e6e780;

    height: 100dvh;
  }

  & > :nth-child(2) {
    flex-grow: 1;
  }
`
