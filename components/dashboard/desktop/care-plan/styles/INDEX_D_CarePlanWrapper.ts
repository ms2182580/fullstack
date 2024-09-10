import styled from "styled-components"

export const INDEX_D_CarePlanWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-areas:
    "editorHeader editorHeader"
    "steper tabs";

  background-color: #f3f1f3;

  & > :nth-child(1) {
    grid-area: editorHeader;
  }

  & > :nth-child(2) {
    grid-area: tabs;
  }

  & > :nth-child(3) {
    grid-area: steper;
  }
`
