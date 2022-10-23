import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"
import { COLORS } from "../../../components/ui/buttons/variables"

const SearchComponentWrapper = styled.div`
  /* border: 1px red solid; */
  margin-bottom: 2.5rem;
  /* background-color: black; */

  display: grid;
  grid-template-columns: 8fr 8fr 1fr;
  /* width:100%; */

  & > :nth-child(2) {
    /* border:5px rebeccapurple solid; */
    margin-right: 2rem;
  }

  & > div {
    position: relative;
  }

  & > div > p {
    /* border:1px red solid; */
    height: 2rem;
  }

  & > div > span {
    /* border: 1px black solid; */
    display: flex;
    position: relative;
  }

  & > div > span > span {
    /* border: 1px black solid; */
    position: absolute;
    z-index: 2;
    /* left:1.438rem; */
  }

  & > div > span > input {
    width: 100%;
    height: 48px;
    padding: 0.5rem 4rem;
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
    /* position:absol */
    /* margin-right: 10px; */
    /* outline:1px crimson solid; */

    /* outline: 4px solid ${(x) => console.log(x.focused)} */
  }
  & > div:nth-child(2) > span > input {
    border-radius: 0px 5px 5px 0px;
    border: 1px ${NEUTRALS.DARK_GREY} solid;
  }

  & > a:nth-last-child(1) {
    /* border: 6px red solid; */
    align-self: end;
  }
`

export default SearchComponentWrapper

export const OptionsWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-bottom: 17.5rem;
  margin-left: 0.75rem;

  & > *:not(:nth-last-child(1)) {
    margin-right: clamp(10px, 3.625rem, 5vw);
    /* margin-right: min(3.625rem); */
  }
`

export const SuggestionsKeywordWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 84px;
  z-index: 2;
  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`
