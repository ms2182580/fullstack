import { Signup_N_FacebookSvg, Signup_N_GoogleSvg } from "@/assets/icons"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { IndexWrapper, Input, Label } from "./styles/index-wrapper"

type Props = {
  customSigninRoute?: string
}

export const INDEX_Signin = ({
  customSigninRoute = ALL_ROUTES.DASHBOARD,
}: Props) => {
  return (
    <IndexWrapper>
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

        <Link href={`/${customSigninRoute}`}>Sign in</Link>
      </form>
      <div>
        <div>
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
      </div>
      <button>
        <Signup_N_GoogleSvg className="icons" /> <p>Continue with Google</p>
      </button>
      <button>
        <Signup_N_FacebookSvg className="icons" />
        <p>Continue with Facebook</p>
      </button>
    </IndexWrapper>
  )
}
