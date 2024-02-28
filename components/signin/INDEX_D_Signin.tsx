import { useSignup_Ctx } from "@/context/Ctx_Signup"
import { Signup_D_Layout } from "../signup/desktop/Signup_D_Layout"
import { Login } from "./Login"
import { Recent_Login } from "./Recent_Login"
import { INDEX_D_SignupWrapper } from "./styles/INDEX_D_SignupWrapper"

export const INDEX_D_Signin = () => {
  const { setStep, step } = useSignup_Ctx()
  return (
    <Signup_D_Layout>
      <INDEX_D_SignupWrapper>
        {step === "login" ? <Login /> : <Recent_Login />}
      </INDEX_D_SignupWrapper>
    </Signup_D_Layout>
  )
}
