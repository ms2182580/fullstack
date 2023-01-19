import { BtnSmall, BtnMedium, BtnLarge } from "./styles/ButtonStyled.js"

export const ButtonSmall = ({ children, secondary, disabled, preventFocus = 0 }) => {
  return (
    <BtnSmall
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}>
      <p>{children}</p>
    </BtnSmall>
  )
}
export const ButtonMedium = ({ children, secondary, disabled, preventFocus = 0 }) => {
  return (
    <BtnMedium
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}>
      <p>{children}</p>
    </BtnMedium>
  )
}
export const ButtonLarge = ({ children, secondary, disabled, preventFocus = 0 }) => {
  return (
    <BtnLarge
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}>
      <p>{children}</p>
    </BtnLarge>
  )
}
