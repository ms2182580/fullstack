import { createContext, useState, useEffect, useContext } from "react"

const ORG_KeywordsCtx = createContext(null)


export const ORG_KeywordsCtxProvider = ({children}) => {
  const [keywordsToSearch, setKeywordsToSearch] = useState("")

  return (
    <ORG_KeywordsCtx.Provider
      value={{ keywordsToSearch, setKeywordsToSearch }}
    >
      {children}
    </ORG_KeywordsCtx.Provider>
  )
}



export const useORG_KeywordsCtx = () => {
  return useContext(ORG_KeywordsCtx)
}

