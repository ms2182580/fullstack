import Image from "next/image.js"
import { useRouter } from "next/router"
import { useState } from "react"
import { BackArrow } from "../../assets/icons"
import LoginImage from "../../assets/images/LoginImage.png"
import LoginImageMobile from "../../assets/images/LoginImageMobile.jpg"
import { delayMilliseconds } from "../../components/signup/delay"
import { LoginButtonsMobile } from "../../components/signup/mobile/LoginButtonsMobile"
import { LastComponentsMobileWrapper } from "../../components/signup/styles/LastComponentsMobileWrapper"
import { ButtonSmall } from "../../components/ui/buttons/general"
import {
  FacebookLoginBtn,
  GoogleLoginBtn,
} from "../../components/ui/buttons/login/LoginBtns.js"
import { Caption } from "../../components/ui/heading_body_text/DesktopMobileFonts.js"
import {
  H1,
  H2,
  H4,
} from "../../components/ui/heading_body_text/HeaderFonts.js"
import {
  HyperlinkM,
  HyperlinkXS,
} from "../../components/ui/hyperlink/HyperlinkFonts.js"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import { useCheckMobile } from "../../utils/useCheckMobile"
import { useWidthWindow1024 } from "../../utils/useWidthWindow1024"
import SignupForm from "./SignupForm.js"
import SignupWrapper, { LeftSignup, RightSignup } from "./styles/Signup.js"
import { INDEX_D_Signup } from "@/components/signup/desktop/INDEX_D_Signup"
import { INDEX_M_Signup } from "@/components/signup/mobile/INDEX_M_Signup"

const Signup = () => {
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
    }, `${delayMilliseconds}`)
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

  return <>{isMobile ? <INDEX_M_Signup /> : <INDEX_D_Signup />}</>
}

export default Signup
