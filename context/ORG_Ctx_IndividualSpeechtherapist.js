import { createContext, useContext, useState } from "react"

const ORG_Ctx_IndividualSP = createContext(null)

export const ORG_CtxIndividualSpeechtherapist_Provider = ({ children }) => {
  const [speechtherapist, setSpeechtherapist] = useState("")
  return (
    <ORG_Ctx_IndividualSP.Provider
      value={{
        speechtherapist,
        setSpeechtherapist
      }}>
      {children}
    </ORG_Ctx_IndividualSP.Provider>
  )
}

export const useORG_Ctx_IndividualSpeechtherapist = () => {
  return useContext(ORG_Ctx_IndividualSP)
}
