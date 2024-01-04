import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { H2 } from "../../ui/heading_body_text/HeaderFonts.js"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles.js"
import { NavBar_M_Wrapper } from "./styles/NavBar_M_Wrapper.js"
import {
  ChatAILogo,
  ChatAILogo_M,
  NavBar_D_HamburgerSvg,
  NavBar_M_HamburgerSvg,
  NavBar_M_UserSvg,
} from "@/assets/icons/index.js"

export const NavBar_M = () => {
  const route = useRouter()
  const [isORGState, setIsORGState] = useState(false)

  const handleNavigateHome = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      route.push("/")
    }
  }
  useEffect(() => {
    if (route.pathname === `/${ALL_ROUTES.ORG}`) {
      setIsORGState(true)
    } else {
      setIsORGState(false)
    }
  }, [route.pathname])

  const navigateHome = (e) => {
    if (e.key === "Enter") {
      route.push("/")
    }
    route.push("/")
  }
  const navigateORG = (e) => {
    if (e.key === "Enter") {
      route.push(`/${ALL_ROUTES.ORG}`)
    }
  }

  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  return (
    <NavBar_M_Wrapper mustShowFiltersMobile={mustShowFiltersMobile}>
      <span
        tabIndex={0}
        onKeyDown={navigateHome}
        onClick={navigateHome}>
        <NavBar_M_HamburgerSvg />
      </span>
      <div>
        <span
          tabIndex={0}
          onKeyDown={handleNavigateHome}
          onClick={handleNavigateHome}>
          <H2 bold>Inclusive</H2>
          <ChatAILogo_M />
        </span>
      </div>
      <span>
        <NavBar_M_UserSvg />
      </span>
    </NavBar_M_Wrapper>
  )
}
