import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const SpeechtherapistFinalButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  & > *:not(:last-child),
  & > :nth-child(2) > *:not(:last-child) {
    margin-right: 16px;
  }
`

const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  background-color: transparent;
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
  & > svg {
    margin-right: 16px;
  }
`

export const NextButton = styled(NavigationButton)`
  & > p {
    margin-right: 16px;
  }
`

export const NumberPage = styled.button`
  padding: 8px 20.5px;
  height: 48px;
  cursor: pointer;
  background-color: ${(x) =>
    x.isActive ? `${PRIMARY.PRIMARY_CTA}` : "transparent"};
  border: 1px solid ${NEUTRALS.BLACK};
  border-radius: 8px;

  &:hover,
  &:hover > p {
    background-color: ${(x) => (x.isActive ? "" : `${PRIMARY.PRIMARY_HOVER}`)};
    color: ${NEUTRALS.OFF_WHITE};
  }

  & > p {
    color: ${(x) =>
      x.isActive ? `${NEUTRALS.OFF_WHITE}` : `${NEUTRALS.BLACK}`};
  }
`
