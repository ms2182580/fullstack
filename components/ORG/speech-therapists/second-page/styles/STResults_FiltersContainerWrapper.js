import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STResults_FiltersContainerWrapper = styled.div`
  display: ${(x) => (x.mustShowFiltersMobile || x.isMobile === undefined ? "block" : "none")};
  background-color: ${NEUTRALS.OFF_WHITE};
  border: ${(x) => (x.isMobile ? "none" : `1px solid ${NEUTRALS.DARK_GREY}`)};
  border-radius: 8px;
  box-shadow: ${(x) => (x.isMobile ? "none" : `0px 2px 4px rgba(0, 0, 0, 0.25)`)};
  padding: ${(x) => (x.isMobile ? "50px 0px 0px 0px" : `1.5rem 2rem 48px 2rem`)};
  width: ${(x) => (x.isMobile ? "100%" : "895px")};

  position: absolute;
  z-index: 99;
  top: 60%;
  left: 270px;
  height: 100%;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: ${(x) => (x.isMobile ? "40px" : "56px")};
    margin-inline: ${(x) => (x.isMobile ? "53px" : "null")};

    & > :nth-child(2) {
      cursor: pointer;
      border-bottom: 2px transparent solid;
    }
    & > :nth-child(2):hover {
      border-bottom: 2px ${NEUTRALS.DARK_GREY} solid;
    }
    & > :nth-child(2):active {
      border-bottom: 2px ${NEUTRALS.BLACK} solid;
    }
  }

  & > :nth-child(2) {
    border-top: 1px solid ${NEUTRALS.BLACK};
  }

  & > *:not(:first-child) {
    margin-inline: ${(x) => (x.isMobile ? "44px 44px" : "24px 24px")};
    border-bottom: 1px solid ${NEUTRALS.BLACK};

    & > ul > li:last-child {
      margin-bottom: 21px;
    }
  }

  @media (${device.laptop}) {
    & > :nth-last-child(3) {
      margin-bottom: 40px;
    }

    & > :nth-last-child(2) > button,
    & > :nth-last-child(1) > button {
      margin-inline: 16px;
      width: calc(100vw - 32px);
    }

    & > :nth-last-child(2) > button {
      margin-bottom: 16px;
    }
  }
`
