import styled from "styled-components"
import { FontsWeights } from "../../../../../assets/Fonts/Weights"
import { COLORS } from "../../variables"

const SharedVariables = {
  BorderRadius: "8px"
}

const BtnDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${SharedVariables.BorderRadius};
  white-space: nowrap;
  
  background-color: ${(x) =>
    x.secondary ? "transparent" : COLORS.Primary.BgColor};

  color: ${(x) =>
    x.secondary ? COLORS.Secondary.TextColor : COLORS.Primary.TextColor};

  border: ${(x) =>
    x.secondary ? `2px ${COLORS.HoverBgColor} solid` : "none"};

  font-weight: ${FontsWeights.SEMIBOLD_600};
  cursor: pointer;

  &:focus-visible {
    outline: 4px solid ${COLORS.FocusOutline};
  }

  &:hover {
    background-color: ${COLORS.HoverBgColor};
    color: ${COLORS.Primary.TextColor};
  }

  &:active {
    outline: 4px solid ${COLORS.PressedOutline};
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    color: ${COLORS.Disabled.TextColor};
    background-color: ${COLORS.Disabled.BgColor};
    outline: 4px solid transparent;
  }
`

export const BtnSmall = styled(BtnDefault)`
  height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-inline:32px;
  font-size: 16px;
  
  
  
`
export const BtnMedium = styled(BtnDefault)`
  font-size: 20px;
  height: 56px;
  padding: 16px 64px;
`
export const BtnLarge = styled(BtnDefault)`
  font-size: 24px;
  height: 64px;
  padding: 20px 80px;
`
