import { BtnSmall, BtnMedium, BtnLarge } from "./styles/ButtonStyled.js"

export const ButtonSmall = ({ children, secondary, disabled, preventFocus = 0, goToDynamic }) => {
  return (
    <BtnSmall
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}
      onClick={goToDynamic}
      >
      
      <p>{children}</p>
    </BtnSmall>
  )
}
export const ButtonMedium = ({ children, secondary, disabled, preventFocus = 0, goToDynamic }) => {
  return (
    <BtnMedium
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}
      onClick={goToDynamic}
      >
      <p>{children}</p>
    </BtnMedium>
  )
}
export const ButtonLarge = ({ children, secondary, disabled, preventFocus = 0, goToDynamic }) => {
  return (
    <BtnLarge
      secondary={secondary}
      disabled={disabled}
      tabIndex={preventFocus}
      onClick={goToDynamic}
      >
      <p>{children}</p>
    </BtnLarge>
  )
}
