import { EmailLoginBtn, FacebookLoginBtn, GoogleLoginBtn } from "../ui/buttons/login/LoginBtns"
import { LoginButtonsMobileWrapper } from "./styles/LoginButtonsMobileWrapper"

export const LoginButtonsMobile = ({ showLoginButtons, fadeOut, theRef }) => {
  return (
    <LoginButtonsMobileWrapper
      showLoginButtons={showLoginButtons}
      className={showLoginButtons && fadeOut === false ? "fadeIn" : fadeOut ? "fadeOut" : ""}
      ref={theRef}>
      <div></div>
      <GoogleLoginBtn bolder={true} />
      <FacebookLoginBtn bolder={true} />
      <EmailLoginBtn bolder={true} />
    </LoginButtonsMobileWrapper>
  )
}
