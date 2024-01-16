import { INDEX_D_Signup } from "@/components/signup/desktop/INDEX_D_Signup"
import { INDEX_M_Signup } from "@/components/signup/mobile/INDEX_M_Signup"
import { useRouter } from "next/router"
import { useState } from "react"
import { delayMilliseconds } from "../../components/signup/delay"
import { useCheckMobile } from "../../utils/useCheckMobile"
import { useWidthWindow1024 } from "../../utils/useWidthWindow1024"

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
