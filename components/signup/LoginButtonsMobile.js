import { useEffect, useState } from "react"
import { EmailLoginBtn, FacebookLoginBtn, GoogleLoginBtn } from "../ui/buttons/login/LoginBtns"
import { LoginButtonsMobileWrapper } from "./styles/LoginButtonsMobileWrapper"

export const LoginButtonsMobile = ({ showLoginButtons, fadeOut, theRef }) => {
  const [shouldInteract, setShouldInteract] = useState(false)
  useEffect(() => {
    if (showLoginButtons) {
      setTimeout(() => {
        setShouldInteract(true)
      }, 400)
    } else {
      setShouldInteract(false)
    }
  }, [showLoginButtons])

  return (
    <LoginButtonsMobileWrapper
      showLoginButtons={showLoginButtons}
      className={showLoginButtons && fadeOut === false ? "fadeIn" : fadeOut ? "fadeOut" : ""}
      ref={theRef}
      shouldInteract={shouldInteract}>
      <div></div>
      <GoogleLoginBtn bolder={true} />
      <FacebookLoginBtn bolder={true} />
      <EmailLoginBtn bolder={true} />
    </LoginButtonsMobileWrapper>
  )
}
