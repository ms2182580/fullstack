import { createContext, useContext, useState } from "react"

const ORG_Ctx_STDataThirdpage_D = createContext(null)

export const ORG_CtxSTDataThirdpageDesktop_Provider = ({ children }) => {
  const [STDataThirdpage_D, setSTDataThirdpage_D] = useState("")

  return (
    <ORG_Ctx_STDataThirdpage_D.Provider
      value={{
        STDataThirdpage_D,
        setSTDataThirdpage_D
      }}>
      {children}
    </ORG_Ctx_STDataThirdpage_D.Provider>
  )
}

export const useORG_Ctx_STDataThirdpage_D = () => {
  return useContext(ORG_Ctx_STDataThirdpage_D)
}
