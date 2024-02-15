import { ReactNode, createContext, useContext, useState } from "react"

type Step =
  | "signup"
  | "who_you_are"
  | "create_profile"
  | "create_profile1"
  | "create_profile2"
  | "tell_us_your_story"
  | "review_and_save"

interface Ctx_SignupContextProps {
  step: Step
  setStep: (step: Step) => void
}
const Signup_Ctx = createContext<Ctx_SignupContextProps | null>(null)
interface DashboardCtxAICHATProviderProps {
  children: ReactNode
}

export const Ctx_Signup_Provider = ({
  children,
}: DashboardCtxAICHATProviderProps) => {
  const [step, setStep] = useState<Step>("signup")

  return (
    <Signup_Ctx.Provider value={{ setStep, step }}>
      {children}
    </Signup_Ctx.Provider>
  )
}

export const useSignup_Ctx = (): Ctx_SignupContextProps => {
  const context = useContext(Signup_Ctx)
  if (!context) {
    throw new Error(
      "useDashboardAIChat_Ctx must be used within a Dashboard_Ctx_AICHAT_Provider"
    )
  }
  return context
}
