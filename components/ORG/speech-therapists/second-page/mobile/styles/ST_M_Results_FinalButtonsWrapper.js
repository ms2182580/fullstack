import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ST_M_Results_FinalButtonsWrapper = styled.div`
  /* border: 2px solid crimson; */
  position: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `fixed` : `relative`)};
  visibility: ${({ mustShowFiltersMobile }) => (mustShowFiltersMobile ? `hidden` : `visible`)};

  justify-self: start;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px -2px 9px rgba(0, 0, 0, 0.2), inset 0px -4px 6px rgba(0, 0, 0, 0.15); */

  margin-bottom: 46px;

  & > :nth-child(2) {
    display: flex;
    gap: 16px;
  }

  &.canHover {
    & > :nth-child(1),
    & > :nth-child(2) > *,
    & > :nth-child(3) {
      /* border: 2px solid crimson; */
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
    
    & > :nth-child(2) > *{
      /* border: 2px solid crimson; */
      
    }
    

    /* &:hover {
      background-color: ${PRIMARY.PRIMARY_HOVER};
      & > p {
        color: ${NEUTRALS.OFF_WHITE};
      }
      & > svg path {
        fill: ${NEUTRALS.OFF_WHITE};
      }
    } */
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

  /* .canHover {
    &:hover {
      background-color: ${PRIMARY.PRIMARY_HOVER};
      & > p {
        color: ${NEUTRALS.OFF_WHITE};
      }
      & > svg path {
        fill: ${NEUTRALS.OFF_WHITE};
      }
    }
  } */

  /* &:hover {
    background-color: ${PRIMARY.PRIMARY_HOVER};
    & > p {
      color: ${NEUTRALS.OFF_WHITE};
    }
    & > svg path {
      fill: ${NEUTRALS.OFF_WHITE};
    }
  } */
`

export const ST_M_Results_FinalButtonsPrevButtonWrapper = styled(NavigationButton)`
  /* padding: ${(x) => (x.isMobile ? `14px 17px` : `8px 24px`)}; */
  padding: 14px 17px;

  & > svg {
    /* margin-right: ${(x) => (x.isMobile ? `0px` : `16px`)}; */
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

  /* .canHover{
    border: 2px solid crimson;
    
    
    &:hover {
    background-color: ${PRIMARY.PRIMARY_HOVER};
    & > p {
      color: ${NEUTRALS.OFF_WHITE};
    }
    & > svg path {
      fill: ${NEUTRALS.OFF_WHITE};
    }
  }
  } */
  /* { */
  /* &:hover {
      background-color: ${PRIMARY.PRIMARY_HOVER};
      & > p {
        color: ${NEUTRALS.OFF_WHITE};
      }
      & > svg path {
        fill: ${NEUTRALS.OFF_WHITE};
      }
    } */
  /* } */

  /* &:hover,
  &:hover > p {
    background-color: ${(x) => (x.isActive ? "" : `${PRIMARY.PRIMARY_HOVER}`)};
    color: ${NEUTRALS.OFF_WHITE};
  } */

  & > p {
    color: ${(x) => (x.isActive ? `${NEUTRALS.OFF_WHITE}` : `${NEUTRALS.BLACK}`)};
  }
`
