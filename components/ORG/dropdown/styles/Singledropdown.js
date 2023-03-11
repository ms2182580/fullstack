import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

export const SingleDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(x) => (x.noIcon ? "1fr" : "48px 1fr")};
  grid-template-rows: 1fr;
  position: relative;

  & > :nth-child(2) {
    display: flex;
    align-items: flex-start;
    cursor: pointer;

    & > p {
      margin-right: 1.25rem;
      user-select: none;
    }
    & > span {
      width: 2.5rem;
    }
  }

  & > .ORGDropdownSuggestion {
    position: ${(x) => (x.isMobile ? "null" : "absolute")};
    top: 100%;
    width: 100%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 99;

    & > div:nth-child(1) {
      height: 0.375rem;
      background-color: ${NEUTRALS.BLACK};
    }

    & > p,
    & > a > p {
      padding: 0.5rem 1.5rem;
      cursor: pointer;
    }

    & > p:hover,
    & > a > p:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > div:nth-last-child(1) {
      height: 0.5rem;
    }

    @media (${device.laptop}) {
      width: calc(100vw - 33px);
      box-shadow: none;
      & > :nth-child(1) {
        display: none;
      }
    }
  }

  & > .ORGDropdownComingSoon {
    position: ${(x) => (x.isMobile ? "null" : "absolute")};
    top: 100%;
    width: 100%;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
    background-color: ${NEUTRALS.OFF_WHITE};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    z-index: 99;

    & > div > div:nth-child(1) {
      height: 0.375rem;
      background-color: ${NEUTRALS.BLACK};
    }
    & > div > p {
      margin: 1rem;
    }

    @media (${device.laptop}) {
      box-shadow: none;
      width: calc(100vw - 32px);
      margin-left: -48px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;

      &:hover {
        background-color: ${NEUTRALS.DARK_GREY};
        color: ${NEUTRALS.OFF_WHITE};
      }


      & > :nth-child(1) > :nth-child(1) {
        display: none;
      }

    }
  }
`
