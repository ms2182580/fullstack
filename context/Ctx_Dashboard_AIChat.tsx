import { ReactNode, createContext, useContext, useState } from "react"

interface DashboardAIChatContextProps {
  isPlan: boolean
  setIsPlan: React.Dispatch<React.SetStateAction<boolean>>
}
const Dashboard_AIChat_Ctx = createContext<DashboardAIChatContextProps | null>(
  null
)
interface DashboardCtxAICHATProviderProps {
  children: ReactNode
}

export const Dashboard_Ctx_AICHAT_Provider = ({
  children,
}: DashboardCtxAICHATProviderProps) => {
  const [isPlan, setIsPlan] = useState(false)

  return (
    <Dashboard_AIChat_Ctx.Provider value={{ isPlan, setIsPlan }}>
      {children}
    </Dashboard_AIChat_Ctx.Provider>
  )
}

export const useDashboardAIChat_Ctx = (): DashboardAIChatContextProps => {
  const context = useContext(Dashboard_AIChat_Ctx)
  if (!context) {
    throw new Error(
      "useDashboardAIChat_Ctx must be used within a Dashboard_Ctx_AICHAT_Provider"
    )
  }
  return context
}
