import styled from "styled-components"

export const Layout_Dashboard_CarePlanWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  grid-template-areas: "aside children";

  & > :nth-child(1) {
    grid-area: aside;
    height: 100vh;
    position: sticky;
    inset: 0;
  }

  & > :nth-child(2) {
    grid-area: children;

    height: 120vh;
  }
`
