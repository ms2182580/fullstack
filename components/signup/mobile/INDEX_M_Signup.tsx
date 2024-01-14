import { useWidthWindow1024 } from "@/utils/useWidthWindow1024"
import { useCheckMobile } from "@/utils/useCheckMobile"
import { useState } from "react"
import { delayMilliseconds } from "../delay"
import Image from "next/image"
import { H1, H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import {
  HyperlinkM,
  HyperlinkS,
  HyperlinkXS,
} from "@/components/ui/hyperlink/HyperlinkFonts"
import {
  FacebookLoginBtn,
  GoogleLoginBtn,
} from "@/components/ui/buttons/login/LoginBtns"
import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { LastComponentsMobileWrapper } from "../styles/LastComponentsMobileWrapper"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { LoginButtonsMobile } from "../mobile/LoginButtonsMobile"
import LoginImage from "../../../assets/images/LoginImage.png"
import LoginImageMobile from "../../../assets/images/LoginImageMobile.jpg"
import { useRouter } from "next/router"
import { INDEX_M_SignupWrapper } from "./styles/INDEX_M_SignupWrapper"
import { Signup_M_SignupForm } from "./Signup_M_SignupForm"

export const INDEX_M_Signup = () => {
  const { isMobile } = useWidthWindow1024()

  const { isTouchScreen } = useCheckMobile()
  // console.log('isTouchScreen:', isTouchScreen)

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
    <INDEX_M_SignupWrapper showLoginButtons={showLoginButtons}>
      <div>
        <span>
          <Image
            src={LoginImageMobile}
            alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
          />
        </span>
        <H4>Connect to community based and recreational services</H4>

        <H1>
          Join <span>Inclusive</span>
        </H1>
        <div>
          <H4>Already have an account?</H4>
          <HyperlinkS href="/login" name="Log in" />
        </div>
        <div>
          <GoogleLoginBtn bolder={""} />
          <FacebookLoginBtn bolder={""} />
        </div>
        <div>
          <Caption>or</Caption>
        </div>

        <div>
          <Signup_M_SignupForm />
        </div>
      </div>
    </INDEX_M_SignupWrapper>
  )
}
