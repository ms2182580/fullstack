import styled from "styled-components"
import { FontsWeights } from "../../../../assets/Fonts/Weights"
import { COLORS } from "../variables"

const SharedVariables = {
  BorderRadius: "8px"
}

const BtnDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${SharedVariables.BorderRadius};
  background-color: ${(x) =>
    x.secondary ? COLORS.Secondary.BgColor : COLORS.Primary.BgColor};

  color: ${(x) =>
    x.secondary ? COLORS.Secondary.TextColor : COLORS.Primary.TextColor};

  border: ${(x) => (x.secondary ? `2px ${COLORS.Secondary.TextColor} solid`  : "none")};

  font-weight: ${FontsWeights.SEMIBOLD_600};
  cursor: pointer;

  &:focus-visible {
    outline: 4px solid ${COLORS.FocusOutline};
  }

  &:hover {
    background-color: ${COLORS.HoverBgColor};
    p {
      color: ${COLORS.Primary.TextColor};
    }
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
  font-size: 16px;
  height: 48px;
  padding: 8px 48px;
`
export const BtnMedium = styled(BtnDefault)`
  /* width: 198px; */
  font-size: 20px;
  height: 56px;
  padding: 16px 64px;
`
export const BtnLarge = styled(BtnDefault)`
  /* width: 243px; */
  font-size: 24px;
  height: 64px;
  padding: 16px 80px;
`
