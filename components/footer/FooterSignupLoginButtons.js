import { BtnMedium } from "../ui/buttons/general/styles/ButtonStyled.js"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles.js"
import { FooterSignupLoginButtonsWrapper } from "./styles/FooterSignupLoginButtonsWrapper.js"

export const FooterSignupLoginButtons = ({shouldTab}) => {
  return (
    <FooterSignupLoginButtonsWrapper>
      <LinkNoStyle href="/signup" tabIndex={shouldTab}>
        <BtnMedium secondary tabIndex={shouldTab}>Sign up</BtnMedium>
      </LinkNoStyle>

      <LinkNoStyle href="/login" tabIndex={shouldTab}>
        <BtnMedium tabIndex={shouldTab}>Login</BtnMedium>
      </LinkNoStyle>
    </FooterSignupLoginButtonsWrapper>
  )
}
