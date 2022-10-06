import { createContext, useState, useEffect, useContext } from "react"

const ORG_KeywordsCtx = createContext(null)

console.log("🍅 CTX outside function");

export const ORG_KeywordsCtxProvider = ({children}) => {
  console.log("🍅🍅 CTX inside function");
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

