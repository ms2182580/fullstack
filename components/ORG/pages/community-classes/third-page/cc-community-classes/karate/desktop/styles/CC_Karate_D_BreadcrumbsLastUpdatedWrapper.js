import styled from "styled-components"

export const CC_Karate_D_BreadcrumbsLastUpdatedWrapper = styled.div`
  display: grid;
  grid-template-columns: 2.3fr 1fr;

  & > * {
    align-self: flex-start;
  }

  & > :last-child {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`
