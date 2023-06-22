import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ST_Desktop_Search_ThreeCardsLandingWrapper = styled.div`
  margin-bottom: 84px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  gap: 32px;

  & > * {
    width: 294px;
    height: 303px;
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    &:hover::before {
      visibility: visible;
    }

    &::before {
      content: "";
      visibility: hidden;
      position: absolute;
      bottom: -32px;
      width: 318px;
      height: 4px;
      background-color: ${PRIMARY.PRIMARY_CTA};
      border-radius: 6px;
    }

    &:hover {
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.75);
    }
  }

  & > :nth-child(1) {
    box-shadow: ${(x) => (x.mustShowResults && x.whichWasClick === 0 ? `0px 2px 20px rgba(0, 0, 0, 0.75);` : ``)};

    &::before {
      visibility: ${(x) => (x.mustShowResults && x.whichWasClick === 0 ? `visible` : "")};
      background-color: ${(x) =>
    x.mustShowResults && x.whichWasClick === 0 ? `${PRIMARY.PRIMARY_CTA}` : `${NEUTRALS.LIGHT_GREY};`};
    }
  }

  & > :nth-child(2) {
    box-shadow: ${(x) => (x.mustShowResults && x.whichWasClick === 1 ? `0px 2px 20px rgba(0, 0, 0, 0.75);` : ``)};

    &::before {
      visibility: ${(x) => (x.mustShowResults && x.whichWasClick === 1 ? `visible` : "")};
      background-color: ${(x) =>
    x.mustShowResults && x.whichWasClick === 1 ? `${PRIMARY.PRIMARY_CTA}` : `${NEUTRALS.LIGHT_GREY};`};
    }
  }
  & > :nth-child(3) {
    box-shadow: ${(x) => (x.mustShowResults && x.whichWasClick === 2 ? `0px 2px 20px rgba(0, 0, 0, 0.75);` : ``)};

    &::before {
      visibility: ${(x) => (x.mustShowResults && x.whichWasClick === 2 ? `visible` : "")};

      background-color: ${(x) =>
    x.mustShowResults && x.whichWasClick === 2 ? `${PRIMARY.PRIMARY_CTA}` : `${NEUTRALS.LIGHT_GREY};`};
    }
  }
`
