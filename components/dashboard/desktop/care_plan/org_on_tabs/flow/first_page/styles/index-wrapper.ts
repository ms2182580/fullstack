import styled from "styled-components"

export const INDEX_D_OrgOnTabsFirstPageWrapper = styled.div`
  & > h1 {
    color: #312138;
    text-align: center;
  }

  & > :nth-child(2) {
    margin-top: calc(8px * 4);
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    /* grid-template-columns: repeat(auto-fit, minmax(1fr, auto)); */
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 400px)); */
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    /* grid-template-columns: minmax(200px, 7fr) minmax(200px, 1fr) minmax(
        200px,
        1fr
      ) 56px; */
    /* border: 2px solid crimson; */

    & > * {
      /* border: 2px solid green; */
    }

    & > :last-child {
      /* width: 100%; */
      /* width: 56px; */
    }
  }
`
