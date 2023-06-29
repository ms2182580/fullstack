import styled from "styled-components"

export const ST_M_Results_FilterSortbyHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  /* border: 2px solid green; */
  margin-bottom: 16px;

  & > * {
    /* border: 2px solid black; */
  }

  & > :not(:last-child) {
    margin-inline: calc(29px - 16px);
  }
`
