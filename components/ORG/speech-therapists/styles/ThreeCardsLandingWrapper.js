import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

export const ThreeCardsLandingWrapper = styled.div`
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
  }

  & > :nth-child(1) {
    &::before {
      visibility: ${(x) => (x.mustShowResults && x.whichWasClick === 0 ? `visible` : "")};
    }
  }

  & > :nth-child(2) {
    &::before {
      visibility: ${(x) => (x.mustShowResults && x.whichWasClick === 1 ? `visible` : "")};
    }
  }
  & > :nth-child(3) {
    &::before {
      visibility: ${(x) => (x.mustShowResults && x.whichWasClick === 2 ? `visible` : "")};
    }
  }
`
