import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"
import { device } from "../../../../assets/screenSizes/ScreenSizes"
import { COLORS } from "../../../ui/buttons/variables"

const SearchComponentWrapper = styled.div`
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 8fr 8fr 1fr;

  & > :nth-child(2) {
    margin-right: 2rem;
  }

  & > div {
    position: relative;
  }

  & > div > :nth-child(1) {
    height: 2rem;
  }

  & > div > span {
    display: flex;
    position: relative;
  }

  & > div > span > span {
    position: absolute;
    z-index: 2;
  }

  & > div > span > input {
    width: 100%;
    height: 48px;
    padding: 0.5rem 4rem;

    @media (max-width: 888px) {
      padding: 0.5rem 2rem 0.5rem 4rem;
    }
  }

  & > div > span > input:focus,
  & > div:nth-child(1) > span > input:focus,
  & > div:nth-child(2) > span > input:focus {
    border-radius: 5px;
    outline: 4px solid ${COLORS.FocusOutline};
    border: 1px transparent solid;
    position: absolute;
    z-index: 1;
  }

  & > div:nth-child(1) > span > input {
    border-radius: 5px 0px 0px 5px;
    border: 1px ${NEUTRALS.DARK_GREY} solid;
  }
  & > div:nth-child(2) > span > input {
    border-radius: 0px 5px 5px 0px;
    border: 1px ${NEUTRALS.DARK_GREY} solid;
  }

  & > a:nth-last-child(1) {
    align-self: end;
  }

  @media (${device.tablet}) {
    /* border: 2px solid crimson; */
    display: flex;
    flex-direction: column;
    width: 100%;
    /* width: ${(x) => (x.landingHere === "true" ? "100%" : "100%")}; */
    /* border: 2px solid ${(x) => (x.landingHere === "true" ? "green" : "blue")}; */

    & > :nth-child(2) {
      margin-right: 0;
    }

    & > div > :nth-child(1) {
      margin-bottom: 4px;
      height: 16px;
    }
    & > div:nth-child(1) > :nth-child(2) {
      margin-bottom: 16px;
    }

    & > div:nth-child(2) > :nth-child(2) {
      margin-bottom: 94px;
    }

    & > div:nth-child(1) > span > input,
    & > div:nth-child(2) > span > input {
      border-radius: 4px;
      padding: 12px 8px;
    }

    & > div > span > :nth-child(1) {
      display: none;
    }

    & > a:nth-last-child(1) {
      /* align-self: stretch; */
      /* border: 2px solid crimson; */
      width:100%;
    }
    
    & > a:nth-last-child(1) > button{
      /* border: 2px solid cornflowerblue; */
      width:100%;
      
    }
  }
`

export default SearchComponentWrapper

export const SuggestionsKeywordWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 84px;
  z-index: 99;
  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`
