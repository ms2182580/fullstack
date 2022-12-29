import { BtnMedium } from "../ui/buttons/general/styles/ButtonStyled.js"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles.js"
import { FooterSignupLoginButtonsWrapper } from "./styles/FooterSignupLoginButtonsWrapper.js"

export const FooterSignupLoginButtons = () => {
  return (
    <FooterSignupLoginButtonsWrapper>
      <LinkNoStyle href="/signup">
        <BtnMedium secondary>Sign up</BtnMedium>
      </LinkNoStyle>

      <LinkNoStyle href="/login">
        <BtnMedium>Login</BtnMedium>
      </LinkNoStyle>
    </FooterSignupLoginButtonsWrapper>
  )
}
