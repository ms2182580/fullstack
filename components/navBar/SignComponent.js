import { useEffect, useState } from "react"
import { useLoginCtx } from "../../context/LoginCtx"
import { BtnSmall } from "../ui/buttons/general/styles/ButtonStyled"
import { Caption, P } from "../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles"
import { LoginComponent } from "./desktop/styles/NavBar_D_Wrapped"
// import { supabase } from "../../utils/supabaseClient"

// const getLocalStorage = !window ? window.localStorage.getItem("INCLUSIVE_ACCOUNT") : ""
// console.log('getLocalStorage:', getLocalStorage)
// const clientSide =
//   typeof window !== "undefined"
//     ? window.localStorage.getItem("INCLUSIVE_ACCOUNT") === "true"
//     : ""
// console.log("clientSide:", clientSide)
// console.log('typeof window:', typeof window)

const SignComponent = () => {
  const { isLogin, setIsLogin, whoIsLogin } = useLoginCtx()
  const [showSignup, setShowSignup] = useState(true)
  // console.log("showSignup:", showSignup)
  // console.log("isLogin:", isLogin)

  // useEffect(() => {
  //   const getActualUser = async () => {
  //     try {
  //       const { data, error } = await supabase.auth.getUser()
  //       // console.log("data, error:", data, error)
  //       if (error) throw error
  //       if (data?.user) {
  //         // console.log("Enter here")
  //         setIsLogin(true)
  //       }
  //     } catch (error) {
  //       console.log("error:", error)
  //     }
  //   }
  //   getActualUser()
  // }, [])

  useEffect(() => {
    if (isLogin) {
      setShowSignup(false)
    }
  }, [isLogin])

  // const logoutHandler = async () => {
  //   try {
  //     const logout = async () => {
  //       const { error } = await supabase.auth.signOut()
  //       if (error) throw error
  //     }
  //     logout()
  //     setIsLogin(false)
  //     setShowSignup(true)
  //   } catch (error) {
  //     console.log("error:", error)
  //   }
  // }

  return (
    <>
      {isLogin && (
        <LoginComponent>
          <BtnSmall>My account</BtnSmall>
          <Caption bold onClick={logoutHandler} tabIndex={0}>
            Log out
          </Caption>
        </LoginComponent>
      )}

      {showSignup && (
        <LoginComponent>
          <LinkNoStyle href="/login" tabIndex={0}>
            <P tabIndex={0}>Log in</P>
          </LinkNoStyle>

          <LinkNoStyle href="/signup">
            <BtnSmall>Sign up</BtnSmall>
          </LinkNoStyle>
        </LoginComponent>
      )}
    </>
  )
}

export default SignComponent
