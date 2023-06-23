import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../assets/Colors"

export const ST_D_Results_FinalButtonsWrapper = styled.div`
  justify-self: start;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: ${(x) => (x.isMobile ? `center` : `end`)};
  box-shadow: ${(x) =>
    x.isMobile ? `0px -2px 9px rgba(0, 0, 0, 0.2), inset 0px -4px 6px rgba(0, 0, 0, 0.15);` : `none`};

  margin-bottom: 46px;

  & > :nth-child(2) {
    display: flex;
    gap: 16px;
  }
`

const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${NEUTRALS.BLACK};
  cursor: pointer;

  &:hover {
    background-color: ${PRIMARY.PRIMARY_HOVER};
    & > p {
      color: ${NEUTRALS.OFF_WHITE};
    }
    & > svg path {
      fill: ${NEUTRALS.OFF_WHITE};
    }
  }
`

export const ST_D_Results_FinalButtonsPrevButton = styled(NavigationButton)`
  padding: ${(x) => (x.isMobile ? `14px 17px` : `8px 24px`)};

  & > svg {
    margin-right: ${(x) => (x.isMobile ? `0px` : `16px`)};
  }
`

export const ST_D_Results_FinalButtonsNextButton = styled(NavigationButton)`
  padding: ${(x) => (x.isMobile ? `14px 17px` : `8px 24px`)};

  & > p {
    margin-right: 16px;
  }
`

export const ST_D_Results_FinalButtonsNumberPage = styled.button`
  height: 48px;
  width: 48px;
  cursor: pointer;
  background-color: ${(x) => (x.isActive ? `${PRIMARY.PRIMARY_CTA}` : "transparent")};
  border: 1px solid ${NEUTRALS.BLACK};
  border-radius: 8px;

  &:hover,
  &:hover > p {
    background-color: ${(x) => (x.isActive ? "" : `${PRIMARY.PRIMARY_HOVER}`)};
    color: ${NEUTRALS.OFF_WHITE};
  }

  & > p {
    color: ${(x) => (x.isActive ? `${NEUTRALS.OFF_WHITE}` : `${NEUTRALS.BLACK}`)};
  }
`
