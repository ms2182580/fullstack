import { useEffect, useRef, useState } from "react"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { EmailLoginBtn, FacebookLoginBtn, GoogleLoginBtn } from "../../ui/buttons/login/LoginBtns"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { delayMilliseconds } from "../delay"
import { LoginButtonsMobileWrapper } from "../styles/LoginButtonsMobileWrapper"

export const LoginButtonsMobile = ({ showLoginButtons, handleHideLoginButtons, fadeOut }) => {
  const [shouldInteract, setShouldInteract] = useState(false)
  
  const thisRef = useRef(null)
  useOutsideHide(thisRef, handleHideLoginButtons, delayMilliseconds)
  
  
  useEffect(() => {
    if (showLoginButtons) {
      setTimeout(() => {
        setShouldInteract(true)
      }, `${delayMilliseconds}`)
    }

    if (!showLoginButtons) {
      setShouldInteract(false)
    }
  }, [showLoginButtons])

  return (
    <LoginButtonsMobileWrapper
      showLoginButtons={showLoginButtons}
      className={showLoginButtons && fadeOut === false ? "fadeIn" : fadeOut ? "fadeOut" : ""}
      ref={thisRef}
      shouldInteract={shouldInteract}
    >
      <div></div>
      <GoogleLoginBtn bolder={true} />
      <FacebookLoginBtn bolder={true} />
      <LinkNoStyle href="/signup/SignupForm">
        <EmailLoginBtn bolder={true} />
      </LinkNoStyle>

    </LoginButtonsMobileWrapper>
  )
}


