import { Steps_Enum, useSignup_Ctx } from "@/context/Ctx_Signup"
import { FC, useMemo } from "react"
import { Signup_D_Layout_Home } from "./Signup_D_Layout_Home"
import { Signup_D_Layout_WhoAreYou } from "./Signup_D_Layout_WhoAreYou"

export const Signup_D_Layout3: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { step, setStep } = useSignup_Ctx()

  /* 
  !FH0
  Make this work
  */

  const WhichLayoutSignup = useMemo(() => {
    if (step === Steps_Enum["home"]) return Signup_D_Layout_Home
    if (step === Steps_Enum["who_are_you"]) return Signup_D_Layout_WhoAreYou

    return null
  }, [step])

  return (
    <>
      {WhichLayoutSignup !== null && (
        <WhichLayoutSignup>{children}</WhichLayoutSignup>
      )}
    </>
  )
}
