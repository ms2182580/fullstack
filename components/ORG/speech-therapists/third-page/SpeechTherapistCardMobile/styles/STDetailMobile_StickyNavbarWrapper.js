import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const STDetailMobile_StickyNavbarWrapper = styled.nav`
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(x) => x.sticky ? `${NEUTRALS.OFF_WHITE}` : ``};

  position:sticky;
  
  /* position: ${(x) => (x.sticky ? `sticky` : `none`)}; */
  /* margin-bottom:48px; */
  top: 0;
  z-index:1;
  /* width:100%; */
  margin-bottom:3rem; 
  
  /* height:50vh; */

  /* position: sticky;
  top: 20px;
  top: 0px;
  left: 0px;
  position: relative; */

  /* position: relative; */
  /* border: 2px solid crimson; */
  
  & > .navbar .sticky{
    border: 2px solid crimson;
    
  }

  & > :nth-child(1) {
    /* border: 2px solid crimson; */
    margin-inline: 29px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    /* z-index: 1; */
    /* top: -1px; */
    position: sticky;

    top: 0;
    bottom: 0;
    height: 48px;
    /* overflow-y: auto; */

    & > li {
      list-style: none;
      /* flex-grow: 1; */
      padding-top: 12px;
      /* padding-bottom: 12px; */
      /* margin: 12px 29px 12px 29px; */

      display: flex;
      /* justify-content: center; */
      /* align-items: center; */

      /* border: 2px solid green; */
      text-align: center;
      /* width:100%; */
    }

    & > li > a {
      /* width:57px; */
      /* width: calc(1rem + 50px); */
      text-decoration: none;
      /* border: 2px solid cornflowerblue; */
      /* display: inline-table; */
      /* padding: 12px 29px 12px 29px; */
      padding-top: 12px;
      padding-bottom: 12px;

      margin-bottom: 5px;
      /* width:100%; */

      /* flex-grow: 1; */

      border-bottom: 4px solid transparent;

      &:hover,
      a {
        border-bottom: 4px red solid;
      }
    }
  }
`
