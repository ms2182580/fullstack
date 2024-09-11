import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_D_CarePlanWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-areas:
    "editorHeader editorHeader"
    "steper tabs";

  row-gap: 28px;

  background-color: ${NEUTRALS.OFF_WHITE_2};

  & > :nth-child(1) {
    grid-area: editorHeader;
    position: sticky;
    inset: 0;

    background-color: #fff;
  }

  & > :nth-child(2) {
    grid-area: tabs;
  }

  & > :nth-child(3) {
    grid-area: steper;
  }
`
