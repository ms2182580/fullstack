import { createContext, useContext, useState } from "react"

const ORG_Ctx_STDataThirdpage_M = createContext(null)

export const ORG_CtxSTDataThirdpageMobile_Provider = ({ children }) => {
  const [STDataThirdpage_M, setSTDataThirdpage_M] = useState("")

  return (
    <ORG_Ctx_STDataThirdpage_M.Provider
      value={{
        STDataThirdpage_M,
        setSTDataThirdpage_M
      }}>
      {children}
    </ORG_Ctx_STDataThirdpage_M.Provider>
  )
}

export const useORG_Ctx_STDataThirdpage_M = () => {
  return useContext(ORG_Ctx_STDataThirdpage_M)
}
