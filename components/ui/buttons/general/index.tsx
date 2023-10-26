import { BtnLarge, BtnMedium, BtnSmall } from "./styles/ButtonStyled"

export type Props = {
  children?: string
  secondary?: boolean
  disabled?: boolean
  preventFocus?: 0 | -1
  goToDynamic?: () => void
}

export const ButtonSmall = ({ children, secondary, disabled, preventFocus = 0, goToDynamic }: Props) => {
  return (
    <BtnSmall
      secondary={secondary}
      disabled={disabled}
      tabIndex={disabled ? -1 : preventFocus}
      onClick={goToDynamic}>
      <p>{children}</p>
    </BtnSmall>
  )
}
export const ButtonMedium = ({ children, secondary, disabled, preventFocus = 0, goToDynamic }: Props) => {
  return (
    <BtnMedium
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}
      onClick={goToDynamic}>
      <p>{children}</p>
    </BtnMedium>
  )
}
export const ButtonLarge = ({ children, secondary, disabled, preventFocus = 0, goToDynamic }: Props) => {
  return (
    <BtnLarge
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}
      onClick={goToDynamic}>
      <p>{children}</p>
    </BtnLarge>
  )
}
