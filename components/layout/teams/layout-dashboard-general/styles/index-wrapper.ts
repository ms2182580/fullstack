import styled from "styled-components"

export const IndexWrapper = styled.div`
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

    min-height: 100dvh; // This height is to make the children and the header fit the expected layout. After code the screens this can be deleted
  }
`
