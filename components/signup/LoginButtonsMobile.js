import { useEffect, useState } from "react"
import { EmailLoginBtn, FacebookLoginBtn, GoogleLoginBtn } from "../ui/buttons/login/LoginBtns"
import { delayMilliseconds } from "./delay"
import { LoginButtonsMobileWrapper } from "./styles/LoginButtonsMobileWrapper"

export const LoginButtonsMobile = ({ showLoginButtons, handleHiddeLoginButtons, fadeOut, theRef }) => {
  const [shouldInteract, setShouldInteract] = useState(false)

  const handleFadeOut = () => {
    handleHiddeLoginButtons(false)
  }

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
      ref={theRef}
      shouldInteract={shouldInteract}
      onMouseLeave={handleFadeOut}
      // onMouseEnter={(e) => console.log("Mouse enter this", e)}
      // onMouseLeave={() => theBlur(false)}
      // onBlur={theBlur(false)}
    >
      <div></div>
      <GoogleLoginBtn bolder={true} />
      <FacebookLoginBtn bolder={true} />
      <EmailLoginBtn bolder={true} />
    </LoginButtonsMobileWrapper>
  )
}
