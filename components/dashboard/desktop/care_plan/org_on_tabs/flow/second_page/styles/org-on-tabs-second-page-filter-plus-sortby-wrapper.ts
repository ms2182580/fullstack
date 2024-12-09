import styled from "styled-components"

export const OrgOnTabsSecondPageFilterPlusSortbyWrapper = styled.div`
  display: flex;

  & > :nth-child(1) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(8px * 1);

    width: min-content;

    @media (1230px >= width) {
      grid-template-columns: repeat(2, 1fr);

      & > li {
        & > div {
          & > span {
            & > button {
              width: 100%;
            }
          }
        }
      }
    }
  }

  & > :nth-child(2) {
    margin-left: auto;

    /* border: 2px solid crimson; */
  }

  & > * {
    margin-top: calc(8px * 2);
  }
`
