import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const SpeechtherapistFinalButtonsWrapper = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: ${(x) => (x.isMobile ? `center` : `end`)};
  
  & > *:not(:last-child),
  & > :nth-child(2) > *:not(:last-child) {
    margin-right: 16px;
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

export const PrevButton = styled(NavigationButton)`
  
  padding:${(x) => x.isMobile ? `14px 17px` : `8px 24px`};
  
  & > svg {
    margin-right: ${(x) => x.isMobile ? `0px` : `16px`};
  }
`

export const NextButton = styled(NavigationButton)`
  padding:${(x) => x.isMobile ? `14px 17px` : `8px 24px`};

  & > p {
    margin-right: 16px;
  }
`

export const NumberPage = styled.button`
  height: 48px;
  width:48px;
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
