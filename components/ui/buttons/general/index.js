import { BtnSmall, BtnMedium, BtnLarge } from "./ButtonStyled.js"

export const ButtonSmall = ({ children, secondary, disabled }) => {
  return (
    <BtnSmall secondary={secondary} disabled={disabled}>
      <p>{children}</p>
    </BtnSmall>
  )
}
export const ButtonMedium = ({ children, secondary, disabled }) => {
  return (
    <BtnMedium secondary={secondary} disabled={disabled}>
      <p>{children}</p>
    </BtnMedium>
  )
}
export const ButtonLarge = ({ children, secondary, disabled }) => {
  console.log('disabled:', disabled)
  return (
    <BtnLarge secondary={secondary} disabled={disabled}>
      <p>{children}</p>
    </BtnLarge>
  )
}
