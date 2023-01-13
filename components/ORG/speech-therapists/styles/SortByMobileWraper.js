import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const SortByMobileWrapper = styled.div`
  border: 1px solid ${NEUTRALS.DARK_GREY};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: ${x => x.showDropdown ? "8px 8px 0px 0px" : "8px" };
  position: relative;
  cursor: pointer;
  width: 116px;

  & > :nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & > span {
      margin-inline: 1.25rem;
      white-space: nowrap;
      user-select: none;
    }
    & > span:nth-child(3) > svg > path {
      fill: ${PRIMARY.PRIMARY_CTA};
    }
  }

  & > :nth-child(2) {
    position: absolute;
    top: 100%;
    right: 0%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    z-index: 99;
    width: calc(130px + 6px + 28px);
    display: flex;
    flex-direction: column;

    & > div:nth-child(1) {
      height: 2px;
      margin-left: 28px;
      margin-bottom: 8px;
      background-color: ${NEUTRALS.BLACK};
    }

    & > span,
    & > a > span {
      padding: 0.5rem 1.5rem;
      cursor: pointer;
    }

    & > span:hover,
    & > a > span:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > div:nth-last-child(1) {
      height: 10px;
    }
  }

`
