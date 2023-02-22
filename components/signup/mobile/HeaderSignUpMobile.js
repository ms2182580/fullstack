import { XSvg } from "../../../assets/Icons"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { HeaderSignUpMobileWrapper } from "./styles/HeaderSignUpMobileWrapper"

export const HeaderSignUpMobile = (parameters) => {
  return (
    <HeaderSignUpMobileWrapper>
        <LinkNoStyle href="/signup">
          <XSvg />
        </LinkNoStyle>
      <P semibold>Sign up with Email</P>
    </HeaderSignUpMobileWrapper>
  )
}
