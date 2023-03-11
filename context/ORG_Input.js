import { createContext, useContext, useState } from "react"

const ORG_InputCtx = createContext(null)

export const ORG_InputCtxProvider = ({ children }) => {
  const [keywordsContext, setKeywordsContext] = useState("")
  const [citiesContext, setCitiesContext] = useState("")
  const [ensuranceContext, setEnsuranceContext] = useState("")

  return (
    <ORG_InputCtx.Provider
      value={{
        keywordsContext,
        citiesContext,
        setKeywordsContext,
        setCitiesContext,
        ensuranceContext,
        setEnsuranceContext
      }}>
      {children}
    </ORG_InputCtx.Provider>
  )
}

export const useORG_InputCtx = () => {
  return useContext(ORG_InputCtx)
}
