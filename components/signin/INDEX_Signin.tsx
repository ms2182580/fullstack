import { Signup_N_FacebookSvg, Signup_N_GoogleSvg } from "@/assets/icons"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { ButtonSmall } from "../ui/buttons/general"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { Input, Label, LoginWrapper } from "./styles/LoginWrapper"

export const INDEX_Signin = () => {
  return (
    <LoginWrapper>
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

        <Link href={`/${ALL_ROUTES.DASHBOARD}`}>Sign in</Link>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <Link href={`${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`}>
            Login
          </Link>
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
    </LoginWrapper>
  )
}
