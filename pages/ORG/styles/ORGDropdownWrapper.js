import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"

const ORGDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-template-rows: 1fr;
  position: relative;
  
  & > * {
    /* align-self: start; */
    /* outline: 2px grey solid; */
  }
  
  & > span > *{
    /* border: 2px hsl(44, 44%, 50.2%) solid; */
  }
  

  & > div:nth-child(1) {
    /* margin-right: 1.374rem; */
    /* place-self: center; */
    /* align-self: start; */
    /* outline: 1px red solid; */
    margin-left: 0.813rem;
  }

  & > :nth-child(2) {
    display: flex;
    cursor: pointer;
    & > p {
      margin-right: 1.25rem;
      user-select: none;
    }

    & > span:not(:nth-last-child(1)) {
      /* outline: blue 2px solid; */
      /* margin-right: 1.125rem; */
    }
  }

  & > .ORGDropdownSuggestion {
    position: absolute;
    top: 100%;
    width: 100%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    /* border:2px rebeccapurple solid; */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    & > div:nth-child(1) {
      /* border:2px rebeccapurple solid; */
      height: 0.375rem;
      background-color: ${NEUTRALS.BLACK};
    }

    & > p, & > a > p {
      /* border:1px red solid; */
      padding: 0.5rem 1.5rem;
      cursor: pointer;
    }

    & > p:hover, & > a> p:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > div:nth-last-child(1) {
      /* border:1px red solid; */
      /* background-color: black; */
      height: 0.5rem;
      /* border-bottom-left-radius: 8px; */
      /* border-bottom-right-radius: 8px; */
    }
    /* outline:1px crimson solid; */
    /* display: flex; */
    /* width:100%; */
  }
  
  & > .ORGDropdownComingSoon {
    position: absolute;
    top: 100%;
    width: 100%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    
    & > div > div:nth-child(1) {
      height: 0.375rem;
      background-color: ${NEUTRALS.BLACK};
    }
    & > div > p {
      margin:1rem;
    }
  }
  
  
`
export default ORGDropdownWrapper

export const DropdownComingSoon = styled.div`
/* outline: 4px red solid; */

  & > div {
    outline: 4px red solid;
    position: absolute;
  }
`
