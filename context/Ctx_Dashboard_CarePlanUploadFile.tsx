import { ReactNode, createContext, useContext, useState } from "react"

interface DashboardAIChatUploadFileContextProps {
  isUpload: boolean
  setIsUpload: React.Dispatch<React.SetStateAction<boolean>>
  file: File | null
  setFile: React.Dispatch<React.SetStateAction<File | null>>
}
const Dashboard_AIChat_UploadFile_Ctx =
  createContext<DashboardAIChatUploadFileContextProps | null>(null)
interface DashboardCtxAICHATProviderProps {
  children: ReactNode
}

export const Dashboard_Ctx_AICHAT_UploadFile_Provider = ({
  children,
}: DashboardCtxAICHATProviderProps) => {
  const [isUpload, setIsUpload] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  return (
    <Dashboard_AIChat_UploadFile_Ctx.Provider
      value={{ isUpload, setIsUpload, file, setFile }}
    >
      {children}
    </Dashboard_AIChat_UploadFile_Ctx.Provider>
  )
}

export const useDashboardAIChatUploadFile_Ctx =
  (): DashboardAIChatUploadFileContextProps => {
    const context = useContext(Dashboard_AIChat_UploadFile_Ctx)
    if (!context) {
      throw new Error(
        "useDashboardAIChat_Ctx must be used within a Dashboard_Ctx_AICHAT_Provider"
      )
    }
    return context
  }
