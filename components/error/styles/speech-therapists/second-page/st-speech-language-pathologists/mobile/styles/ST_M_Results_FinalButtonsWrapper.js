import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../assets/Colors"

export const ST_M_Results_FinalButtonsWrapper = styled.div`
  position: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `fixed` : `relative`)};
  visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `hidden` : `visible`)};

  justify-self: start;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  margin-bottom: 46px;

  & > :nth-child(2) {
    display: flex;
    gap: 16px;
  }

  &.canHover {
    & > :nth-child(1),
    & > :nth-child(2) > *,
    & > :nth-child(3) {
      &:hover {
        background-color: ${PRIMARY.PRIMARY_HOVER};
        & > p {
          color: ${NEUTRALS.OFF_WHITE};
        }
        & > svg path {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
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

`

export const ST_M_Results_FinalButtonsPrevButtonWrapper = styled(NavigationButton)`
  padding: 14px 17px;

  & > svg {
    margin-right: 0px;
  }
`

export const ST_M_Results_FinalButtonsNextButtonWrapper = styled(NavigationButton)`
  padding: 14px 17px;

  & > p {
    margin-right: 16px;
  }
`

export const ST_M_Results_FinalButtonsNumberPageWrapper = styled.button`
  height: 48px;
  width: 48px;
  cursor: pointer;
  background-color: ${(x) => (x.isActive ? `${PRIMARY.PRIMARY_CTA}` : "transparent")};
  border: 1px solid ${NEUTRALS.BLACK};
  border-radius: 8px;


  & > p {
    color: ${(x) => (x.isActive ? `${NEUTRALS.OFF_WHITE}` : `${NEUTRALS.BLACK}`)};
  }
`
