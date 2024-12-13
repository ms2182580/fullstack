import styled from "styled-components"

export const INDEX_D_OrgOnTabsFirstPageWrapper = styled.div`
  & > h1 {
    color: #312138;
    text-align: center;
  }

  & > :nth-child(2) {
    margin-top: calc(8px * 4);
  }

  & > :nth-child(3) {
    /* 
    !FH0
    Calculate properly the width of this component based on the component at the side:
    
    - If Create Care Plan is visible
    - If Create Care Plan is hidden
    - Check for both states, the width of the component from 1025px to 1440px
    - Add to main element the max-width of the whole app on Layout component
    */

    width: clamp(630px, 69vw - 73.92px, 916px);
  }
`
