import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { Signup_FinishSvg } from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Signup_D_Steps_FinishWrapper } from "./styles/Signup_D_Steps_FinishWrapper"

export const Signup_D_Steps_Finish = () => {
  return (
    <Signup_D_Steps_FinishWrapper
      data-testid={KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_FINISH}
    >
      <Signup_FinishSvg />
      <H3>Your security is important</H3>
      <P>
        We sent an email to <strong>jd**24@gmail.com</strong> with a
        verification link to validate <br /> your account. The link will expire
        in 15 minutes.
      </P>
      <P>
        Resend verification email to jd**24@gmail.com? <a href="#">Resend</a>
      </P>
    </Signup_D_Steps_FinishWrapper>
  )
}
