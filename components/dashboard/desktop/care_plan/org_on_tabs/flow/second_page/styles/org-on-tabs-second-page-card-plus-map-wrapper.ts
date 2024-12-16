import styled from "styled-components"

type Props = {
  isFullMap: boolean
}

export const OrgOnTabsSecondPageCardPlusMapWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 8px;

  & > :nth-child(2) {
    border: 4px solid rebeccapurple;
    /* background-color: hsl(270, 50%, 40%); */

    /* height: calc(100dvh - 200px); */
    height: calc(100dvh - 139px);

    position: sticky;
    /* This px from top should come from the height of the header. Some prop should be used */
    top: 139px;
    right: 0;
  }
`
