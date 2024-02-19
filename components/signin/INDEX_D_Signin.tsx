import Image from "next/image"
import { SignupLayout } from "../signup/desktop/Layout"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { INDEX_D_SignupWrapper } from "./styles/INDEX_D_SignupWrapper"
import { Sigin_RecentLoginScreen } from "@/assets/icons"
import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { Recent_Login } from "./Recent_Login"
import { Login } from "./Login"

export const INDEX_D_Signin = () => {
  const { setStep, step } = useSignup_Ctx()
  return (
    <SignupLayout>
      <INDEX_D_SignupWrapper>
        {step === "login" ? <Login /> : <Recent_Login />}
      </INDEX_D_SignupWrapper>
    </SignupLayout>
  )
}
