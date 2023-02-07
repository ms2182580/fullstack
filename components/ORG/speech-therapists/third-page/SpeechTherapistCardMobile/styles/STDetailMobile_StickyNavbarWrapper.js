import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const STDetailMobile_StickyNavbarWrapper = styled.nav`
  /* box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25); */
  box-shadow: ${(x) => x.sticky ? `none` : `inset 0px 2px 4px rgba(0, 0, 0, 0.25)`};
  
  /* overflow-x:hidden; */

  background-color: ${NEUTRALS.OFF_WHITE};

  /* position: sticky; */
  position: ${(x) => x.sticky ? `fixed` : `none`};
  top: 0;
  
  /* height: 48px; */

  & > :nth-child(1) {
    /* border: 2px solid crimson; */
    margin-inline: 29px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    position: sticky;

    /* top: 0; */
    /* bottom: 0; */
    height: 48px;

    & > li {
      list-style: none;

      display: flex;

      text-align: center;
    }

    & > li > span {
      text-decoration: none;

      border-bottom: 4px solid transparent;

      &:hover,
      span {
        border-bottom: 4px red solid;
      }
    }
  }
`
