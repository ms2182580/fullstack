import { createContext, useState, useEffect, useContext } from "react"

const LoginCtx = createContext(null)

export const LoginCtxProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [whoIsLogin, setWhoIsLogin] = useState("")

  useEffect(() => {
  }, [])

  return (
    <LoginCtx.Provider
      value={{ isLogin, setIsLogin, whoIsLogin, setWhoIsLogin }}
    >
      {children}
    </LoginCtx.Provider>
  )
}



export const useLoginCtx = () => {
  return useContext(LoginCtx)
}