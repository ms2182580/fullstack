import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const SingleDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;

  /* background-color: crimson; */

  & > :nth-child(1) {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
    cursor: pointer;
    & > p {
      margin-right: 1.25rem;
      user-select: none;
    }
    & > span {
      width: 2.5rem;
    }
  }

  & > :nth-child(2) {
    position: absolute;
    top: 100%;
    width: 100%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    z-index: 99;
    width: 188px;
    /* background-color: crimson; */

    & > div:nth-child(1) {
      height: 1.67px;
      width: 174px;
      margin-bottom: 8px;
      background-color: ${NEUTRALS.BLACK};
    }

    & > p,
    & > a > p {
      padding: 0.5rem 1.5rem;
      cursor: pointer;

      background-color: ${(x) => x.highlight === "highlight" && crimson};
    }

    & > p:hover,
    & > a > p:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > div:nth-last-child(1) {
      height: 0.5rem;
    }
  }
`

export const CustomP = styled.p`
  background-color: ${(x) => (x.highlight ? NEUTRALS.BLACK : "")};
  color: ${(x) => (x.highlight ? NEUTRALS.OFF_WHITE : "")};
`
