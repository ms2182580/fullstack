import { useLoginCtx } from "../../context/LoginCtx"
import { useEffect, useState } from "react"
import { LoginComponent } from "./styles/NavBar"
import { BtnSmall } from "../ui/buttons/general/ButtonStyled"
import { Caption, P } from "../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles"
import { supabase } from "../../utils/supabaseClient"

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

  useEffect(() => {
    const getActualUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()
        console.log("data, error:", data, error)
        if (error) throw error
        if (data?.user) {
          setIsLogin(true)
          setShowSignup(false)

        }
      } catch (error) {
        console.log("error:", error)
      } 
    }
    getActualUser()

  }, [])

  const logoutHandler = async () => {
    try {
      const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      }
      logout()
      setIsLogin(false)
      setShowSignup(true)
    } catch (error) {
      console.log("error:", error)
    } 
  }

  return (
    <>
      {isLogin && (
        <LoginComponent>
          <BtnSmall>My account</BtnSmall>
          <Caption bold onClick={logoutHandler}>
            Log out
          </Caption>
        </LoginComponent>
      )}

      {showSignup && (
        <LoginComponent>
          <LinkNoStyle href="/signup">
            <BtnSmall>Sign up</BtnSmall>
          </LinkNoStyle>
          <LinkNoStyle href="/login">
            <P>Log in</P>
          </LinkNoStyle>
        </LoginComponent>
      )}
    </>
  )
}

export default SignComponent
