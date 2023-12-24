import { ALL_ROUTES } from "@/utils/ORG/useCheckSlug_ORG"
import { useRouter } from "next/router.js"
import { useEffect, useState } from "react"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { H2 } from "../../ui/heading_body_text/HeaderFonts.js"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles.js"
import { NavBar_M_Wrapper } from "./styles/NavBar_M_Wrapper.js"

export const NavBar_M = () => {
  const route = useRouter()
  const [isORGState, setIsORGState] = useState(false)

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
        <H2
          bold
          logo>
          INCLUSIVE
        </H2>
      </span>

      <ul>
        <li>Hamburger icon</li>

        <li
          tabIndex={0}
          onKeyDown={navigateORG}
          className={/[org]\/\w|[org]/.test(route.pathname) ? "active" : null}>
          <LinkNoStyle href={`/${ALL_ROUTES.ORG}`}>Resource directory</LinkNoStyle>
        </li>
        <li>Ask a question</li>

        <li>Info</li>
      </ul>
    </NavBar_M_Wrapper>
  )
}
