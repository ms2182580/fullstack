import SignupForm from "@/components/signup/desktop/SignupForm"
import {
  FacebookLoginBtn,
  GoogleLoginBtn,
} from "@/components/ui/buttons/login/LoginBtns"
import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H1, H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import LoginImage from "../../../assets/images/LoginImage.png"
import { delayMilliseconds } from "../delay"
import {
  INDEX_D_SignupWrapper,
  LeftSignup,
  RightSignup,
} from "./styles/INDEX_D_SignupWrapper"

export const INDEX_D_Signup = () => {
  const [showLoginButtons, setShowLoginButtons] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const handleShowLoginButtons = () => {
    setShowLoginButtons(true)
    setFadeOut(false)
  }
  const handleHideLoginButtons = () => {
    setFadeOut(true)

    setTimeout(() => {
      setShowLoginButtons(false)
    }, delayMilliseconds)
  }

  // const buttonsShowingRef = useRef(null)
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (buttonsShowingRef.current && !buttonsShowingRef.current.contains(event.target)) {
  //       setFadeOut(true)

  //       setTimeout(() => {
  //         setShowLoginButtons(false)
  //       }, `${delayMilliseconds}`)
  //     }
  //   }

  //   document.addEventListener("touchstart", handleClickOutside)
  //   return () => {
  //     document.removeEventListener("touchstart", handleClickOutside)
  //   }
  // }, [])

  const router = useRouter()
  const handleMoveView = (e) => {
    if (e.key === "Enter") {
      router.push("/")
    }
  }

  return (
    <INDEX_D_SignupWrapper showLoginButtons={showLoginButtons}>
      <LeftSignup>
        <span>
          <Image
            src={LoginImage}
            alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
          />
        </span>

        <H2>Connect to community based and recreational services</H2>
      </LeftSignup>

      <RightSignup>
        <H1>
          Join <span>Inclusive</span>
        </H1>
        <div>
          <H4>Already have an account?</H4>
          <Link href="/login">Log In</Link>
        </div>
        <div>
          <GoogleLoginBtn bolder={""} />
          <FacebookLoginBtn bolder={""} />
        </div>
        <div>
          <Caption>or</Caption>
        </div>

        <div>
          <SignupForm />
        </div>
      </RightSignup>
    </INDEX_D_SignupWrapper>
  )
}
