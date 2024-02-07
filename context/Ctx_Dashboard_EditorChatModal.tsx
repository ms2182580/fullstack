import { ReactNode, createContext, useContext, useState } from "react"

interface DashboardEditorAIChatContextProps {
  isChat: boolean
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>
  isExpand: boolean
  setIsExpand: React.Dispatch<React.SetStateAction<boolean>>
  isHistory: boolean
  setIsHistory: React.Dispatch<React.SetStateAction<boolean>>
}
const Dashboard_AIChat_Ctx =
  createContext<DashboardEditorAIChatContextProps | null>(null)
interface DashboardCtxAICHATProviderProps {
  children: ReactNode
}

export const Dashboard_Ctx_Editor_AICHAT_Provider = ({
  children,
}: DashboardCtxAICHATProviderProps) => {
  const [isChat, setIsChat] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const [isHistory, setIsHistory] = useState(false)

  return (
    <Dashboard_AIChat_Ctx.Provider
      value={{
        isChat,
        setIsChat,
        isExpand,
        setIsExpand,
        isHistory,
        setIsHistory,
      }}
    >
      {children}
    </Dashboard_AIChat_Ctx.Provider>
  )
}

export const useDashboardEditorAIChat_Ctx =
  (): DashboardEditorAIChatContextProps => {
    const context = useContext(Dashboard_AIChat_Ctx)
    if (!context) {
      throw new Error(
        "useDashboardAIChat_Ctx must be used within a Dashboard_Ctx_AICHAT_Provider"
      )
    }
    return context
  }
