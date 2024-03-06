import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { passwordStrength_Keys } from "./INDEX_D_Signup_Home"

export const Signup_Home_TooltipText = () => {
  return (
    <>
      <P>A strong password must:</P>
      <ul>
        <li>Be at least 12 characters long and no longer than 64 characters</li>
        <li>Contain at least one uppercase letter</li>
        <li>Contain at least one lowercase letter</li>
        <li>Contain at least one number</li>
        <li>
          Contain at least one special character (
          {passwordStrength_Keys.specialCharacters})
        </li>
      </ul>
    </>
  )
}
