import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { SignupLayout } from "../signup/desktop/Layout"
import { ButtonSmall } from "../ui/buttons/general"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { Input, Label, LoginWrapper } from "./styles/LoginWrapper"
import { Signup_N_FacebookSvg, Signup_N_GoogleSvg } from "@/assets/icons"
import Link from "next/link"

export const Login = () => {
  const { setStep, step } = useSignup_Ctx()
  return (
    <LoginWrapper>
      <div>
        <H3>Sign In</H3>
        <form>
          <Label>
            Email
            <Input placeholder="Ex John" />
          </Label>
          <Label>
            Password
            <Input placeholder="*****" />
          </Label>

          <ButtonSmall goToDynamic={() => setStep("who_you_are")}>
            Create an account
          </ButtonSmall>
        </form>
        <div>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
          <div>
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
        </div>
        <ButtonSmall secondary>
          <Signup_N_GoogleSvg className="icons" />{" "}
          <span>Continue with Google</span>
        </ButtonSmall>
        <ButtonSmall secondary>
          <Signup_N_FacebookSvg className="icons" />
          <span>Continue with Facebook</span>
        </ButtonSmall>
      </div>
    </LoginWrapper>
  )
}
