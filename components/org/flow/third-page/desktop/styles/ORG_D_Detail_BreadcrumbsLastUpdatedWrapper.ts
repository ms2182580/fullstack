import styled from "styled-components"

export const ORG_D_Detail_BreadcrumbsLastUpdatedWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  & > * {
    align-self: flex-start;
  }

  & > :nth-child(1) {
    /* white-space: nowrap; */
  }

  & > :last-child {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;

    & > :nth-child(1) {
      text-align: end;
    }
  }
`
