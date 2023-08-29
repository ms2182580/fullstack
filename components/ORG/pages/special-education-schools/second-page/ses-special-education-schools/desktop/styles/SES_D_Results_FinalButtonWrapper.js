import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../../../assets/Colors"

export const SES_D_Results_FinalButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  & > :nth-child(2) {
    display: flex;
    gap: 16px;
  }
  
  padding-bottom: 32px;
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

export const SES_D_Results_FinalButtonsPrevButton_W = styled(NavigationButton)`
  padding: 8px 24px;

  & > svg {
    margin-right: 16px;
  }
`

export const SES_D_Results_FinalButtonsNextButton_W = styled(NavigationButton)`
  padding: 8px 24px;

  & > p {
    margin-right: 16px;
  }
`

export const SES_D_Results_FinalButtonsNumberPage_W = styled.button`


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
