import { useRouter } from "next/router"
import { XSvg } from "../../../assets/icons2"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { HeaderSignUpMobileWrapper } from "./styles/HeaderSignUpMobileWrapper"

export const HeaderSignUpMobile = (parameters) => {
  const router = useRouter()
  const handleMoveView = (e) => {
    if (e.key === "Enter") {
      router.push("/signup")
    }
  }

  return (
    <HeaderSignUpMobileWrapper>
      <LinkNoStyle href="/signup">
        <XSvg
          tabIndex={0}
          onKeyDown={handleMoveView}
        />
      </LinkNoStyle>
      <P semibold>Sign up with Email</P>
    </HeaderSignUpMobileWrapper>
  )
}
