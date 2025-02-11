import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const Layout_Dashboard_GeneralWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  position: relative;

  grid-template-areas:
    "aside header"
    "aside children";

  & > :nth-child(1) {
    grid-area: aside;
    height: 100dvh;
    position: sticky;
    inset: 0;
  }

  & > :nth-child(2) {
    grid-area: header;
    position: sticky;
    z-index: 99;
    inset: 0;

    height: fit-content;
  }

  & > :nth-child(3) {
    grid-area: children;

    padding-bottom: calc(8px * 6);
    background-color: ${NEUTRALS.OFF_WHITE};
  }
`
