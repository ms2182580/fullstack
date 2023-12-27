import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { ChatAILogo } from "../../../assets/icons2/index"
import { useNavbarHomeHeight } from "../../../context/NavbarHome_Ctx_Height"
import { H1 } from "../../ui/heading_body_text/HeaderFonts"
import { NavBar_D_OnlyHomeWrapper } from "./styles/NavBar_D_OnlyHomeWrapper.js"

export const NavBar_D_OnlyHome = () => {
  const route = useRouter()

  let { setHeight } = useNavbarHomeHeight()
  const refHeight = useRef(null)

  useEffect(() => {
    if (refHeight.current) {
      let theData = refHeight.current.getBoundingClientRect()
      setHeight(theData)
    }
  }, [refHeight])

  useEffect(() => {
    if (refHeight.current) {
      let theData = refHeight.current.getBoundingClientRect()
      setHeight(theData)
    }
  }, [route.pathname])

  return (
    <NavBar_D_OnlyHomeWrapper ref={refHeight}>
      <div tabIndex={0}>
        <H1>Inclusive</H1>
        <ChatAILogo />
      </div>

      <Link href="/signup">Sign up</Link>
    </NavBar_D_OnlyHomeWrapper>
  )
}
