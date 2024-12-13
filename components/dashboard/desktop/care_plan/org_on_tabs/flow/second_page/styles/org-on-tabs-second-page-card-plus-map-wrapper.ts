import styled from "styled-components"

type Props = {
  isFullMap?: boolean
}

/* 
!FH0
Solve the sticky problem
*/

export const OrgOnTabsSecondPageCardPlusMapWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: 2fr 1fr;

  & > :nth-child(1) {
    list-style: none;

    & > li {
      width: 100%;
      height: 500px;

      box-shadow: 0 0 0 1px black;
    }
  }

  & > :nth-child(2) {
    border: 2px solid rebeccapurple;
    background-color: hsl(270, 50%, 40%);

    height: calc(100dvh - 200px);

    position: sticky;
    /* This px from top should come from the height of the header. Some prop should be used */
    top: 139px;
    right: 0;
  }
`
