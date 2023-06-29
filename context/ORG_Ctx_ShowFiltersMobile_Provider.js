import { createContext, useState, useContext } from "react"

const ORG_Ctx_FiltersMobile = createContext(null)

export const ORG_CtxShowFiltersMobile_Provider = ({ children }) => {
const [mustShowFiltersMobile, setMustShowFiltersMobile] = useState(false)
  return (
    <ORG_Ctx_FiltersMobile.Provider
      value={{
        mustShowFiltersMobile,
        setMustShowFiltersMobile
      }}
    >
      {children}
    </ORG_Ctx_FiltersMobile.Provider>
  )
}

export const useORG_Ctx_ShowFiltersMobile = () => {
  return useContext(ORG_Ctx_FiltersMobile)
}
