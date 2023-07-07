import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { NavBar_D_HamburgerSvg } from "../../../assets/Icons"
import { useCtx_ShowModal } from "../../../context/Ctx_ShowModal"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile_Provider"
import { H2 } from "../../ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { NavBar_D_SearchComponent } from "./NavBar_D_SearchComponent.js"
import { NavBar_D_SignComponent } from "./NavBar_D_SignComponent.js"
import { NavBar_D_Wrapped } from "./styles/NavBar_D_Wrapped"

export const NavBar_D = () => {
  const route = useRouter()
  const [isORGState, setIsORGState] = useState(false)

  useEffect(() => {
    if (route.pathname === "/ORG") {
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
      route.push("/ORG")
    }
  }

  const { modalShowedCtx } = useCtx_ShowModal()
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  return (
    <NavBar_D_Wrapped
      isORG={isORGState}
      modalShowedCtx={modalShowedCtx}
      mustShowFiltersMobile={mustShowFiltersMobile}>
      <div>
        <span
          tabIndex={0}
          onKeyDown={navigateHome}
          onClick={navigateHome}>
          {" "}
          <H2
            bold
            logo>
            {" "}
            INCLUSIVE
          </H2>
        </span>
        <NavBar_D_SearchComponent />
        <NavBar_D_SignComponent />
      </div>

      <div />

      <div>
        <div>
          <span>
            <NavBar_D_HamburgerSvg />

          </span>
          <ul>

            <li
              tabIndex={0}
              onKeyDown={navigateORG}
              className={/[ORG]\/\w|[ORG]/.test(route.pathname) ? "active" : null}>
              <LinkNoStyle href="/ORG">Resource directory</LinkNoStyle>
            </li>

            <li>Ask a question</li>

            <li>Info</li>
          </ul>
        </div>

        <div>+ Quick care plan</div>
      </div>

      {modalShowedCtx && <div className="InFront"></div>}
    </NavBar_D_Wrapped>
  )
}
