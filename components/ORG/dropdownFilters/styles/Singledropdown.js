import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const SingleDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;

  & > :nth-child(1) {
    width: 191px;
    height: 48px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p:nth-child(1) {
      margin-left: auto;
      user-select: none;
    }

    & > :nth-child(2) {
      margin-right: 12px;
      margin-left: auto;
    }
  }

  & > :nth-child(2) {
    position: absolute;
    top: 100%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    z-index: 99;
    width: 188px;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    & > div:nth-child(1) {
      height: 1.67px;
      width: 174px;
      margin-bottom: 8px;
      background-color: ${NEUTRALS.BLACK};
    }

    & > span,
    & > a > span {
      padding: 0.5rem 1.5rem;
      cursor: pointer;

      background-color: ${(x) => x.highlight === "highlight" && crimson};
    }

    & > span:hover,
    & > a > span:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > div:nth-last-child(1) {
      height: 0.5rem;
    }
  }
`

export const CustomC = styled.span`
  background-color: ${(x) => (x.highlight ? NEUTRALS.BLACK : "")};
  color: ${(x) => (x.highlight ? NEUTRALS.OFF_WHITE : "")};
`
