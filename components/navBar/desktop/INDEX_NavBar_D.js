import { useNavbarHomeHeight } from "@/context/NavbarHome_Ctx_Height"
import Link from "next/link.js"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { ChatAILogo, NavBar_D_QuickCarePlanSvg } from "../../../assets/Icons"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile_Provider"
import { useOutsideHide } from "../../../utils/useOutsideHide"
import { H1, H2, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import { NavBar_D_HamburgerComponent } from "./NavBar_D_HamburgerComponent.js"
import { NavBar_D_InfoDropdown } from "./NavBar_D_InfoDropdown.js"
import { NavBar_D_SearchComponent } from "./NavBar_D_SearchComponent.js"
import { NavBar_D_SignComponent } from "./NavBar_D_SignComponent.js"
import { INDEX_NavBar_D_Wrapped } from "./styles/INDEX_NavBar_D_Wrapped"
import { INDEX_NavBar_HomeOnly_DWrapper } from "./styles/INDEX_NavBar_HomeOnly_DWrapper.js"

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

  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  let { height, setHeight } = useNavbarHomeHeight()
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

  if (route.pathname !== "/") {
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
            <H2 bold> INCLUSIVE</H2>
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
      </INDEX_NavBar_D_Wrapped>
    )
  }

  if (route.pathname === "/") {
    return (
      <INDEX_NavBar_HomeOnly_DWrapper ref={refHeight}>
        <div tabIndex={0}>
          <H1>Inclusive</H1>
          <ChatAILogo />
        </div>

        <Link href="/signup">Sign up</Link>
      </INDEX_NavBar_HomeOnly_DWrapper>
    )
  }
}
