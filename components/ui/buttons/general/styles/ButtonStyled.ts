import { NEUTRALS } from "@/assets/Colors"
import { FontsWeights } from "@/assets/fonts/Weights"
import styled, { css } from "styled-components"
import { COLORS } from "../../variables"

const SharedVariables = {
  BorderRadius: "8px",
}

type Props = {
  secondary?: boolean
  disabled?: boolean
  width?: string
}

type Props_Reusable = {
  secondary?: boolean
  disabled?: boolean
  isSmall?: boolean
  isMedium?: boolean
  isLarge?: boolean
}

export const reusableButton = ({
  secondary = false,
  disabled = false,
  isSmall = true /* By default, every button is a Small Button */,
  isMedium = false,
  isLarge = false,
}: Props_Reusable) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${SharedVariables.BorderRadius};
  white-space: nowrap;

  background-color: ${() =>
    secondary ? NEUTRALS.OFF_WHITE : COLORS.Primary.BgColor};

  text-decoration: none;

  color: ${() =>
    secondary ? COLORS.Secondary.TextColor : COLORS.Primary.TextColor};

  border: ${() =>
    secondary
      ? `2px ${COLORS.Primary.BgColor} solid`
      : "2px solid transparent"};

  font-weight: ${FontsWeights.SEMIBOLD_600};

  transition: all 0.1s ease-in-out;

  ${() =>
    isSmall
      ? css`
          height: 48px;
          padding-top: 12px;
          padding-bottom: 12px;
          padding-inline: 32px;
          font-size: 16px;
        `
      : isMedium
      ? css`
          font-size: 20px;
          height: 56px;
          padding: 16px 64px;
        `
      : isLarge &&
        css`
          font-size: 24px;
          height: 64px;
          padding: 20px 80px;
        `};

  ${() =>
    secondary
      ? css`
          &:focus-visible {
            border: 2px solid ${COLORS.HoverBgColor};
            background-color: ${COLORS.HoverBgColor};

            color: ${COLORS.Primary.TextColor};
          }

          &:hover {
            border: 2px solid ${COLORS.HoverBgColor};

            background-color: ${COLORS.HoverBgColor};

            color: ${COLORS.Primary.TextColor};
          }
        `
      : css`
          &:focus-visible {
            background-color: ${COLORS.HoverBgColor};
            color: ${COLORS.Primary.TextColor};
          }

          &:hover {
            background-color: ${COLORS.HoverBgColor};
            color: ${COLORS.Primary.TextColor};
          }
        `}

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

  ${() =>
    disabled &&
    css`
      border: 2px solid transparent;
    `}
`

export const BtnDefault = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${SharedVariables.BorderRadius};
  white-space: nowrap;

  background-color: ${(x) =>
    x.secondary ? NEUTRALS.OFF_WHITE : COLORS.Primary.BgColor};

  color: ${(x) =>
    x.secondary ? COLORS.Secondary.TextColor : COLORS.Primary.TextColor};

  border: ${(x) =>
    x.secondary
      ? `2px ${COLORS.Primary.BgColor} solid`
      : "2px solid transparent"};

  font-weight: ${FontsWeights.SEMIBOLD_600};

  &:focus-visible {
    outline: 4px solid ${COLORS.FocusOutline};

    background-color: ${COLORS.HoverBgColor};
    color: ${COLORS.Primary.TextColor};
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

export const BtnSmall = styled(BtnDefault)<Props>`
  height: 48px;
  width: ${(x) => x.width};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-inline: 32px;
  font-size: 16px;
  border: ${({ disabled }) => (disabled ? `2px solid transparent` : ``)};
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
