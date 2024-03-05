import { Signup_FinishSvg } from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { FinishLayout } from "./styles/FinishLayout"

export const Finish = () => {
  return (
    <FinishLayout>
      <Signup_FinishSvg />
      <H3>Your security is important</H3>
      <P>
        We sent an email to <strong>jd**24@gmail.com</strong> with a
        verification link to validate <br /> your account. The link will expire
        in 15 minutes.
      </P>
      <span>
        <P>Resend verification email to jd**24@gmail.com?</P>
        <span>Resend</span>
      </span>
    </FinishLayout>
  )
}
