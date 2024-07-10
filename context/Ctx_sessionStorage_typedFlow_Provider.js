import { createContext, useContext, useState } from "react"

export const KEYS_VALUES_useSessionStorage = {
  SESSION_STORAGE_KEY: "INCLUSIVE_TypedFlow",
  SESSION_STORAGE_FIRST: "0",
  SESSION_STORAGE_SECOND: "1",
  SESSION_STORAGE_NULL: "null",
}

const SessionStorage_typedFlow = createContext(null)

export const Ctx_sessionStorage_typedFlow_Provider = ({ children }) => {
  /* 
  !FH
  The typed flow with modals at the beginning is not part of the actual design. Everything that has to do with that should be deleted
  */
  const [actualSessionStorage, setActualSessionStorage] = useState(
    KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST
  )

  const [reachWelcome, setReachWelcome] = useState(false)
  const [reachTypedFlow, setReachTypedFlow] = useState(false)

  const [diagnosisChoosed, setDiagnosisChoosed] = useState("")
  const [inputTypesByUser, setInputTypesByUser] = useState("")

  const [cancelWelcomePath, setCancelWelcomePath] = useState(false)

  return (
    <SessionStorage_typedFlow.Provider
      value={{
        actualSessionStorage,
        setActualSessionStorage,
        reachWelcome,
        setReachWelcome,
        reachTypedFlow,
        setReachTypedFlow,
        diagnosisChoosed,
        setDiagnosisChoosed,
        inputTypesByUser,
        setInputTypesByUser,
        cancelWelcomePath,
        setCancelWelcomePath,
      }}
    >
      {children}
    </SessionStorage_typedFlow.Provider>
  )
}

export const useSessionStorage_typedFlow = () => {
  return useContext(SessionStorage_typedFlow)
}
