import { ReactNode, createContext, useContext, useState } from "react"

export const enum Steps_Enum {
  "home" = "home",
  "who_are_you" = "who_are_you",
  "create_profile" = "create_profile",
  "create_profile1" = "create_profile1",
  "create_profile2" = "create_profile2",
  "tell_us_your_story" = "tell_us_your_story",
  "review_and_save" = "review_and_save",
  "finish" = "finish",
  "recentLogin" = "recentLogin",
  "login" = "login",
}

interface Ctx_SignupContextProps {
  step: keyof typeof Steps_Enum
  setStep: (step: keyof typeof Steps_Enum) => void
}
const Signup_Ctx = createContext<Ctx_SignupContextProps | null>(null)
interface DashboardCtxAICHATProviderProps {
  children: ReactNode
}

export const Ctx_Signup_Provider = ({
  children,
}: DashboardCtxAICHATProviderProps) => {
  const [step, setStep] = useState<keyof typeof Steps_Enum>("home")

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
