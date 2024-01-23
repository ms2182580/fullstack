import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useCheckMobile } from "@/utils/useCheckMobile"
import { useWidthWindow1024 } from "@/utils/useWidthWindow1024"
import Image from "next/image"
import { useState } from "react"
import { delayMilliseconds } from "../delay"

import { BackArrow } from "@/assets/icons"
import { ButtonSmall } from "@/components/ui/buttons/general"
import Link from "next/link"
import { useRouter } from "next/router"
import LoginImageMobile from "../../../assets/images/LoginImageMobile.jpg"
import { LoginButtonsMobile } from "../mobile/LoginButtonsMobile"
import { INDEX_M_SignupWrapper } from "./styles/INDEX_M_SignupWrapper"

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

  const handleHome = (e) => {
    router.push("/")
  }

  return (
    <INDEX_M_SignupWrapper showLoginButtons={showLoginButtons}>
      <span onClick={handleHome}>
        <BackArrow />
        <span>Return to Home</span>
      </span>
      <div>
        <H4 primary_cta>
          <span>Connect to</span> community based
          <br /> <span>and</span> recreational services
        </H4>
        <span>
          <Image
            src={LoginImageMobile}
            alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
          />
        </span>
        <span
          onClick={() => handleShowLoginButtons()}
          onTouchStart={(e) => {
            e.stopPropagation()
            handleShowLoginButtons()
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              handleHideLoginButtons()
            }
          }}
        >
          <ButtonSmall>Join Inclusive</ButtonSmall>
          <div>
            <H4>Already have an account?</H4>
            <Link href="/login">Log in</Link>
          </div>
        </span>
        {showLoginButtons && (
          <LoginButtonsMobile
            fadeOut={fadeOut}
            handleHideLoginButtons={handleHideLoginButtons}
            showLoginButtons={showLoginButtons}
          />
        )}
        {/* <div>
          <GoogleLoginBtn bolder={""} />
          <FacebookLoginBtn bolder={""} />
        </div> */}
        {/* <div>
          <Caption>or</Caption>
        </div> */}

        {/* <div>
          <Signup_M_SignupForm />
        </div> */}
      </div>
    </INDEX_M_SignupWrapper>
  )
}
