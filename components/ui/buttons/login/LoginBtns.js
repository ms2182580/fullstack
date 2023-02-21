import Image from "next/image"
import EmailIcon from "../../../../assets/Icons/EmailIcon.png"
import FacebookIcon from "../../../../assets/Icons/FacebookIcon.jpg"
import GoogleIcon from "../../../../assets/Icons/GoogleIcon.png"
import { LoginBtnsStyled } from "./styles/LoginBtnsStyled.js"

export const FacebookLoginBtn = ({ bolder }) => {
  return (
    <LoginBtnsStyled
      facebook
      bolder={bolder}>
      <Image
        src={FacebookIcon.src}
        alt="Facebook logo icon"
        width={14}
        height={14}
      />

      <p>Sign up with Facebook</p>
    </LoginBtnsStyled>
  )
}

export const GoogleLoginBtn = ({ bolder }) => {
  return (
    <LoginBtnsStyled
      google
      bolder={bolder}>
      <Image
        src={GoogleIcon.src}
        alt="Google logo icon"
        width={14}
        height={14}
      />
      <p>Sign up with Google</p>
    </LoginBtnsStyled>
  )
}

export const EmailLoginBtn = ({ bolder }) => {
  return (
    <LoginBtnsStyled bolder={bolder}>
      <Image
        src={EmailIcon.src}
        alt="Email logo icon"
        width={14}
        height={14}
      />
      <p>Sign up with Email</p>
    </LoginBtnsStyled>
  )
}
