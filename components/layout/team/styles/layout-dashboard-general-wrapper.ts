import styled from "styled-components"

export const LayoutDashboardGeneralWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  position: relative;

  grid-template-areas:
    "aside header"
    "aside children";

  & > :nth-child(1) {
    grid-area: aside;
    height: 100vh;
    position: sticky;
    inset: 0;
  }

  & > :nth-child(2) {
    grid-area: header;
    position: sticky;
    inset: 0;

    height: fit-content;
  }

  & > :nth-child(3) {
    grid-area: children;

    padding-block: calc(8px * 4);
  }
`
