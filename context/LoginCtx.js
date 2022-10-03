import { createContext, useState, useEffect, useContext } from "react"

const LoginCtx = createContext(null)

export const LoginCtxProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [whoIsLogin, setWhoIsLogin] = useState("")

  useEffect(() => {
    /* ❗ Change this code in this navbar to the loginCtx, with that movement we could use state of the navbar in the navbar and the signup */
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue // skip keys like "setItem", "getItem" etc
      }

      var pattern =
        /^INCLUSIVE_ACCOUNT_[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
      let matchRegex = key.match(pattern)

      if (matchRegex) {
        // console.log('matchRegex:', matchRegex)
        // console.log("matchRegex:", localStorage.getItem(matchRegex))

        let patterIsLogin = /^{"isLogin":true/gi
        let isTest = patterIsLogin.test(localStorage.getItem(matchRegex))
        if (isTest) {
          setIsLogin(true)
          setWhoIsLogin(matchRegex)
          console.log("Render no more in this useEffect")
          break
        }

        /* The code below allow make false the isLogin */
        // let isMatch = localStorage.getItem(matchRegex).match(patterIsLogin)
        // console.log('isMatch:', isMatch)

        // if(isMatch !== null){
        //   console.log('isMatch:', isMatch)
        //   console.log('matchRegex:', matchRegex)
        //   let toJson = JSON.parse(localStorage.getItem(matchRegex))
        //   console.log('toJson:', toJson)
        //   toJson.isLogin = false
        //   localStorage.setItem(matchRegex, JSON.stringify(toJson))
        // }

        // let toJson = JSON.parse(localStorage.getItem(matchRegex))
        // console.log('toJson:', toJson)
        // toJson.isLogin = false

        // localStorage.setItem(matchRegex, JSON.stringify(toJson))

        // console.log('toJson:', toJson)
      }
    }
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