import FacebookIcon from "../../../../assets/Icons/FacebookIcon.jpg"
import GoogleIcon from "../../../../assets/Icons/GoogleIcon.png"
import EmailIcon from "../../../../assets/Icons/EmailIcon.png"
import { LoginBtnsStyled} from "./LoginBtnsStyled.js"
import Image from "next/image"

export const FacebookLoginBtn = () => {
  return (
    <LoginBtnsStyled facebook>
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

export const GoogleLoginBtn = () => {
  return (
    <LoginBtnsStyled google>
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

export const EmailLoginBtn = () => {
  return (
    <LoginBtnsStyled>
      <Image src={EmailIcon.src} alt="Email logo icon" width={14} height={14} />
      <p>Sign up with Email</p>
    </LoginBtnsStyled>
  )
}
