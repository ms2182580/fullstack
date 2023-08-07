import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { NavBar_D_QuickCarePlanSvg } from "../../../assets/Icons"
import { useCtx_ShowModal } from "../../../context/Ctx_ShowModal"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile_Provider"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { InFrontModal_D_Wrapper } from "../../inFront_D/styles/InFrontModal_D_Wrapper"
import { H2, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { NavBar_D_HamburgerComponent } from "./NavBar_D_HamburgerComponent.js"
import { NavBar_D_InfoDropdown } from "./NavBar_D_InfoDropdown.js"
import { NavBar_D_SearchComponent } from "./NavBar_D_SearchComponent.js"
import { NavBar_D_SignComponent } from "./NavBar_D_SignComponent.js"
import { INDEX_NavBar_D_Wrapped } from "./styles/INDEX_NavBar_D_Wrapped"

export const INDEX_NavBar_D = () => {
  const route = useRouter()
  const [isORGState, setIsORGState] = useState(false)
  const [infoDropdownState, setInfoDropdownState] = useState(false)

  const infoRef = useRef()

  useOutsideHide(infoRef, setInfoDropdownState)

  const handleToggleInfoDropdown = () => {
    setInfoDropdownState((prevState) => !prevState)
  }

  useEffect(() => {
    if (route.pathname.includes("/ORG")) {
      setIsORGState(true)
    } else {
      setIsORGState(false)
    }
  }, [route.pathname])

  const handleNavigateHome = (e) => {
    if (e.key === "Enter") {
      route.push("/")
    }
    route.push("/")
  }
  const handleNavigateORG = (e) => {
    if (e.key === "Enter") {
      route.push("/ORG")
    }
  }

  const { modalShowedCtx } = useCtx_ShowModal()
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  return (
    <INDEX_NavBar_D_Wrapped
      isORG={isORGState}
      mustShowFiltersMobile={mustShowFiltersMobile}>
      <div>
        <span
          tabIndex={0}
          onKeyDown={handleNavigateHome}
          onClick={handleNavigateHome}>
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
            <NavBar_D_HamburgerComponent />
          </span>
          <ul>
            <li
              tabIndex={0}
              onKeyDown={handleNavigateORG}
              className={/[ORG]\/\w|[ORG]/.test(route.pathname) ? "active" : null}>
              <H4 medium>
                <LinkNoStyle href="/ORG">Resource Directory</LinkNoStyle>
              </H4>
            </li>
            <li>
              <H4 medium>Ask a Question</H4>
            </li>
            <li onClick={handleToggleInfoDropdown}>
              <H4 medium>Info</H4>

              {infoDropdownState && <NavBar_D_InfoDropdown theRef={infoRef} />}
            </li>
          </ul>
        </div>
        <div>
          <NavBar_D_QuickCarePlanSvg /> <p>Quick Care Plan</p>
        </div>
      </div>

      <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} />
    </INDEX_NavBar_D_Wrapped>
  )
}
